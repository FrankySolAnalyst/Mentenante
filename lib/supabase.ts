import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Type definitions based on our schema
export type TicketStatus = 
  | 'received'
  | 'diagnosing'
  | 'parts_ordered'
  | 'repairing'
  | 'testing'
  | 'fixed'
  | 'ready_for_pickup'
  | 'completed'
  | 'cancelled'

export type ServiceType =
  | 'motherboard_repair'
  | 'liquid_damage'
  | 'screen_replacement'
  | 'thermal_cleaning'
  | 'software_install'
  | 'data_recovery'
  | 'general_repair'
  | 'diagnostic'

export interface Ticket {
  id: string
  created_at: string
  updated_at: string
  ticket_number: string
  customer_name: string
  email: string
  phone: string
  device_brand: string
  device_model: string
  serial_number?: string
  service_type: ServiceType
  is_emergency: boolean
  problem_description: string
  status: TicketStatus
  status_updated_at: string
  estimated_completion?: string
  actual_completion?: string
  estimated_cost?: number
  final_cost?: number
  customer_notified: boolean
}

export interface Lead {
  id: string
  created_at: string
  customer_name: string
  email: string
  phone: string
  service_type: ServiceType
  is_emergency: boolean
  message?: string
  device_brand?: string
  device_model?: string
}

export interface Testimonial {
  id: string
  created_at: string
  customer_name: string
  rating: number
  comment: string
  device_type?: string
  service_type?: ServiceType
  approved: boolean
  featured: boolean
}

// Helper function to get human-readable status
export function getStatusLabel(status: TicketStatus): string {
  const labels: Record<TicketStatus, string> = {
    received: 'Received',
    diagnosing: 'Diagnosing',
    parts_ordered: 'Parts Ordered',
    repairing: 'Repairing',
    testing: 'Testing',
    fixed: 'Fixed',
    ready_for_pickup: 'Ready for Pickup',
    completed: 'Completed',
    cancelled: 'Cancelled'
  }
  return labels[status]
}

// Helper function to get status color
export function getStatusColor(status: TicketStatus): string {
  const colors: Record<TicketStatus, string> = {
    received: 'bg-blue-500',
    diagnosing: 'bg-yellow-500',
    parts_ordered: 'bg-orange-500',
    repairing: 'bg-purple-500',
    testing: 'bg-indigo-500',
    fixed: 'bg-green-500',
    ready_for_pickup: 'bg-green-600',
    completed: 'bg-gray-500',
    cancelled: 'bg-red-500'
  }
  return colors[status]
}
