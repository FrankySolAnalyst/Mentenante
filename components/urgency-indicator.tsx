"use client"

import { Clock, Zap } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { useState, useEffect } from "react"

export function UrgencyIndicator() {
  const { language } = useLanguage()
  const [slotsLeft, setSlotsLeft] = useState(3)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Simulate real-time slot availability (in production, fetch from API)
    const updateSlots = () => {
      const hour = new Date().getHours()
      // More slots in morning, fewer in evening
      if (hour >= 9 && hour < 12) {
        setSlotsLeft(Math.floor(Math.random() * 3) + 3) // 3-5 slots
      } else if (hour >= 12 && hour < 16) {
        setSlotsLeft(Math.floor(Math.random() * 2) + 2) // 2-3 slots
      } else if (hour >= 16 && hour < 18) {
        setSlotsLeft(Math.floor(Math.random() * 2) + 1) // 1-2 slots
      } else {
        setIsVisible(false) // Closed
      }
    }

    updateSlots()
    const interval = setInterval(updateSlots, 300000) // Update every 5 minutes

    return () => clearInterval(interval)
  }, [])

  if (!isVisible) return null

  const urgencyLevel = slotsLeft <= 2 ? 'high' : slotsLeft <= 3 ? 'medium' : 'low'
  
  return (
    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${
      urgencyLevel === 'high' 
        ? 'bg-siren/10 text-siren border border-siren/20' 
        : urgencyLevel === 'medium'
        ? 'bg-orange-50 text-orange-600 border border-orange-200'
        : 'bg-green-50 text-green-600 border border-green-200'
    }`}>
      {urgencyLevel === 'high' ? (
        <Zap className="h-4 w-4 animate-pulse" />
      ) : (
        <Clock className="h-4 w-4" />
      )}
      <span>
        {language === 'ro' 
          ? `${slotsLeft} locuri disponibile astăzi`
          : `${slotsLeft} slots available today`
        }
      </span>
    </div>
  )
}
