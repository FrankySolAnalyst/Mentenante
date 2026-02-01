"use client"

import { Shield, Clock, Award, ThumbsUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"

export function TrustBadges() {
  const { t } = useLanguage()
  
  const badges = [
    {
      icon: Shield,
      key: 'noFixNoPay',
      highlight: true
    },
    {
      icon: Clock,
      key: 'sameDay',
      highlight: false
    },
    {
      icon: Award,
      key: 'certified',
      highlight: false
    },
    {
      icon: ThumbsUp,
      key: 'warranty',
      highlight: false
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="vintage-heading text-3xl md:text-4xl mb-4">
            {t.trust.title}
          </h2>
          <p className="text-gray-600 vintage-subheading text-lg">
            {t.trust.subtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((badge) => {
            const Icon = badge.icon
            const content = t.trust[badge.key as keyof typeof t.trust] as { title: string; description: string }
            
            return (
              <Card 
                key={badge.key}
                className={`text-center ${
                  badge.highlight 
                    ? 'border-4 border-siren bg-siren/5 shadow-lg' 
                    : 'engraving-border'
                }`}
              >
                <CardContent className="pt-8 pb-6">
                  <div className={`inline-flex p-4 rounded-full mb-4 ${
                    badge.highlight ? 'bg-siren' : 'bg-black'
                  }`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="font-bold text-lg mb-2 vintage-heading">
                    {content.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {content.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Additional Trust Indicators */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-8 px-8 py-4 bg-black text-white rounded-lg">
            <div>
              <p className="text-3xl font-bold text-siren">1000+</p>
              <p className="text-xs text-gray-400">{t.trust.repairsCompleted}</p>
            </div>
            <div className="w-px h-12 bg-gray-700" />
            <div>
              <p className="text-3xl font-bold text-siren">4.9/5</p>
              <p className="text-xs text-gray-400">{t.trust.customerRating}</p>
            </div>
            <div className="w-px h-12 bg-gray-700" />
            <div>
              <p className="text-3xl font-bold text-siren">5 Years</p>
              <p className="text-xs text-gray-400">{t.trust.inBusiness}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
