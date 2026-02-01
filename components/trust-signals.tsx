"use client"

import { Shield, Award, CheckCircle, Lock } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function TrustSignals() {
  const { language } = useLanguage()
  
  const signals = [
    {
      icon: Shield,
      labelRO: "Garanție 90 Zile",
      labelEN: "90-Day Warranty"
    },
    {
      icon: CheckCircle,
      labelRO: "Certificat ISO",
      labelEN: "ISO Certified"
    },
    {
      icon: Award,
      labelRO: "5 Ani Experiență",
      labelEN: "5 Years Experience"
    },
    {
      icon: Lock,
      labelRO: "Plată Securizată",
      labelEN: "Secure Payment"
    }
  ]
  
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 py-6 border-y bg-gray-50/50">
      {signals.map((signal, index) => {
        const Icon = signal.icon
        const label = language === 'ro' ? signal.labelRO : signal.labelEN
        
        return (
          <div
            key={index}
            className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200"
          >
            <Icon className="h-5 w-5 text-siren" />
            <span className="text-sm font-medium text-gray-700">{label}</span>
          </div>
        )
      })}
    </div>
  )
}
