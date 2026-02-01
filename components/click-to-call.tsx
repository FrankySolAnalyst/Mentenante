"use client"

import { Phone } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { useState, useEffect } from "react"

export function ClickToCall() {
  const { language } = useLanguage()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Only show on mobile devices
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  if (!isMobile) return null

  return (
    <a
      href="tel:+40123456789"
      className="fixed bottom-6 left-6 z-50 flex items-center justify-center w-14 h-14 bg-siren hover:bg-siren-dark text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group animate-pulse"
      aria-label={language === 'ro' ? 'Sună acum' : 'Call now'}
    >
      <Phone className="h-7 w-7" />
      
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-siren animate-ping opacity-30" />
      
      {/* Tooltip */}
      <span className="absolute left-16 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        {language === 'ro' ? 'Apel Urgent' : 'Emergency Call'}
      </span>
    </a>
  )
}
