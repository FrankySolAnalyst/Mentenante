"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone, ArrowRight, Zap } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { UrgencyIndicator } from "@/components/urgency-indicator"

export function Hero() {
  const { t } = useLanguage()
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden paper-grain py-20 md:py-32">
      {/* Newspaper-style Headline Section */}
      <div className="container relative z-10 mx-auto max-w-5xl">
        <div className="text-center space-y-12">
          
          {/* Main Headline - Massive Centered Serif */}
          <div className="space-y-6">
            <h1 className="vintage-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] text-balance tracking-tight">
              DEAD LAPTOP?<br />
              <span className="text-siren">WE RESURRECT</span><br />
              TECH.
            </h1>
            
            {/* Subheadline - Italic Serif */}
            <p className="vintage-subheading text-2xl md:text-3xl text-gray-700 max-w-3xl mx-auto text-balance leading-relaxed">
              {t.hero.subheadline}
            </p>
          </div>

          {/* Divider Line */}
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-24 bg-black"></div>
            <UrgencyIndicator />
            <div className="h-px w-24 bg-black"></div>
          </div>

          {/* Trust Badges - Horizontal */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-sm md:text-base font-semibold technical-mono">
            <div className="flex items-center gap-2">
              <span className="text-siren text-2xl">✓</span>
              <span className="uppercase tracking-wide">{t.hero.trust1}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-siren text-2xl">✓</span>
              <span className="uppercase tracking-wide">{t.hero.trust2}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-siren text-2xl">✓</span>
              <span className="uppercase tracking-wide">{t.hero.trust3}</span>
            </div>
          </div>

          {/* CTA Buttons - Sharp-Edged Monochrome */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
            {/* Emergency Button - White bg, Red text */}
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-siren border-2 border-siren hover:bg-siren hover:text-white transition-all font-bold uppercase tracking-wider text-sm flex items-center justify-center gap-2 group btn-brutalist">
              <Zap className="h-5 w-5" />
              {t.hero.emergencyCTA}
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            {/* Standard Button - Black bg, White text */}
            <button className="w-full sm:w-auto px-8 py-4 bg-black text-white border-2 border-black hover:bg-white hover:text-black transition-all font-bold uppercase tracking-wider text-sm flex items-center justify-center gap-2 group btn-brutalist">
              <Phone className="h-5 w-5" />
              {t.hero.standardCTA}
            </button>
          </div>

          {/* Contact Info - Terminal Style */}
          <div className="inline-flex items-center justify-center space-x-3 px-6 py-3 bg-black text-white border-2 border-black technical-mono">
            <span className="text-gray-400 text-sm uppercase tracking-wider">{t.hero.callUs}:</span>
            <a 
              href="tel:+40123456789" 
              className="font-bold text-xl hover:text-siren transition-colors"
            >
              0123 456 789
            </a>
          </div>

          {/* Stats Row - Newspaper Style */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-8 border-t-2 border-black">
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold vintage-heading">1000+</p>
              <p className="text-xs md:text-sm uppercase tracking-wide technical-mono mt-2">{t.hero.devicesSaved}</p>
            </div>
            <div className="text-center border-x-2 border-black">
              <p className="text-4xl md:text-5xl font-bold vintage-heading">24/7</p>
              <p className="text-xs md:text-sm uppercase tracking-wide technical-mono mt-2">{t.hero.emergencyLine}</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold vintage-heading">4.9★</p>
              <p className="text-xs md:text-sm uppercase tracking-wide technical-mono mt-2">Google Reviews</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
