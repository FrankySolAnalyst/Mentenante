import { Cpu, Droplets, Monitor, Fan, HardDrive, Download } from "lucide-react"
import type { LucideIcon } from "lucide-react"

export interface Service {
  id: string
  icon: LucideIcon
  title: string
  subtitle: string
  description: string
  features: string[]
  urgency: "high" | "medium" | "low"
  estimatedTime: string
  priceRange: string
}

export const services: Service[] = [
  {
    id: "motherboard-repair",
    icon: Cpu,
    title: "Motherboard Repair",
    subtitle: "BGA Reballing & Chipset Wizardry",
    description: "Dead laptop? Black screen? We dive deep. BGA rework, chipset replacement, power circuit fixes. If it's soldered, we can fix it. This isn't a job for amateurs—we're talking microscope-level precision here.",
    features: [
      "BGA reballing & reflow",
      "GPU/CPU replacement",
      "Power IC repair",
      "Short circuit diagnostics",
      "Component-level repair"
    ],
    urgency: "high",
    estimatedTime: "2-5 days",
    priceRange: "300-800 RON"
  },
  {
    id: "liquid-damage",
    icon: Droplets,
    title: "Liquid Damage Cleanup",
    subtitle: "Coffee on Keyboard? We Got You.",
    description: "Turn it off. Bring it in. NOW. The faster we get to it, the better your chances. We disassemble completely, ultrasonic clean the motherboard, replace corroded components, and test everything. Coffee, beer, water—doesn't matter. We scrub the motherboard so you don't have to buy a new one.",
    features: [
      "Full disassembly & inspection",
      "Ultrasonic motherboard cleaning",
      "Corrosion removal",
      "Component replacement",
      "48-hour emergency turnaround"
    ],
    urgency: "high",
    estimatedTime: "24-48 hours",
    priceRange: "200-600 RON"
  },
  {
    id: "screen-replacement",
    icon: Monitor,
    title: "Screen Replacement",
    subtitle: "Cracked, Flickering, or Dead? Fixed Fast.",
    description: "Dropped it? We've seen worse. Whether it's a shattered panel, backlight failure, or mysterious lines across the screen, we stock most common panels and can get rare ones fast. LED, OLED, touch—we handle them all.",
    features: [
      "LCD/LED/OLED panels",
      "Touch screen digitizers",
      "Backlight repair",
      "Cable & connector fixes",
      "Same-day service available"
    ],
    urgency: "medium",
    estimatedTime: "2-4 hours",
    priceRange: "250-800 RON"
  },
  {
    id: "thermal-cleaning",
    icon: Fan,
    title: "Overheating Fix",
    subtitle: "Thermal Paste & Deep Cleaning",
    description: "Laptop sounds like a jet engine? Shutting down randomly? That's thermal throttling screaming for help. We tear it down, blast out the dust bunnies, replace the crusty thermal paste, and get your cooling system back to factory-fresh. Your CPU will thank us.",
    features: [
      "Complete disassembly & dust removal",
      "Quality thermal paste application",
      "Fan cleaning or replacement",
      "Heat pipe inspection",
      "Stress testing post-repair"
    ],
    urgency: "medium",
    estimatedTime: "1-2 hours",
    priceRange: "100-250 RON"
  },
  {
    id: "data-recovery",
    icon: HardDrive,
    title: "Data Recovery",
    subtitle: "Dead Drive? We Might Still Save It.",
    description: "Hard drive clicking? SSD not detected? Accidentally formatted? We use professional-grade tools to recover photos, documents, and files from failing or dead drives. Can't promise miracles, but we've pulled off some resurrections that shocked even us.",
    features: [
      "HDD & SSD recovery",
      "Deleted file restoration",
      "Corrupt partition repair",
      "Physical drive repair",
      "Encrypted drive support"
    ],
    urgency: "high",
    estimatedTime: "1-7 days",
    priceRange: "200-1000 RON"
  },
  {
    id: "software-install",
    icon: Download,
    title: "OS & Software Install",
    subtitle: "Windows, Linux, Drivers—Done Right.",
    description: "Slow as molasses? Virus-ridden? Blue screen of death on repeat? We'll nuke it from orbit and reinstall everything clean. Windows 10/11, Linux distros, driver hunting—we make sure everything just works. Includes optimization and essential software setup.",
    features: [
      "Clean OS installation (Windows/Linux)",
      "Driver installation & updates",
      "Software optimization",
      "Data backup & transfer",
      "Anti-virus setup"
    ],
    urgency: "low",
    estimatedTime: "2-4 hours",
    priceRange: "80-200 RON"
  }
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(s => s.id === slug)
}

export function getServiceIcon(serviceId: string): LucideIcon {
  const service = services.find(s => s.id === serviceId)
  return service?.icon || Cpu
}
