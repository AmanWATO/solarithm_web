"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
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
      <motion.div
        className="group relative overflow-hidden rounded-xl p-6 border transition-all duration-300"
        style={{
          backgroundColor: "rgba(248, 250, 252, 0.1)",
          backdropFilter: "blur(10px)",
          borderColor: "rgba(0, 102, 255, 0.2)"
        }}
        whileHover={{ 
          scale: 1.02,
          y: -5,
          borderColor: "rgba(0, 255, 136, 0.4)"
        }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100"
          style={{
            background: "linear-gradient(135deg, rgba(0, 102, 255, 0.05), rgba(0, 255, 136, 0.05), rgba(139, 92, 246, 0.05))"
          }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Glow effect */}
        <motion.div
          className="absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-100 blur-sm"
          style={{
            background: "linear-gradient(to right, rgba(0, 102, 255, 0.2), rgba(0, 255, 136, 0.2), rgba(139, 92, 246, 0.2))"
          }}
          transition={{ duration: 0.3 }}
        />
        
        <div className="relative z-10">
          {/* Icon container */}
          <motion.div
            className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-xl border"
            style={{
              background: "linear-gradient(135deg, rgba(0, 102, 255, 0.1), rgba(0, 255, 136, 0.1))",
              borderColor: "rgba(0, 102, 255, 0.2)"
            }}
            whileHover={{ 
              rotate: [0, -10, 10, 0],
              scale: 1.1,
            }}
            transition={{ duration: 0.5 }}
          >
            {icon}
          </motion.div>
          
          {/* Content */}
          <motion.h3
            className="mb-2 text-xl font-bold"
            style={{
              background: "linear-gradient(to right, #0066FF, #00FF88)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}
            initial={{ opacity: 0.8 }}
            whileHover={{ opacity: 1 }}
          >
            {title}
          </motion.h3>
          
          <p 
            className="group-hover:text-[#F8FAFC] transition-colors duration-300"
            style={{ color: "rgba(248, 250, 252, 0.8)" }}
          >
            {description}
          </p>
          
          {/* Hover indicator */}
          <motion.div
            className="mt-4 flex items-center text-sm opacity-0 group-hover:opacity-100"
            style={{ color: "#00FF88" }}
            initial={{ x: -10 }}
            whileHover={{ x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <span>Learn more</span>
            <motion.svg
              className="ml-1 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </motion.svg>
          </motion.div>
        </div>
        
        {/* Corner accent */}
        <motion.div
          className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100"
          style={{
            background: "linear-gradient(to bottom left, rgba(0, 255, 136, 0.2), transparent)"
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </ScrollReveal>
  )
}