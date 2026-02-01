"use client"

import { useState } from "react"
import { Search, Loader2, CheckCircle2, Clock, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { supabase, type Ticket, getStatusColor } from "@/lib/supabase"
import { useLanguage } from "@/contexts/language-context"

export function RepairTracker() {
  const { t } = useLanguage()
  const [ticketNumber, setTicketNumber] = useState("")
  const [loading, setLoading] = useState(false)
  const [ticket, setTicket] = useState<Ticket | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!ticketNumber.trim()) {
      setError(t.tracker.enterTicket)
      return
    }

    setLoading(true)
    setError(null)
    setTicket(null)

    try {
      const { data, error: supabaseError } = await supabase
        .from('tickets')
        .select('*')
        .eq('ticket_number', ticketNumber.trim().toUpperCase())
        .single()

      if (supabaseError) {
        if (supabaseError.code === 'PGRST116') {
          setError(t.tracker.errorNotFound)
        } else {
          setError(t.tracker.errorGeneral)
        }
        return
      }

      setTicket(data as Ticket)
    } catch (err) {
      setError(t.tracker.errorGeneral)
    } finally {
      setLoading(false)
    }
  }
  
  const getStatusLabel = (status: string) => {
    return t.tracker.statuses[status as keyof typeof t.tracker.statuses] || status
  }

  const getStatusIcon = (status: string) => {
    if (['completed', 'ready_for_pickup', 'fixed'].includes(status)) {
      return <CheckCircle2 className="h-5 w-5 text-green-500" />
    }
    if (['received', 'diagnosing'].includes(status)) {
      return <Clock className="h-5 w-5 text-yellow-500" />
    }
    return <AlertCircle className="h-5 w-5 text-blue-500" />
  }

  const getProgressPercentage = (status: string) => {
    const statusMap: Record<string, number> = {
      received: 10,
      diagnosing: 25,
      parts_ordered: 40,
      repairing: 60,
      testing: 80,
      fixed: 90,
      ready_for_pickup: 95,
      completed: 100,
      cancelled: 0
    }
    return statusMap[status] || 0
  }

  return (
    <section id="tracker" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto max-w-4xl">
        {/* Header - Centered */}
        <div className="text-center mb-12">
          <h2 className="vintage-heading text-5xl md:text-6xl mb-4">
            {t.tracker.title}
          </h2>
          <div className="w-24 h-1 bg-black mx-auto my-6"></div>
          <p className="text-gray-700 vintage-subheading text-xl">
            {t.tracker.subtitle}
          </p>
        </div>

        {/* Receipt/Terminal Style Tracker */}
        <div className="max-w-2xl mx-auto">
          {/* Terminal-style Input Container */}
          <div className="border-2 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            {/* Terminal Header */}
            <div className="border-b-2 border-black bg-black text-white px-6 py-3">
              <p className="technical-mono text-sm uppercase tracking-wider">
                → {t.tracker.cardTitle}
              </p>
            </div>

            {/* Terminal Body */}
            <div className="p-6 md:p-8 space-y-6">
              {/* Search Form - Terminal Style */}
              <form onSubmit={handleSearch} className="space-y-4">
                <div className="space-y-3">
                  <label className="block technical-mono text-xs uppercase tracking-wider text-gray-600">
                    {t.tracker.cardDescription}
                  </label>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="flex-1 relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 technical-mono text-gray-400">
                        #
                      </span>
                      <input
                        id="ticket-number"
                        type="text"
                        placeholder={t.tracker.placeholder}
                        value={ticketNumber}
                        onChange={(e) => setTicketNumber(e.target.value.toUpperCase())}
                        className="w-full pl-8 pr-4 py-3 border-2 border-black technical-mono text-lg uppercase focus:outline-none focus:ring-2 focus:ring-siren"
                        disabled={loading}
                      />
                    </div>
                    
                    <button 
                      type="submit" 
                      disabled={loading}
                      className="px-8 py-3 bg-black text-white border-2 border-black hover:bg-white hover:text-black transition-all font-bold uppercase text-sm tracking-wider btn-brutalist disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <Loader2 className="h-4 w-4 animate-spin" />
                          {t.tracker.searching}
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Search className="h-4 w-4" />
                          {t.tracker.buttonTrack}
                        </span>
                      )}
                    </button>
                  </div>
                </div>
              </form>

              {/* Error Message - Terminal Style */}
              {error && (
                <div className="border-2 border-siren bg-red-50 p-4">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="h-5 w-5 text-siren flex-shrink-0 mt-0.5" />
                    <p className="technical-mono text-sm text-red-900">{error}</p>
                  </div>
                </div>
              )}

              {/* Ticket Details - Receipt Style */}
              {ticket && (
                <div className="border-t-2 border-dashed border-black pt-6 space-y-6">
                  
                  {/* Receipt Header */}
                  <div className="text-center space-y-2 pb-4 border-b-2 border-dashed border-black">
                    <p className="technical-mono text-xs uppercase tracking-wider text-gray-600">
                      Repair Status
                    </p>
                    <p className="vintage-heading text-3xl uppercase">
                      {getStatusLabel(ticket.status)}
                    </p>
                    <div className="flex items-center justify-center gap-2">
                      {getStatusIcon(ticket.status)}
                      <span className="technical-mono text-xs uppercase px-3 py-1 bg-black text-white border-2 border-black">
                        {ticket.is_emergency ? t.tracker.emergency : t.tracker.standard}
                      </span>
                    </div>
                  </div>

                  {/* Progress Bar - Terminal Style */}
                  <div className="space-y-2">
                    <div className="flex justify-between technical-mono text-xs">
                      <span>Progress</span>
                      <span>{getProgressPercentage(ticket.status)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 h-4 border-2 border-black">
                      <div
                        className="bg-black h-full transition-all duration-500 ease-out"
                        style={{ width: `${getProgressPercentage(ticket.status)}%` }}
                      />
                    </div>
                  </div>

                  {/* Receipt Details */}
                  <div className="space-y-4 technical-mono text-sm">
                    <div className="flex justify-between border-b border-dashed border-gray-300 pb-2">
                      <span className="text-gray-600 uppercase">{t.tracker.device}:</span>
                      <span className="font-bold">{ticket.device_brand} {ticket.device_model}</span>
                    </div>
                    
                    <div className="flex justify-between border-b border-dashed border-gray-300 pb-2">
                      <span className="text-gray-600 uppercase">{t.tracker.serviceType}:</span>
                      <span className="font-bold capitalize">{ticket.service_type.replace(/_/g, ' ')}</span>
                    </div>
                    
                    <div className="flex justify-between border-b border-dashed border-gray-300 pb-2">
                      <span className="text-gray-600 uppercase">{t.tracker.received}:</span>
                      <span className="font-bold">
                        {new Date(ticket.created_at).toLocaleDateString('ro-RO', {
                          day: '2-digit',
                          month: '2-digit',
                          year: 'numeric'
                        })}
                      </span>
                    </div>
                    
                    {ticket.estimated_completion && (
                      <div className="flex justify-between border-b border-dashed border-gray-300 pb-2">
                        <span className="text-gray-600 uppercase">{t.tracker.estimatedCompletion}:</span>
                        <span className="font-bold">
                          {new Date(ticket.estimated_completion).toLocaleDateString('ro-RO', {
                            day: '2-digit',
                            month: '2-digit',
                            year: 'numeric'
                          })}
                        </span>
                      </div>
                    )}
                    
                    {ticket.estimated_cost && (
                      <div className="flex justify-between pt-2 border-t-2 border-black">
                        <span className="text-gray-900 uppercase font-bold">{t.tracker.estimatedCost}:</span>
                        <span className="font-bold text-xl">{ticket.estimated_cost} RON</span>
                      </div>
                    )}
                  </div>

                  {/* Ready for Pickup Notice */}
                  {ticket.status === 'ready_for_pickup' && (
                    <div className="border-2 border-black bg-green-50 p-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-bold vintage-heading text-lg uppercase">{t.tracker.readyNotice}</p>
                          <p className="technical-mono text-sm mt-2">
                            {t.tracker.readyDetails}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Receipt Footer */}
                  <div className="text-center pt-4 border-t-2 border-dashed border-black">
                    <p className="technical-mono text-xs text-gray-500">
                      {ticket.estimated_cost && t.tracker.finalCostNote}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Help Text - Terminal Style */}
          <div className="text-center mt-8">
            <p className="technical-mono text-sm text-gray-600">
              {t.tracker.cantFind} {t.tracker.contactUs}{" "}
              <a href="tel:+40123456789" className="text-black font-bold hover:text-siren transition-colors border-b-2 border-black hover:border-siren">
                0123 456 789
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
