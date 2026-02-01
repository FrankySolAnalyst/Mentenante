"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { supabase, type Testimonial } from "@/lib/supabase"
import { Star, Quote } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function TestimonialsMarquee() {
  const { t } = useLanguage()
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])

  useEffect(() => {
    const fetchTestimonials = async () => {
      const { data } = await supabase
        .from('testimonials')
        .select('*')
        .eq('approved', true)
        .order('display_order', { ascending: true })
        .limit(10)

      if (data) {
        setTestimonials(data as Testimonial[])
      }
    }

    fetchTestimonials()
  }, [])

  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials]

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-black text-white overflow-hidden">
      <div className="container mb-12">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="vintage-heading text-4xl md:text-5xl mb-4">
            {t.testimonials.title}
          </h2>
          <p className="text-gray-400 vintage-subheading text-xl">
            {t.testimonials.subtitle}
          </p>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        <div className="marquee" style={{ '--gap': '2rem', '--duration': '40s' } as React.CSSProperties}>
          <div className="marquee__content">
            {duplicatedTestimonials.map((testimonial, index) => (
              <Card 
                key={`${testimonial.id}-${index}`} 
                className="w-[350px] flex-shrink-0 bg-gray-900 border-gray-800 text-white"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < testimonial.rating
                              ? 'fill-siren text-siren'
                              : 'text-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                    <Quote className="h-6 w-6 text-gray-700" />
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-4">
                    "{testimonial.comment}"
                  </p>
                  
                  <div className="border-t border-gray-800 pt-4">
                    <p className="font-semibold text-white">{testimonial.customer_name}</p>
                    {testimonial.device_type && (
                      <p className="text-xs text-gray-500">{testimonial.device_type}</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Fade Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent pointer-events-none z-10" />
      </div>
    </section>
  )
}
