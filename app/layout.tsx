import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "Tech Intervention | Emergency Laptop Repair Bucharest",
  description: "Laptop dead? Don't panic. We resurrect tech. Expert motherboard repair, liquid damage cleanup, screen replacement, and data recovery in Bucharest. Same-day emergency service available.",
  keywords: [
    "laptop repair Bucharest",
    "reparatii laptop",
    "motherboard repair",
    "liquid damage repair",
    "screen replacement",
    "data recovery",
    "emergency laptop repair",
    "same day repair",
    "tech intervention",
  ],
  authors: [{ name: "Tech Intervention" }],
  creator: "Tech Intervention",
  publisher: "Tech Intervention",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'ro_RO',
    url: '/',
    siteName: 'Tech Intervention',
    title: 'Tech Intervention | Emergency Laptop Repair Bucharest',
    description: 'Laptop dead? Don\'t panic. We resurrect tech. Expert repair services with same-day emergency options.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Tech Intervention - Emergency Laptop Repair',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tech Intervention | Emergency Laptop Repair',
    description: 'Expert laptop repair with same-day emergency service',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ro" className="scroll-smooth">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased grain-overlay",
        inter.variable
      )}>
        {children}
      </body>
    </html>
  )
}
