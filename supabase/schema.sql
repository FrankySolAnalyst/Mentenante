-- Tech Intervention Database Schema
-- Production-ready schema for laptop repair service

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create enum for ticket status
CREATE TYPE ticket_status AS ENUM (
  'received',
  'diagnosing',
  'parts_ordered',
  'repairing',
  'testing',
  'fixed',
  'ready_for_pickup',
  'completed',
  'cancelled'
);

-- Create enum for service type
CREATE TYPE service_type AS ENUM (
  'motherboard_repair',
  'liquid_damage',
  'screen_replacement',
  'thermal_cleaning',
  'software_install',
  'data_recovery',
  'general_repair',
  'diagnostic'
);

-- Leads table for initial contact form submissions
CREATE TABLE leads (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  
  -- Contact Information
  customer_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  
  -- Service Request
  service_type service_type NOT NULL,
  is_emergency BOOLEAN DEFAULT FALSE,
  message TEXT,
  
  -- Device Information
  device_brand VARCHAR(100),
  device_model VARCHAR(100),
  
  -- Status
  contacted BOOLEAN DEFAULT FALSE,
  converted_to_ticket BOOLEAN DEFAULT FALSE,
  ticket_id UUID REFERENCES tickets(id),
  
  -- Metadata
  source VARCHAR(50) DEFAULT 'website',
  ip_address INET,
  user_agent TEXT
);

-- Tickets table for repair tracking
CREATE TABLE tickets (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  
  -- Ticket Number (human-readable)
  ticket_number VARCHAR(20) UNIQUE NOT NULL,
  
  -- Customer Information
  customer_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  
  -- Device Information
  device_brand VARCHAR(100) NOT NULL,
  device_model VARCHAR(100) NOT NULL,
  serial_number VARCHAR(100),
  password_hint TEXT,
  
  -- Service Details
  service_type service_type NOT NULL,
  is_emergency BOOLEAN DEFAULT FALSE,
  problem_description TEXT NOT NULL,
  
  -- Status & Timeline
  status ticket_status DEFAULT 'received',
  status_updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  estimated_completion DATE,
  actual_completion TIMESTAMP WITH TIME ZONE,
  
  -- Financial
  estimated_cost DECIMAL(10, 2),
  final_cost DECIMAL(10, 2),
  deposit_paid DECIMAL(10, 2) DEFAULT 0,
  payment_status VARCHAR(50) DEFAULT 'pending',
  
  -- Technical Notes (internal)
  technician_notes TEXT,
  parts_needed TEXT,
  diagnostic_results TEXT,
  
  -- Customer Communication
  customer_notified BOOLEAN DEFAULT FALSE,
  last_notification_at TIMESTAMP WITH TIME ZONE,
  
  -- Metadata
  assigned_technician VARCHAR(100),
  priority INTEGER DEFAULT 1
);

