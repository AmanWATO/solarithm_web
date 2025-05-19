"use client"

import { type ReactNode, useEffect, useRef, useState } from "react"
import { motion, useAnimation, type Variant } from "framer-motion"

interface ScrollRevealProps {
  children: ReactNode
  width?: "fit-content" | "100%"
  delay?: number
  duration?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  distance?: number
  once?: boolean
  className?: string
}

export default function ScrollReveal({
  children,
  width = "fit-content",
  delay = 0,
  duration = 0.5,
  direction = "up",
  distance = 50,
  once = true,
  className = "",
}: ScrollRevealProps) {
  const controls = useAnimation()
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  // Define variants based on direction
  const getDirectionalVariants = () => {
    const variants: { hidden: Variant; visible: Variant } = {
      hidden: {
        opacity: 0,
      },
      visible: {
        opacity: 1,
        transition: {
          duration,
          delay,
          ease: "easeOut",
        },
      },
    }

    switch (direction) {
      case "up":
        variants.hidden.y = distance
        variants.visible.y = 0
        break
      case "down":
        variants.hidden.y = -distance
        variants.visible.y = 0
        break
      case "left":
        variants.hidden.x = distance
        variants.visible.x = 0
        break
      case "right":
        variants.hidden.x = -distance
        variants.visible.x = 0
        break
      case "none":
      default:
        break
    }

    return variants
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          controls.start("visible")
          setIsInView(true)
          if (once) {
            observer.disconnect()
          }
        } else if (!entry.isIntersecting && !once && isInView) {
          controls.start("hidden")
          setIsInView(false)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [controls, isInView, once])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={getDirectionalVariants()}
      style={{ width }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
