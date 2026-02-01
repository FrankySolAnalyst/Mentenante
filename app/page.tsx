"use client"

import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ServicesGrid } from "@/components/services-grid"
import { RepairTracker } from "@/components/repair-tracker"
import { TrustBadges } from "@/components/trust-badges"
import { TestimonialsMarquee } from "@/components/testimonials-marquee"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"
import { LanguageProvider } from "@/contexts/language-context"

export default function Home() {
  return (
    <LanguageProvider>
      <Header />
      <main>
        <Hero />
        <ServicesGrid />
        <RepairTracker />
        <TrustBadges />
        <TestimonialsMarquee />
        <ContactForm />
      </main>
      <Footer />
      <JsonLdSchema />
    </LanguageProvider>
  )
}

function JsonLdSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://techintervention.ro",
    "name": "Tech Intervention",
    "image": "https://techintervention.ro/og-image.jpg",
    "url": "https://techintervention.ro",
    "telephone": "+40123456789",
    "email": "contact@techintervention.ro",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Str. Exemplu 123",
      "addressLocality": "București",
      "addressRegion": "București",
      "postalCode": "010101",
      "addressCountry": "RO"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "44.4268",
      "longitude": "26.1025"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "10:00",
        "closes": "18:00"
      }
    ],
    "priceRange": "100-1000 RON",
    "servesCuisine": null,
    "areaServed": [
      {
        "@type": "City",
        "name": "București"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Laptop Repair Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Motherboard Repair",
            "description": "BGA reballing, chipset replacement, power circuit fixes"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Liquid Damage Cleanup",
            "description": "Emergency liquid damage repair with ultrasonic cleaning"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Screen Replacement",
            "description": "LCD, LED, OLED screen replacement for all laptop models"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Data Recovery",
            "description": "Professional data recovery from dead or damaged drives"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127"
    },
    "sameAs": [
      "https://www.facebook.com/techintervention",
      "https://www.instagram.com/techintervention"
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
