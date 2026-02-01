"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, Languages, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { GoogleReviewsBadge } from "@/components/google-reviews-badge"
import { useState } from "react"

export function Header() {
  const { language, setLanguage, t } = useLanguage()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/98 backdrop-blur-sm shadow-sm">
      {/* Desktop Header - Centered Layout */}
      <div className="hidden md:block">
        {/* Top Row - Logo Centered */}
        <div className="border-b border-gray-100">
          <div className="container mx-auto py-4">
            <Link href="/" className="flex flex-col items-center justify-center space-y-2">
              <div className="relative h-16 w-16">
                <Image
                  src="/logo-transparent.png"
                  alt="Tech Intervention - Tech Trinity"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="vintage-heading text-xl tracking-wider">Tech Trinity</span>
            </Link>
          </div>
        </div>

        {/* Bottom Row - Navigation Centered */}
        <div className="border-b border-gray-100">
          <div className="container mx-auto">
            <div className="flex items-center justify-center gap-8 py-3">
              <nav className="flex items-center space-x-8 text-sm font-semibold uppercase tracking-wide">
                <Link href="#services" className="transition-colors hover:text-siren technical-mono">
                  {t.header.services}
                </Link>
                <Link href="#tracker" className="transition-colors hover:text-siren technical-mono">
                  {t.header.trackRepair}
                </Link>
                <Link href="#contact" className="transition-colors hover:text-siren technical-mono">
                  {t.header.contact}
                </Link>
              </nav>

              {/* Right Side Actions */}
              <div className="flex items-center gap-3 border-l border-gray-200 pl-8">
                {/* Language Switcher */}
                <button
                  onClick={() => setLanguage(language === 'ro' ? 'en' : 'ro')}
                  className="flex items-center space-x-1 px-3 py-1.5 border border-black hover:bg-black hover:text-white transition-all text-xs font-bold uppercase tracking-wider btn-brutalist"
                  title={language === 'ro' ? 'Switch to English' : 'Comută la Română'}
                >
                  <Languages className="h-3 w-3" />
                  <span>{language === 'ro' ? 'EN' : 'RO'}</span>
                </button>

                <a href="tel:+40123456789" className="flex items-center space-x-2 text-xs font-bold hover:text-siren transition-colors technical-mono">
                  <Phone className="h-4 w-4" />
                  <span>0123 456 789</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Header - Clean Hamburger */}
      <div className="md:hidden">
        <div className="container mx-auto flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative h-10 w-10 max-h-24">
              <Image
                src="/logo-transparent.png"
                alt="Tech Trinity"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="vintage-heading text-sm">Tech Trinity</span>
          </Link>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setLanguage(language === 'ro' ? 'en' : 'ro')}
              className="px-2 py-1 border border-black text-xs font-bold uppercase"
            >
              {language === 'ro' ? 'EN' : 'RO'}
            </button>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 border border-black"
              aria-label="Toggle menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="border-t border-gray-200 bg-white">
            <nav className="container mx-auto py-4 flex flex-col space-y-3">
              <Link 
                href="#services" 
                className="text-sm font-semibold uppercase hover:text-siren technical-mono"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.header.services}
              </Link>
              <Link 
                href="#tracker" 
                className="text-sm font-semibold uppercase hover:text-siren technical-mono"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.header.trackRepair}
              </Link>
              <Link 
                href="#contact" 
                className="text-sm font-semibold uppercase hover:text-siren technical-mono"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.header.contact}
              </Link>
              <a href="tel:+40123456789" className="text-sm font-bold technical-mono pt-2 border-t">
                <Phone className="h-4 w-4 inline mr-2" />
                0123 456 789
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
