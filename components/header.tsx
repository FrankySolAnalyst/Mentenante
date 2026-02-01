"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, Languages } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { GoogleReviewsBadge } from "@/components/google-reviews-badge"

export function Header() {
  const { language, setLanguage, t } = useLanguage()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <div className="relative h-12 w-12 flex-shrink-0">
            <Image
              src="/logo-transparent.png"
              alt="Tech Intervention Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="vintage-heading text-lg hidden sm:inline">Tech Intervention</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="#services" className="transition-colors hover:text-siren">
            {t.header.services}
          </Link>
          <Link href="#tracker" className="transition-colors hover:text-siren">
            {t.header.trackRepair}
          </Link>
          <Link href="#testimonials" className="transition-colors hover:text-siren">
            {t.header.testimonials}
          </Link>
          <Link href="#contact" className="transition-colors hover:text-siren">
            {t.header.contact}
          </Link>
        </nav>

        {/* Emergency CTA + Reviews + Language Switcher */}
        <div className="flex items-center gap-2">
          {/* Google Reviews Badge */}
          <div className="hidden lg:block">
            <GoogleReviewsBadge />
          </div>
          
          {/* Language Switcher */}
          <button
            onClick={() => setLanguage(language === 'ro' ? 'en' : 'ro')}
            className="flex items-center space-x-1 px-3 py-1.5 rounded border border-gray-300 hover:bg-gray-100 transition-colors text-sm font-medium"
            title={language === 'ro' ? 'Switch to English' : 'Comută la Română'}
          >
            <Languages className="h-4 w-4" />
            <span className="uppercase">{language === 'ro' ? 'EN' : 'RO'}</span>
          </button>

          <a href="tel:+40123456789" className="hidden sm:flex items-center space-x-2 text-sm font-medium hover:text-siren transition-colors">
            <Phone className="h-4 w-4" />
            <span className="font-semibold">0123 456 789</span>
          </a>
          <Button variant="siren" size="sm" className="hidden md:flex">
            {t.header.emergencyRepair}
          </Button>
        </div>
      </div>
    </header>
  )
}
