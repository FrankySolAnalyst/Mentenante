"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { supabase } from "@/lib/supabase"
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function ContactForm() {
  const { t } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const leadSchema = z.object({
    customer_name: z.string().min(2, t.contact.validation.nameMin),
    email: z.string().email(t.contact.validation.emailInvalid),
    phone: z.string().min(10, t.contact.validation.phoneMin),
    device_brand: z.string().min(2, t.contact.validation.deviceBrandMin),
    device_model: z.string().min(2, t.contact.validation.deviceModelMin),
    service_type: z.enum([
      'motherboard_repair',
      'liquid_damage',
      'screen_replacement',
      'thermal_cleaning',
      'software_install',
      'data_recovery',
      'general_repair',
      'diagnostic'
    ]),
    message: z.string().optional(),
    is_emergency: z.boolean()
  })

  type LeadFormData = z.infer<typeof leadSchema>

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      is_emergency: false
    }
  })

  const onSubmit = async (data: LeadFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const { error } = await supabase
        .from('leads')
        .insert([{
          ...data,
          source: 'website'
        }])

      if (error) throw error

      setSubmitStatus('success')
      reset()
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="vintage-heading text-3xl md:text-4xl mb-4">
              {t.contact.title}
            </h2>
            <p className="text-gray-600 vintage-subheading text-lg">
              {t.contact.subtitle}
            </p>
          </div>

          <Card className="engraving-border">
            <CardHeader>
              <CardTitle>{t.contact.cardTitle}</CardTitle>
              <CardDescription>
                {t.contact.cardDescription}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="customer_name">{t.contact.fullName} *</Label>
                    <Input
                      id="customer_name"
                      {...register("customer_name")}
                      placeholder={t.contact.fullNamePlaceholder}
                      className={errors.customer_name ? "border-red-500" : ""}
                    />
                    {errors.customer_name && (
                      <p className="text-xs text-red-500 mt-1">{errors.customer_name.message}</p>
                    )}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">{t.contact.email} *</Label>
                      <Input
                        id="email"
                        type="email"
                        {...register("email")}
                        placeholder={t.contact.emailPlaceholder}
                        className={errors.email ? "border-red-500" : ""}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="phone">{t.contact.phone} *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        {...register("phone")}
                        placeholder={t.contact.phonePlaceholder}
                        className={errors.phone ? "border-red-500" : ""}
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Device Information */}
                <div className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="device_brand">{t.contact.deviceBrand} *</Label>
                      <Input
                        id="device_brand"
                        {...register("device_brand")}
                        placeholder={t.contact.deviceBrandPlaceholder}
                        className={errors.device_brand ? "border-red-500" : ""}
                      />
                      {errors.device_brand && (
                        <p className="text-xs text-red-500 mt-1">{errors.device_brand.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="device_model">{t.contact.model} *</Label>
                      <Input
                        id="device_model"
                        {...register("device_model")}
                        placeholder={t.contact.modelPlaceholder}
                        className={errors.device_model ? "border-red-500" : ""}
                      />
                      {errors.device_model && (
                        <p className="text-xs text-red-500 mt-1">{errors.device_model.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="service_type">{t.contact.whatsWrong} *</Label>
                    <select
                      id="service_type"
                      {...register("service_type")}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">{t.contact.selectService}</option>
                      <option value="motherboard_repair">{t.contact.services.motherboard_repair}</option>
                      <option value="liquid_damage">{t.contact.services.liquid_damage}</option>
                      <option value="screen_replacement">{t.contact.services.screen_replacement}</option>
                      <option value="thermal_cleaning">{t.contact.services.thermal_cleaning}</option>
                      <option value="software_install">{t.contact.services.software_install}</option>
                      <option value="data_recovery">{t.contact.services.data_recovery}</option>
                      <option value="diagnostic">{t.contact.services.diagnostic}</option>
                    </select>
                    {errors.service_type && (
                      <p className="text-xs text-red-500 mt-1">{errors.service_type.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="message">{t.contact.additionalDetails}</Label>
                    <textarea
                      id="message"
                      {...register("message")}
                      rows={4}
                      placeholder={t.contact.detailsPlaceholder}
                      className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="is_emergency"
                      {...register("is_emergency")}
                      className="h-4 w-4 rounded border-gray-300 text-siren focus:ring-siren"
                    />
                    <Label htmlFor="is_emergency" className="cursor-pointer">
                      {t.contact.isEmergency}
                    </Label>
                  </div>
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  variant="siren" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      {t.contact.submitting}
                    </>
                  ) : (
                    t.contact.submitButton
                  )}
                </Button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="flex items-center space-x-2 p-4 bg-green-50 border border-green-200 rounded-md">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <p className="text-sm text-green-700">
                      {t.contact.successMessage}
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="flex items-center space-x-2 p-4 bg-red-50 border border-red-200 rounded-md">
                    <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                    <p className="text-sm text-red-700">
                      {t.contact.errorMessage}
                    </p>
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
