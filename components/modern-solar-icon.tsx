"use client"

import { motion } from "framer-motion"
import type { SVGProps } from "react"

interface ModernSolarIconProps extends SVGProps<SVGSVGElement> {
  animated?: boolean
  size?: number
}

export default function ModernSolarIcon({ 
  animated = true, 
  size = 32, 
  className = "",
  ...props 
}: ModernSolarIconProps) {
  const rayVariants = {
    initial: { 
      scale: 0.8, 
      opacity: 0.6,
      rotate: 0 
    },
    animate: { 
      scale: [0.8, 1.2, 0.8], 
      opacity: [0.6, 1, 0.6],
      rotate: 360,
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  const coreVariants = {
    initial: { 
      scale: 1,
      filter: "drop-shadow(0 0 10px rgba(0, 255, 136, 0.5))"
    },
    animate: { 
      scale: [1, 1.1, 1],
      filter: [
        "drop-shadow(0 0 10px rgba(0, 255, 136, 0.5))",
        "drop-shadow(0 0 20px rgba(0, 255, 136, 0.8))",
        "drop-shadow(0 0 10px rgba(0, 255, 136, 0.5))"
      ],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  const orbitVariants = {
    initial: { rotate: 0 },
    animate: { 
      rotate: 360,
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "linear"
      }
    }
  }

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className}`}
      initial="initial"
      animate={animated ? "animate" : "initial"}
      {...props}
    >
      {/* Outer energy ring */}
      <motion.circle
        cx="50"
        cy="50"
        r="45"
        stroke="url(#outerGradient)"
        strokeWidth="2"
        fill="none"
        strokeDasharray="5,5"
        variants={orbitVariants}
      />
      
      {/* Energy rays */}
      <motion.g variants={rayVariants}>
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, index) => (
          <motion.line
            key={angle}
            x1="50"
            y1="15"
            x2="50"
            y2="5"
            stroke="url(#rayGradient)"
            strokeWidth="3"
            strokeLinecap="round"
            transform={`rotate(${angle} 50 50)`}
            initial={{ opacity: 0.4 }}
            animate={{
              opacity: [0.4, 1, 0.4],
              transition: {
                duration: 2,
                repeat: Infinity,
                delay: index * 0.2,
                ease: "easeInOut"
              }
            }}
          />
        ))}
      </motion.g>

      {/* Solar core */}
      <motion.circle
        cx="50"
        cy="50"
        r="20"
        fill="url(#coreGradient)"
        variants={coreVariants}
      />

      {/* Inner energy core */}
      <motion.circle
        cx="50"
        cy="50"
        r="12"
        fill="url(#innerGradient)"
        variants={coreVariants}
      />

      {/* Central spark */}
      <motion.circle
        cx="50"
        cy="50"
        r="4"
        fill="#FFFFFF"
        initial={{ opacity: 0.8 }}
        animate={{
          opacity: [0.8, 1, 0.8],
          scale: [1, 1.2, 1],
          transition: {
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      />

      {/* Orbiting particles */}
      {[0, 120, 240].map((angle, index) => (
        <motion.circle
          key={`particle-${angle}`}
          cx="50"
          cy="25"
          r="2"
          fill="url(#particleGradient)"
          transform={`rotate(${angle} 50 50)`}
          animate={{
            rotate: 360,
            transition: {
              duration: 6,
              repeat: Infinity,
              ease: "linear",
              delay: index * 0.5
            }
          }}
          style={{ transformOrigin: "50px 50px" }}
        />
      ))}

      {/* Gradients */}
      <defs>
        <radialGradient id="coreGradient" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="50%" stopColor="#FF6B35" />
          <stop offset="100%" stopColor="#0066FF" />
        </radialGradient>
        
        <radialGradient id="innerGradient" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#00FF88" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#0066FF" stopOpacity="0.5" />
        </radialGradient>
        
        <linearGradient id="rayGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="50%" stopColor="#00FF88" />
          <stop offset="100%" stopColor="#0066FF" />
        </linearGradient>
        
        <linearGradient id="outerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="50%" stopColor="#0066FF" />
          <stop offset="100%" stopColor="#00FF88" />
        </linearGradient>
        
        <radialGradient id="particleGradient" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#00FF88" />
        </radialGradient>
      </defs>
    </motion.svg>
  )
}