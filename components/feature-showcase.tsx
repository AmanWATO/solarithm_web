import Image from "next/image"
import { CheckCircle } from "lucide-react"
import type { ReactNode } from "react"

interface FeatureShowcaseProps {
  title: string
  description: string
  imageUrl: string
  icon: ReactNode
  features: string[]
  reversed?: boolean
}

export default function FeatureShowcase({
  title,
  description,
  imageUrl,
  icon,
  features,
  reversed = false,
}: FeatureShowcaseProps) {
  return (
    <div className={`mb-24 ${reversed ? "lg:flex-row-reverse" : ""} lg:flex lg:items-center lg:gap-12`}>
      <div className="lg:w-1/2">
        <div className="mb-6 flex items-center">
          <div className="mr-4">{icon}</div>
          <h2 className="text-3xl font-bold tracking-tight text-[#2EC4B6]">{title}</h2>
        </div>
        <p className="mb-8 text-lg text-[#121212]">{description}</p>
        <ul className="space-y-4">
          {features.map((feature, index) => (
            
            <motion.div
            key={index}
            className="group relative overflow-hidden rounded-2xl border backdrop-blur-sm transition-all duration-700 hover:scale-[1.02]"
            style={{
              backgroundColor: "rgba(45, 45, 68, 0.3)",
              borderColor: "rgba(0, 102, 255, 0.2)",
              backdropFilter: "blur(20px)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)"
            }}
            initial={{ opacity: 0, y: 50, rotateX: 10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
            viewport={{ once: true }}
            whileHover={{
              borderColor: "rgba(0, 255, 136, 0.5)",
              boxShadow: "0 25px 50px rgba(0, 102, 255, 0.2), 0 0 0 1px rgba(0, 255, 136, 0.1)",
              y: -5
            }}
          >
            <li key={index} className="flex items-start">
              <CheckCircle className="mr-3 h-5 w-5 flex-shrink-0 text-[#FF6B35]" />
              <span className="text-[#121212]">{feature}</span>
            </li>
            </motion.div>
          ))}
        </ul>
      </div>
      <div className="mt-10 lg:mt-0 lg:w-1/2">
        <div className="overflow-hidden rounded-xl bg-[#EAEAEA] shadow-lg transition-all duration-300 hover:shadow-xl">
          <div className="relative aspect-video">
            <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
          </div>
        </div>
      </div>
    </div>
  )
}