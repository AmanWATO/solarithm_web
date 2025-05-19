"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  image: string
  quote: string
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[]
  autoplay?: boolean
  interval?: number
}

export default function TestimonialCarousel({
  testimonials,
  autoplay = true,
  interval = 5000,
}: TestimonialCarouselProps) {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const next = () => {
    setCurrent((current) => (current === testimonials.length - 1 ? 0 : current + 1))
  }

  const prev = () => {
    setCurrent((current) => (current === 0 ? testimonials.length - 1 : current - 1))
  }

  const goTo = (index: number) => {
    setCurrent(index)
  }

  // Handle autoplay
  useEffect(() => {
    if (autoplay && !isPaused) {
      timerRef.current = setInterval(() => {
        next()
      }, interval)
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [autoplay, interval, isPaused])

  return (
    <div
      className="relative w-full overflow-hidden rounded-xl bg-white shadow-lg"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative h-full w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full"
          >
            <div className="grid md:grid-cols-5 gap-6 p-6 md:p-8">
              <div className="md:col-span-2 flex flex-col items-center justify-center">
                <div className="relative h-24 w-24 md:h-32 md:w-32 overflow-hidden rounded-full border-4 border-amber-100">
                  <Image
                    src={testimonials[current].image || "/placeholder.svg?height=128&width=128"}
                    alt={testimonials[current].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="font-bold text-gray-900">{testimonials[current].name}</h3>
                  <p className="text-sm text-gray-600">{testimonials[current].role}</p>
                  <p className="text-sm font-medium text-amber-600">{testimonials[current].company}</p>
                </div>
              </div>

              <div className="md:col-span-3 flex flex-col justify-center">
                <Quote className="h-10 w-10 text-amber-200 mb-2" />
                <p className="text-lg italic text-gray-700">{testimonials[current].quote}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute inset-y-0 left-0 flex items-center">
        <button
          onClick={prev}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-gray-800 shadow-md backdrop-blur-sm transition-all hover:bg-amber-600 hover:text-white focus:outline-none -ml-5 md:ml-2"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
      </div>

      <div className="absolute inset-y-0 right-0 flex items-center">
        <button
          onClick={next}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-gray-800 shadow-md backdrop-blur-sm transition-all hover:bg-amber-600 hover:text-white focus:outline-none -mr-5 md:mr-2"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-2 left-0 right-0">
        <div className="flex justify-center space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              className={`h-2 w-2 rounded-full transition-all ${
                index === current ? "bg-amber-600 w-4" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
