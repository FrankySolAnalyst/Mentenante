"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone, ArrowRight, Zap } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { UrgencyIndicator } from "@/components/urgency-indicator"

export function Hero() {
  const { t } = useLanguage()
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-gray-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grain opacity-30" />
      
      <div className="container relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Copy */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Badge + Urgency Indicator */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-black text-white rounded-full text-sm font-medium">
                <Zap className="h-4 w-4 text-siren" />
                <span>{t.hero.badge}</span>
              </div>
              <UrgencyIndicator />
            </div>

            {/* Main Headline */}
            <h1 className="vintage-heading text-5xl md:text-7xl leading-tight">
              {t.hero.headline1}<br />
              <span className="text-siren">{t.hero.headline2}</span><br />
              {t.hero.headline3}
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-700 vintage-subheading leading-relaxed">
              {t.hero.subheadline}
            </p>

            {/* Trust Line */}
            <div className="flex flex-wrap gap-4 text-sm text-gray-600 justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <span className="text-siren text-xl">✓</span>
                <span>{t.hero.trust1}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-siren text-xl">✓</span>
                <span>{t.hero.trust2}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-siren text-xl">✓</span>
                <span>{t.hero.trust3}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="emergency" 
                size="xl"
                className="siren-pulse group"
              >
                <Zap className="mr-2 h-5 w-5" />
                {t.hero.emergencyCTA}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="xl"
                className="border-2 border-black hover:bg-black hover:text-white transition-all group"
              >
                <Phone className="mr-2 h-5 w-5" />
                {t.hero.standardCTA}
              </Button>
            </div>

            {/* Contact Info */}
            <div className="flex items-center justify-center lg:justify-start space-x-4 text-sm">
              <span className="text-gray-600">{t.hero.callUs}</span>
              <a 
                href="tel:+40123456789" 
                className="font-bold text-xl text-black hover:text-siren transition-colors"
              >
                0123 456 789
              </a>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative">
            {/* Main Image Container - Clean presentation */}
            <div className="relative aspect-square max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-black bg-white p-6">
              {/* Tech Trinity Logo */}
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src="/logo-transparent.png"
                  alt="Tech Intervention - Tech Trinity Logo"
                  width={400}
                  height={400}
                  className="object-contain w-full h-full"
                  priority
                  quality={100}
                />
              </div>
            </div>
            
            {/* Caption below image */}
            <div className="mt-6 text-center">
              <p className="text-base font-bold text-gray-900 vintage-heading px-4">
                {t.hero.techTrinity}
              </p>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-siren text-white px-6 py-4 rounded-lg shadow-xl engraving-border">
              <p className="text-3xl font-bold">1000+</p>
              <p className="text-xs uppercase tracking-wide">{t.hero.devicesSaved}</p>
            </div>

            <div className="absolute -top-6 -right-6 bg-black text-white px-6 py-4 rounded-lg shadow-xl engraving-border">
              <p className="text-3xl font-bold">24/7</p>
              <p className="text-xs uppercase tracking-wide">{t.hero.emergencyLine}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}
