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
        className="group relative overflow-hidden rounded-xl glass p-6 border border-electric-blue/20 transition-all duration-300 hover:border-neon-green/40"
        whileHover={{ 
          scale: 1.02,
          y: -5,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 via-neon-green/5 to-cyber-purple/5 opacity-0 group-hover:opacity-100"
          transition={{ duration: 0.3 }}
        />
        
        {/* Glow effect */}
        <motion.div
          className="absolute -inset-1 bg-gradient-to-r from-electric-blue/20 via-neon-green/20 to-cyber-purple/20 rounded-xl opacity-0 group-hover:opacity-100 blur-sm"
          transition={{ duration: 0.3 }}
        />
        
        <div className="relative z-10">
          {/* Icon container */}
          <motion.div
            className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-electric-blue/10 to-neon-green/10 border border-electric-blue/20"
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
            className="mb-2 text-xl font-bold bg-gradient-to-r from-electric-blue to-neon-green bg-clip-text text-transparent"
            initial={{ opacity: 0.8 }}
            whileHover={{ opacity: 1 }}
          >
            {title}
          </motion.h3>
          
          <p className="text-stellar-white/80 group-hover:text-stellar-white transition-colors duration-300">
            {description}
          </p>
          
          {/* Hover indicator */}
          <motion.div
            className="mt-4 flex items-center text-sm text-neon-green opacity-0 group-hover:opacity-100"
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
          className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-neon-green/20 to-transparent opacity-0 group-hover:opacity-100"
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </ScrollReveal>
  )
}