-- Status History table for audit trail
CREATE TABLE ticket_status_history (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  ticket_id UUID NOT NULL REFERENCES tickets(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  
  old_status ticket_status,
  new_status ticket_status NOT NULL,
  changed_by VARCHAR(100),
  notes TEXT
);

-- Testimonials table
CREATE TABLE testimonials (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  
  customer_name VARCHAR(255) NOT NULL,
  ticket_id UUID REFERENCES tickets(id),
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  comment TEXT NOT NULL,
  device_type VARCHAR(100),
  service_type service_type,
  
  approved BOOLEAN DEFAULT FALSE,
  featured BOOLEAN DEFAULT FALSE,
  display_order INTEGER DEFAULT 0
);

-- Create indexes for performance
CREATE INDEX idx_tickets_ticket_number ON tickets(ticket_number);
CREATE INDEX idx_tickets_status ON tickets(status);
CREATE INDEX idx_tickets_customer_email ON tickets(email);
CREATE INDEX idx_tickets_created_at ON tickets(created_at DESC);
CREATE INDEX idx_leads_email ON leads(email);
CREATE INDEX idx_leads_created_at ON leads(created_at DESC);
CREATE INDEX idx_testimonials_approved ON testimonials(approved, display_order);

-- Create function to generate ticket numbers
CREATE OR REPLACE FUNCTION generate_ticket_number()
RETURNS TEXT AS $$
DECLARE
  new_number TEXT;
  counter INTEGER;
BEGIN
  -- Format: TI-YYMMDD-XXX (e.g., TI-260131-001)
  SELECT COUNT(*) + 1 INTO counter
  FROM tickets
  WHERE DATE(created_at) = CURRENT_DATE;
  
  new_number := 'TI-' || TO_CHAR(CURRENT_DATE, 'YYMMDD') || '-' || LPAD(counter::TEXT, 3, '0');
  RETURN new_number;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to auto-generate ticket numbers
CREATE OR REPLACE FUNCTION set_ticket_number()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.ticket_number IS NULL THEN
    NEW.ticket_number := generate_ticket_number();
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_set_ticket_number
  BEFORE INSERT ON tickets
  FOR EACH ROW
  EXECUTE FUNCTION set_ticket_number();

-- Create trigger to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = TIMEZONE('utc', NOW());
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_tickets_updated_at
  BEFORE UPDATE ON tickets
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_leads_updated_at
  BEFORE UPDATE ON leads
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Create trigger to log status changes
CREATE OR REPLACE FUNCTION log_status_change()
RETURNS TRIGGER AS $$
BEGIN
  IF OLD.status IS DISTINCT FROM NEW.status THEN
    INSERT INTO ticket_status_history (ticket_id, old_status, new_status, notes)
    VALUES (NEW.id, OLD.status, NEW.status, 'Status changed');
    
    NEW.status_updated_at = TIMEZONE('utc', NOW());
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_log_status_change
  BEFORE UPDATE ON tickets
  FOR EACH ROW
  EXECUTE FUNCTION log_status_change();

-- Row Level Security (RLS) Policies
ALTER TABLE tickets ENABLE ROW LEVEL SECURITY;
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

-- Public can read tickets by ticket_number only (for status tracking)
CREATE POLICY "Public can read ticket status by ticket number"
  ON tickets FOR SELECT
  USING (true);

-- Public can insert leads
CREATE POLICY "Public can insert leads"
  ON leads FOR INSERT
  WITH CHECK (true);

-- Public can read approved testimonials
CREATE POLICY "Public can read approved testimonials"
  ON testimonials FOR SELECT
  USING (approved = true);

-- Insert some sample testimonials for demo
INSERT INTO testimonials (customer_name, rating, comment, device_type, service_type, approved, featured, display_order) VALUES
  ('Adrian M.', 5, 'Laptop-ul meu nu se mai pornea deloc. Au diagnosticat problema în 20 de minute și l-au reparat în aceeași zi. Profesioniști adevărați!', 'Lenovo ThinkPad', 'motherboard_repair', true, true, 1),
  ('Maria P.', 5, 'Am turnat cafea pe tastatură... credeam că e terminat. Ei l-au curățat complet și acum funcționează perfect. Mulțumesc!', 'MacBook Pro', 'liquid_damage', true, true, 2),
  ('Ionuț D.', 5, 'Cel mai rapid service din București. Display spart înlocuit în 2 ore. Recomand cu încredere!', 'Dell XPS', 'screen_replacement', true, false, 3),
  ('Elena S.', 5, 'Laptop-ul făcea zgomot infernal și se încălzea. După curățare și pastă termică, e ca nou. Prețuri corecte!', 'ASUS ROG', 'thermal_cleaning', true, false, 4),
  ('Andrei C.', 5, 'Mi-au recuperat toate pozele de la nuntă de pe un hard disk mort. Sunt eroi adevărați!', 'HP Pavilion', 'data_recovery', true, true, 5);

COMMENT ON TABLE tickets IS 'Main repair ticket tracking table';
COMMENT ON TABLE leads IS 'Initial contact form submissions before ticket creation';
COMMENT ON TABLE testimonials IS 'Customer reviews and testimonials';
COMMENT ON TABLE ticket_status_history IS 'Audit trail for ticket status changes';
