"use client"

import { services } from "@/lib/service-data-i18n"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Clock } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function ServicesGrid() {
  const { t } = useLanguage()
  
  const getUrgencyBadge = (urgency: string) => {
    if (urgency === 'high') {
      return <Badge variant="siren" className="gap-1"><Zap className="h-3 w-3" />{t.services.emergency}</Badge>
    }
    if (urgency === 'medium') {
      return <Badge variant="secondary">{t.services.standard}</Badge>
    }
    return <Badge variant="outline">{t.services.lowPriority}</Badge>
  }
  
  const getServiceContent = (serviceId: string) => {
    switch(serviceId) {
      case 'motherboard-repair':
        return {
          title: t.services.motherboard.title,
          subtitle: t.services.motherboard.subtitle,
          description: t.services.motherboard.description,
          features: t.services.motherboard.features,
          time: t.services.motherboard.time,
          price: t.services.motherboard.price
        }
      case 'liquid-damage':
        return {
          title: t.services.liquidDamage.title,
          subtitle: t.services.liquidDamage.subtitle,
          description: t.services.liquidDamage.description,
          features: t.services.liquidDamage.features,
          time: t.services.liquidDamage.time,
          price: t.services.liquidDamage.price
        }
      case 'screen-replacement':
        return {
          title: t.services.screenReplacement.title,
          subtitle: t.services.screenReplacement.subtitle,
          description: t.services.screenReplacement.description,
          features: t.services.screenReplacement.features,
          time: t.services.screenReplacement.time,
          price: t.services.screenReplacement.price
        }
      case 'thermal-cleaning':
        return {
          title: t.services.thermalCleaning.title,
          subtitle: t.services.thermalCleaning.subtitle,
          description: t.services.thermalCleaning.description,
          features: t.services.thermalCleaning.features,
          time: t.services.thermalCleaning.time,
          price: t.services.thermalCleaning.price
        }
      case 'data-recovery':
        return {
          title: t.services.dataRecovery.title,
          subtitle: t.services.dataRecovery.subtitle,
          description: t.services.dataRecovery.description,
          features: t.services.dataRecovery.features,
          time: t.services.dataRecovery.time,
          price: t.services.dataRecovery.price
        }
      case 'software-install':
        return {
          title: t.services.softwareInstall.title,
          subtitle: t.services.softwareInstall.subtitle,
          description: t.services.softwareInstall.description,
          features: t.services.softwareInstall.features,
          time: t.services.softwareInstall.time,
          price: t.services.softwareInstall.price
        }
      default:
        return null
    }
  }

  return (
    <section id="services" className="py-16 md:py-24 paper-grain">
      <div className="container mx-auto max-w-6xl">
        {/* Header - Centered */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="vintage-heading text-5xl md:text-6xl mb-4 text-balance">
            {t.services.title}
          </h2>
          <div className="w-24 h-1 bg-black mx-auto my-6"></div>
          <p className="text-gray-700 vintage-subheading text-xl">
            {t.services.subtitle}
          </p>
        </div>

        {/* Services List - Orderly Technical Layout */}
        <div className="space-y-6 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon
            const content = getServiceContent(service.id)
            
            if (!content) return null
            
            return (
              <div 
                key={service.id} 
                className="border-2 border-black bg-white hover:bg-gray-50 transition-all group"
              >
                <div className="grid md:grid-cols-[auto_1fr_auto] gap-6 p-6 md:p-8 items-start">
                  
                  {/* Left: Icon + Number */}
                  <div className="flex flex-col items-center gap-3 min-w-[80px]">
                    <div className="w-16 h-16 bg-black text-white flex items-center justify-center border-2 border-black">
                      <Icon className="h-8 w-8" />
                    </div>
                    <span className="technical-mono text-xs font-bold tracking-wider">
                      [{String(index + 1).padStart(2, '0')}]
                    </span>
                  </div>

                  {/* Middle: Content */}
                  <div className="space-y-4">
                    {/* Title + Badge */}
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="vintage-heading text-2xl md:text-3xl uppercase">
                        {content.title}
                      </h3>
                      {getUrgencyBadge(service.urgency)}
                    </div>

                    {/* Subtitle */}
                    <p className="technical-mono text-sm text-gray-600 uppercase tracking-wide">
                      {content.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-base text-gray-700 leading-relaxed max-w-2xl">
                      {content.description}
                    </p>

                    {/* Features - Monospace List */}
                    <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 pt-2">
                      {content.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-start text-sm">
                          <span className="text-siren mr-2 font-bold technical-mono">→</span>
                          <span className="text-gray-700 technical-mono">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right: Price Box */}
                  <div className="border-2 border-black bg-white p-4 md:p-6 min-w-[180px] space-y-3">
                    <div className="space-y-1">
                      <p className="technical-mono text-xs uppercase tracking-wider text-gray-500">Duration</p>
                      <p className="font-bold text-lg technical-mono">{content.time}</p>
                    </div>
                    <div className="border-t-2 border-black pt-3 space-y-1">
                      <p className="technical-mono text-xs uppercase tracking-wider text-gray-500">Price</p>
                      <p className="font-bold text-2xl vintage-heading">{content.price}</p>
                    </div>
                    <button className="w-full mt-4 px-4 py-3 bg-black text-white border-2 border-black hover:bg-white hover:text-black transition-all font-bold uppercase text-xs tracking-wider btn-brutalist group">
                      {t.services.getFixed}
                      <ArrowRight className="inline ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA - Centered Terminal Style */}
        <div className="mt-16 text-center max-w-2xl mx-auto">
          <div className="border-2 border-black bg-white p-8 space-y-4">
            <p className="text-gray-700 vintage-subheading text-lg">
              {t.services.customDiagnostic}
            </p>
            <button className="px-8 py-4 bg-black text-white border-2 border-black hover:bg-white hover:text-black transition-all font-bold uppercase tracking-wider text-sm btn-brutalist">
              {t.services.requestCustom}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
