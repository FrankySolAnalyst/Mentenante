# Tech Intervention - Laptop Repair Service Website

> **"Laptop Dead? Don't Panic. We Resurrect Tech."**

A modern, production-ready website for a laptop repair technician service built with Next.js 14, TypeScript, Tailwind CSS, and Supabase.

## 🎨 Brand Identity

**The Tech Trinity**: Three figures under a "siren halo" with wings representing:
- **Left Figure**: The Communicator (Support)
- **Center Figure**: The Expert (Savior)
- **Right Figure**: The Customer (Panic Mode)

**Vibe**: "We are the calm in your digital storm." Vintage etching aesthetic meets modern, clean UI.

**Color Palette**: 
- Monochrome (Black/White/Grainy Grey)
- Siren Red (#FF4444) for urgent CTAs

## 🚀 Tech Stack

- **Framework**: Next.js 14+ (App Router, TypeScript)
- **Styling**: Tailwind CSS + Shadcn/UI (Radix Primitives)
- **Backend/DB**: Supabase (PostgreSQL)
- **Forms**: React Hook Form + Zod validation
- **Deployment**: Vercel
- **Icons**: Lucide React

## 📦 Features

### Core Deliverables

1. **Hero Section** - Features the "Tech Trinity" illustration with dual CTAs (Emergency vs Standard)
2. **Service Grid** - 6 core services with witty, confident copy
3. **Live Repair Tracker** - Real-time ticket status lookup via Supabase
4. **Trust & Social Proof** - "No Fix, No Pay" guarantee and stats
5. **Testimonials Marquee** - Infinite scroll testimonials
6. **Contact Form** - Lead capture with Supabase integration
7. **SEO Optimized** - JSON-LD Schema markup for LocalBusiness

### Services Offered

- 🔧 Motherboard Repair (BGA/Chipset)
- 💧 Liquid Damage Cleanup
- 🖥️ Screen Replacement
- 🌡️ Thermal Paste/Cleaning (Overheating)
- 💾 Windows/Software Install
- 🔄 Data Recovery

## 🛠️ Setup Instructions

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd tech-intervention
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Supabase**
   
   a. Create a new Supabase project at [supabase.com](https://supabase.com)
   
   b. Run the SQL schema:
   - Go to the SQL Editor in your Supabase dashboard
   - Copy the contents of `supabase/schema.sql`
   - Execute the SQL to create tables, triggers, and sample data
   
   c. Get your Supabase credentials:
   - Project URL
   - Anon/Public Key

4. **Configure environment variables**
   ```bash
   cp .env.local.example .env.local
   ```
   
   Edit `.env.local` and add your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📊 Database Schema

### Tables

- **tickets** - Main repair ticket tracking
- **leads** - Initial contact form submissions
- **testimonials** - Customer reviews
- **ticket_status_history** - Audit trail for status changes

### Key Features

- Auto-generated ticket numbers (format: `TI-YYMMDD-XXX`)
- Status tracking with timeline
- Row Level Security (RLS) enabled
- Automatic timestamps and triggers

## 🎨 Design System

### Typography
- Headings: Georgia (serif) - vintage aesthetic
- Body: Inter (sans-serif) - modern readability

### Colors
```css
--siren: #FF4444 (Primary CTA)
--siren-dark: #DD0000 (Hover state)
--background: White/Gray gradient
--foreground: Black
```

### Custom Effects
- Grainy texture overlay (vintage etching)
- Siren pulse animation (emergency buttons)
- Marquee scrolling (testimonials)
- Engraving borders (vintage cards)

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `NEXT_PUBLIC_SITE_URL` (your production URL)
4. Deploy!

### Post-Deployment Checklist

- [ ] Update `NEXT_PUBLIC_SITE_URL` in production
- [ ] Add Google verification code in `app/layout.tsx`
- [ ] Configure custom domain
- [ ] Test Supabase connection
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Analytics (optional)

## 📱 Component Structure

```
components/
├── ui/              # Shadcn base components
│   ├── button.tsx
│   ├── input.tsx
│   ├── card.tsx
│   └── ...
├── header.tsx       # Navigation
├── hero.tsx         # Hero section with Tech Trinity
├── services-grid.tsx    # Service cards
├── repair-tracker.tsx   # Ticket lookup
├── trust-badges.tsx     # Trust indicators
├── testimonials-marquee.tsx  # Scrolling reviews
├── contact-form.tsx     # Lead capture form
└── footer.tsx       # Footer with service areas
```

## 🎯 SEO Features

- Semantic HTML structure
- JSON-LD LocalBusiness schema
- OpenGraph & Twitter Card meta tags
- Optimized metadata per page
- Service area targeting (Sector 1-6, Pipera, Baneasa)
- Mobile-responsive design
- Fast page load times

## 🔐 Security

- Row Level Security (RLS) on all Supabase tables
- Public can only read tickets by ticket_number
- Public can insert leads (for contact form)
- Public can read approved testimonials only
- Input validation with Zod schemas

## 📈 Future Enhancements

- [ ] Admin dashboard for ticket management
- [ ] SMS notifications for status updates
- [ ] Online payment integration
- [ ] Multi-language support (Romanian/English)
- [ ] Blog section for repair tips
- [ ] Before/after photo gallery
- [ ] Real-time chat support

## 🤝 Contributing

This is a production project. For feature requests or bug reports, please open an issue.

## 📄 License

Proprietary - All rights reserved.

## 📞 Contact

- **Phone**: 0123 456 789
- **Email**: contact@techintervention.ro
- **Address**: Str. Exemplu 123, Sector 1, București

---

Built with ❤️ and ⚡ by Tech Intervention
