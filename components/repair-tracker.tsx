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
    <section id="tracker" className="py-16 md:py-24 bg-gray-50">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="vintage-heading text-3xl md:text-4xl mb-4">
              {t.tracker.title}
            </h2>
            <p className="text-gray-600 vintage-subheading text-lg">
              {t.tracker.subtitle}
            </p>
          </div>

          {/* Search Form */}
          <Card className="engraving-border">
            <CardHeader>
              <CardTitle>{t.tracker.cardTitle}</CardTitle>
              <CardDescription>
                {t.tracker.cardDescription}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSearch} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1">
                    <Label htmlFor="ticket-number" className="sr-only">
                      {t.tracker.placeholder}
                    </Label>
                    <Input
                      id="ticket-number"
                      placeholder={t.tracker.placeholder}
                      value={ticketNumber}
                      onChange={(e) => setTicketNumber(e.target.value.toUpperCase())}
                      className="text-center font-mono text-lg"
                      disabled={loading}
                    />
                  </div>
                  <Button 
                    type="submit" 
                    variant="siren" 
                    disabled={loading}
                    className="sm:w-auto"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        {t.tracker.searching}
                      </>
                    ) : (
                      <>
                        <Search className="mr-2 h-4 w-4" />
                        {t.tracker.buttonTrack}
                      </>
                    )}
                  </Button>
                </div>
              </form>

              {/* Error Message */}
              {error && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-md flex items-start space-x-2">
                  <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-red-600">{error}</p>
                </div>
              )}

              {/* Ticket Details */}
              {ticket && (
                <div className="mt-6 space-y-6">
                  {/* Status Overview */}
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-lg border-2 border-black">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        {getStatusIcon(ticket.status)}
                        <div>
                          <p className="text-sm text-gray-600">{t.tracker.currentStatus}</p>
                          <p className="font-bold text-xl">{getStatusLabel(ticket.status)}</p>
                        </div>
                      </div>
                      <Badge 
                        className={`${getStatusColor(ticket.status)} text-white text-sm px-3 py-1`}
                      >
                        {ticket.is_emergency ? t.tracker.emergency : t.tracker.standard}
                      </Badge>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-siren h-full transition-all duration-500 ease-out rounded-full"
                        style={{ width: `${getProgressPercentage(ticket.status)}%` }}
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-2 text-right">
                      {getProgressPercentage(ticket.status)}% {t.tracker.progress}
                    </p>
                  </div>

                  {/* Device & Service Info */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-sm uppercase tracking-wide text-gray-600">
                        {t.tracker.deviceInfo}
                      </h4>
                      <div className="space-y-2">
                        <div>
                          <p className="text-xs text-gray-500">{t.tracker.device}</p>
                          <p className="font-medium">{ticket.device_brand} {ticket.device_model}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">{t.tracker.serviceType}</p>
                          <p className="font-medium capitalize">
                            {ticket.service_type.replace(/_/g, ' ')}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-sm uppercase tracking-wide text-gray-600">
                        {t.tracker.timeline}
                      </h4>
                      <div className="space-y-2">
                        <div>
                          <p className="text-xs text-gray-500">{t.tracker.received}</p>
                          <p className="font-medium">
                            {new Date(ticket.created_at).toLocaleDateString('ro-RO', {
                              day: '2-digit',
                              month: 'long',
                              year: 'numeric'
                            })}
                          </p>
                        </div>
                        {ticket.estimated_completion && (
                          <div>
                            <p className="text-xs text-gray-500">{t.tracker.estimatedCompletion}</p>
                            <p className="font-medium">
                              {new Date(ticket.estimated_completion).toLocaleDateString('ro-RO', {
                                day: '2-digit',
                                month: 'long',
                                year: 'numeric'
                              })}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Ready for Pickup Notice */}
                  {ticket.status === 'ready_for_pickup' && (
                    <div className="bg-green-50 border-2 border-green-500 p-4 rounded-lg">
                      <div className="flex items-start space-x-3">
                        <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-bold text-green-900">{t.tracker.readyNotice}</p>
                          <p className="text-sm text-green-700 mt-1">
                            {t.tracker.readyDetails}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Cost Information */}
                  {ticket.estimated_cost && (
                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">{t.tracker.estimatedCost}</span>
                        <span className="font-bold text-xl">{ticket.estimated_cost} RON</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-2">
                        {t.tracker.finalCostNote}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Help Text */}
          <p className="text-center text-sm text-gray-500 mt-6">
            {t.tracker.cantFind} {t.tracker.contactUs}{" "}
            <a href="tel:+40123456789" className="text-siren font-medium hover:underline">
              0123 456 789
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
