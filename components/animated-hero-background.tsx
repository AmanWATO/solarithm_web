"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function AnimatedHeroBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = (e.clientY - rect.top) / rect.height

      const moveX = (x - 0.5) * 20
      const moveY = (y - 0.5) * 20

      const images = container.querySelectorAll('.floating-image')
      images.forEach((img, index) => {
        const element = img as HTMLElement
        const multiplier = (index + 1) * 0.5
        element.style.transform = `translate(${moveX * multiplier}px, ${moveY * multiplier}px)`
      })
    }

    container.addEventListener('mousemove', handleMouseMove)
    return () => container.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      {/* Floating solar panel images */}
      <motion.div
        className="floating-image absolute top-10 left-10 w-32 h-24 opacity-20"
        style={{ position: 'relative' }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 0.2, y: 0 }}
        transition={{ duration: 2, delay: 0.5 }}
      >
        <Image
          src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
          alt="Solar panels"
          fill
          sizes="(max-width: 768px) 128px, 160px"
          className="object-cover rounded-lg"
        />
      </motion.div>

      <motion.div
        className="floating-image absolute top-32 right-20 w-40 h-28 opacity-15"
        style={{ position: 'relative' }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 0.15, y: 0 }}
        transition={{ duration: 2, delay: 1 }}
      >
        <Image
          src="https://images.pexels.com/photos/9875414/pexels-photo-9875414.jpeg"
          alt="Solar installation"
          fill
          sizes="(max-width: 768px) 160px, 200px"
          className="object-cover rounded-lg"
        />
      </motion.div>

      <motion.div
        className="floating-image absolute bottom-20 left-1/4 w-36 h-24 opacity-10"
        style={{ position: 'relative' }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 2, delay: 1.5 }}
      >
        <Image
          src="https://images.pexels.com/photos/9875414/pexels-photo-9875414.jpeg"
          alt="Solar technology"
          fill
          sizes="(max-width: 768px) 144px, 180px"
          className="object-cover rounded-lg"
        />
      </motion.div>

      {/* Animated grid overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 102, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 102, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'float 20s ease-in-out infinite'
        }}
      />

      {/* Enhanced particle effects */}
      <div className="absolute inset-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 4 + 1 + 'px',
              height: Math.random() * 4 + 1 + 'px',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 3 === 0 ? '#0066FF' : i % 3 === 1 ? '#00FF88' : '#8B5CF6',
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Gradient overlays for better depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-background/20" />
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-transparent" />
    </div>
  )
}