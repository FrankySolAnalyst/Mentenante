"use client"

import { useLanguage } from "@/contexts/language-context"
import { useState, useEffect } from "react"
import { CheckCircle } from "lucide-react"

interface Activity {
  name: string
  service: string
  location: string
  timeAgo: string
}

export function LiveActivityTicker() {
  const { language } = useLanguage()
  const [currentActivity, setCurrentActivity] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const activitiesRO: Activity[] = [
    { name: "Adrian M.", service: "Reparație Placă de Bază", location: "Sector 1", timeAgo: "acum 5 minute" },
    { name: "Maria P.", service: "Curățare Lichide", location: "Sector 3", timeAgo: "acum 12 minute" },
    { name: "Ion D.", service: "Înlocuire Ecran", location: "Pipera", timeAgo: "acum 18 minute" },
    { name: "Elena S.", service: "Curățare Termică", location: "Sector 2", timeAgo: "acum 25 minute" },
    { name: "Andrei C.", service: "Recuperare Date", location: "Baneasa", timeAgo: "acum 34 minute" }
  ]

  const activitiesEN: Activity[] = [
    { name: "Adrian M.", service: "Motherboard Repair", location: "Sector 1", timeAgo: "5 minutes ago" },
    { name: "Maria P.", service: "Liquid Damage Cleanup", location: "Sector 3", timeAgo: "12 minutes ago" },
    { name: "Ion D.", service: "Screen Replacement", location: "Pipera", timeAgo: "18 minutes ago" },
    { name: "Elena S.", service: "Thermal Cleaning", location: "Sector 2", timeAgo: "25 minutes ago" },
    { name: "Andrei C.", service: "Data Recovery", location: "Baneasa", timeAgo: "34 minutes ago" }
  ]

  const activities = language === 'ro' ? activitiesRO : activitiesEN

  useEffect(() => {
    // Show notification after a short delay
    const showTimer = setTimeout(() => setIsVisible(true), 3000)

    // Rotate through activities
    const rotateTimer = setInterval(() => {
      setCurrentActivity((prev) => (prev + 1) % activities.length)
    }, 8000)

    // Auto-hide after showing each notification
    const hideTimer = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => setIsVisible(true), 1000)
    }, 8000)

    return () => {
      clearTimeout(showTimer)
      clearInterval(rotateTimer)
      clearInterval(hideTimer)
    }
  }, [activities.length])

  const activity = activities[currentActivity]

  return (
    <div
      className={`fixed bottom-24 left-6 z-40 max-w-sm transition-all duration-500 ${
        isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
      }`}
    >
      <div className="bg-white border-2 border-green-500 rounded-lg shadow-xl p-4">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0">
            <CheckCircle className="h-6 w-6 text-green-500" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-gray-900">
              {activity.name}
            </p>
            <p className="text-xs text-gray-600 mt-0.5">
              {language === 'ro' ? 'A programat' : 'Booked'}: <span className="font-medium">{activity.service}</span>
            </p>
            <p className="text-xs text-gray-500 mt-1">
              {activity.location} • {activity.timeAgo}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
