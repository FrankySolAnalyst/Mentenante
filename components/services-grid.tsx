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
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="vintage-heading text-4xl md:text-5xl mb-4">
            {t.services.title}
          </h2>
          <p className="text-gray-600 vintage-subheading text-xl">
            {t.services.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon
            const content = getServiceContent(service.id)
            
            if (!content) return null
            
            return (
              <Card 
                key={service.id} 
                className="engraving-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-black text-white rounded-lg">
                      <Icon className="h-8 w-8" />
                    </div>
                    {getUrgencyBadge(service.urgency)}
                  </div>
                  
                  <CardTitle className="vintage-heading text-xl mb-2">
                    {content.title}
                  </CardTitle>
                  <CardDescription className="vintage-subheading text-base">
                    {content.subtitle}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col">
                  <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                    {content.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-6 flex-1">
                    {content.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <span className="text-siren mr-2 mt-0.5">✓</span>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                    {content.features.length > 3 && (
                      <li className="text-xs text-gray-500 italic pl-5">
                        +{content.features.length - 3} more...
                      </li>
                    )}
                  </ul>

                  {/* Price & Time */}
                  <div className="flex items-center justify-between text-sm border-t pt-4 mb-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span>{content.time}</span>
                    </div>
                    <div className="font-bold text-black">
                      {content.price}
                    </div>
                  </div>

                  {/* CTA */}
                  <Button 
                    variant={service.urgency === 'high' ? 'siren' : 'outline'} 
                    className="w-full group"
                  >
                    {t.services.getFixed}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            {t.services.customDiagnostic}
          </p>
          <Button variant="outline" size="lg">
            {t.services.requestCustom}
          </Button>
        </div>
      </div>
    </section>
  )
}
