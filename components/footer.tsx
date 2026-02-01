"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const { t } = useLanguage()
  const serviceAreas = [
    "Sector 1", "Sector 2", "Sector 3", "Sector 4", 
    "Sector 5", "Sector 6", "Pipera", "Baneasa"
  ]

  return (
    <footer className="border-t bg-black text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative h-10 w-10 flex-shrink-0">
                <Image
                  src="/logo-transparent.png"
                  alt="Tech Intervention Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="vintage-heading text-lg">Tech Intervention</span>
            </div>
            <p className="text-sm text-gray-400">
              {t.footer.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">{t.footer.quickLinks}</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="#services" className="hover:text-siren transition-colors">{t.header.services}</Link></li>
              <li><Link href="#tracker" className="hover:text-siren transition-colors">{t.header.trackRepair}</Link></li>
              <li><Link href="#testimonials" className="hover:text-siren transition-colors">{t.header.testimonials}</Link></li>
              <li><Link href="#contact" className="hover:text-siren transition-colors">{t.header.contact}</Link></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-semibold mb-4">{t.footer.serviceAreas}</h3>
            <ul className="grid grid-cols-2 gap-2 text-sm text-gray-400">
              {serviceAreas.map((area) => (
                <li key={area} className="hover:text-siren transition-colors cursor-pointer">
                  {area}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">{t.footer.contact}</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-siren" />
                <a href="tel:+40123456789" className="hover:text-siren transition-colors">
                  0123 456 789
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-siren" />
                <a href="mailto:contact@techintervention.ro" className="hover:text-siren transition-colors">
                  contact@techintervention.ro
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-siren mt-0.5" />
                <span>
                  Str. Exemplu 123<br />
                  Sector 1, București
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-gray-400">
          <p>{t.footer.copyright}</p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="hover:text-siren transition-colors">{t.footer.privacy}</Link>
            <Link href="/terms" className="hover:text-siren transition-colors">{t.footer.terms}</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
