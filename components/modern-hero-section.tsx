"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Sparkles, Zap, Globe } from "lucide-react"
import ModernSolarIcon from "@/components/modern-solar-icon"

export default function ModernHeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-deep-space via-space-gray to-cosmic-gray px-4 py-24 text-center sm:px-6 lg:px-8">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-electric-blue rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Energy rings */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`ring-${i}`}
            className="absolute border border-electric-blue/20 rounded-full"
            style={{
              width: `${300 + i * 200}px`,
              height: `${300 + i * 200}px`,
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: {
                duration: 20 + i * 10,
                repeat: Infinity,
                ease: "linear",
              },
              scale: {
                duration: 4 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Launch badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-block"
        >
          <div className="glass rounded-full px-6 py-2 border border-electric-blue/30">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-4 w-4 text-neon-green" />
              <span className="text-sm font-medium text-stellar-white">
                Launching November 2025
              </span>
              <motion.div
                className="w-2 h-2 bg-neon-green rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </div>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-7xl"
        >
          <span className="block bg-gradient-to-r from-electric-blue via-neon-green to-cyber-purple bg-clip-text text-transparent">
            Solarithm
          </span>
          <motion.span 
            className="block text-stellar-white mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-quantum-gold to-solar-orange bg-clip-text text-transparent">
              Sunlight
            </span>{" "}
            Meets{" "}
            <span className="bg-gradient-to-r from-cyber-purple to-electric-blue bg-clip-text text-transparent">
              Strategy
            </span>
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-10 text-xl text-stellar-white/80 sm:text-2xl max-w-3xl mx-auto"
        >
          The intelligent solar market platform designed for energy companies, startups, and analysts
        </motion.p>

        {/* Feature highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-10 flex flex-wrap justify-center gap-6 text-sm"
        >
          {[
            { icon: Zap, text: "AI-Powered Analytics" },
            { icon: Globe, text: "Real-time Data" },
            { icon: ModernSolarIcon, text: "Smart Mapping" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="flex items-center space-x-2 glass rounded-full px-4 py-2 border border-electric-blue/20"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <item.icon className="h-4 w-4 text-neon-green" size={16} />
              <span className="text-stellar-white/80">{item.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <Link
            href="#early-access"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-electric-blue to-neon-green px-8 py-4 text-lg font-medium text-deep-space transition-all duration-300 hover:shadow-lg hover:shadow-electric-blue/25"
          >
            <motion.span
              className="relative z-10 flex items-center"
              whileHover={{ x: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Join the Waitlist
            </motion.span>
            <motion.div
              className="ml-2 relative z-10"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowRight className="h-5 w-5" />
            </motion.div>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-neon-green to-electric-blue opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.3 }}
            />
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <Link
            href="#about"
            className="flex flex-col items-center space-y-2 text-stellar-white/60 hover:text-electric-blue transition-colors duration-300"
          >
            <span className="text-sm">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-6 h-10 border-2 border-current rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-3 bg-current rounded-full mt-2"
              />
            </motion.div>
          </Link>
        </motion.div>
      </div>

      {/* Central solar icon */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
      >
        <ModernSolarIcon size={200} className="opacity-20" />
      </motion.div>
    </section>
  )
}