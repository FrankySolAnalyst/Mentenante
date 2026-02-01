import { Cpu, Droplets, Monitor, Fan, HardDrive, Download } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { Language } from "./translations"

export interface Service {
  id: string
  icon: LucideIcon
  urgency: "high" | "medium" | "low"
}

export const services: Service[] = [
  {
    id: "motherboard-repair",
    icon: Cpu,
    urgency: "high"
  },
  {
    id: "liquid-damage",
    icon: Droplets,
    urgency: "high"
  },
  {
    id: "screen-replacement",
    icon: Monitor,
    urgency: "medium"
  },
  {
    id: "thermal-cleaning",
    icon: Fan,
    urgency: "medium"
  },
  {
    id: "data-recovery",
    icon: HardDrive,
    urgency: "high"
  },
  {
    id: "software-install",
    icon: Download,
    urgency: "low"
  }
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(s => s.id === slug)
}

export function getServiceIcon(serviceId: string): LucideIcon {
  const service = services.find(s => s.id === serviceId)
  return service?.icon || Cpu
}
