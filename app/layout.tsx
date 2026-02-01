import type { Metadata } from "next"
import { Inter, Libre_Baskerville, Roboto_Mono } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const libreBaskerville = Libre_Baskerville({ 
  subsets: ["latin"], 
  weight: ["400", "700"],
  variable: "--font-serif" 
})
const robotoMono = Roboto_Mono({ 
  subsets: ["latin"], 
  variable: "--font-mono" 
})

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
  icons: {
    icon: '/logo-transparent.png',
    apple: '/logo-transparent.png',
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
        url: '/logo.jpg',
        width: 1024,
        height: 1024,
        alt: 'Tech Intervention - Tech Trinity Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tech Intervention | Emergency Laptop Repair',
    description: 'Expert laptop repair with same-day emergency service',
    images: ['/logo.jpg'],
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
        inter.variable,
        libreBaskerville.variable,
        robotoMono.variable
      )}>
        {children}
      </body>
    </html>
  )
}
