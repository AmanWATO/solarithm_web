import type { ReactNode } from "react"
import ScrollReveal from "@/components/scroll-reveal"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  delay?: number
}

export default function FeatureCard({ icon, title, description, delay = 0 }: FeatureCardProps) {
  return (
    <ScrollReveal delay={delay} width="100%">
      <div className="group relative overflow-hidden rounded-xl bg-[#F9F9F9] dark:bg-[#1A1A2E]/30 p-6 shadow-md transition-all hover:shadow-xl">
        <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#2EC4B6]/10 opacity-0 transition-opacity group-hover:opacity-100"></div>
        <div className="relative">
          <div className="mb-4">{icon}</div>
          <h3 className="mb-2 text-xl font-bold text-[#FFC857]">{title}</h3>
          <p className="text-[#121212] dark:text-[#EAEAEA]">{description}</p>
        </div>
      </div>
    </ScrollReveal>
  )
}
