"use client"

import { MessageCircle } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function WhatsAppButton() {
  const { language } = useLanguage()
  
  const whatsappNumber = "40123456789" // Replace with actual number
  const message = language === 'ro' 
    ? "Bună! Am nevoie de ajutor cu laptop-ul meu."
    : "Hi! I need help with my laptop."
  
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
      aria-label="Contact pe WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
      
      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
      
      {/* Tooltip */}
      <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        {language === 'ro' ? 'Contactează-ne pe WhatsApp' : 'Contact us on WhatsApp'}
      </span>
    </a>
  )
}
