
"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { ArrowRight, CheckCircle, Globe, LineChart, MapPin, Zap, Star, Users, TrendingUp, Shield, Lightbulb, BarChart3 } from "lucide-react"
import { useRef, useState, useEffect } from "react"

import CyberBackground from "@/components/cyber-background"
import EarlyAccessForm from "@/components/early-access-form"
import FeatureCard from "@/components/feature-card"
import Navbar from "@/components/navbar"
import RoadmapItem from "@/components/roadmap-item"
import BlogCard from "@/components/blog-card"
import Footer from "@/components/footer"
import ScrollReveal from "@/components/scroll-reveal"
import TestimonialCarousel from "@/components/testimonial-carousel"
import AnimatedPageWrapper from "@/components/animated-page-wrapper"
import ModernHeroSection from "@/components/modern-hero-section"
import ModernSolarIcon from "@/components/modern-solar-icon"

// Marquee component for infinite scrolling text
const Marquee = ({ children, speed = 50 }: { children: React.ReactNode; speed?: number }) => {
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <motion.div
        className="inline-block"
        animate={{
          x: [0, -1000],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}

// Slideshow component for rotating content
const Slideshow = ({ slides }: { slides: any[] }) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <div className="relative h-[600px] rounded-2xl overflow-hidden">
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentSlide ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 text-white">
            <h3 className="text-3xl font-bold mb-4">{slide.title}</h3>
            <p className="text-lg opacity-90">{slide.description}</p>
          </div>
        </motion.div>
      ))}
      
      {/* Slide indicators */}
      <div className="absolute bottom-4 right-4 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default function Home() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const testimonialSlides = [
    {
      image: "https://images.pexels.com/photos/2850290/pexels-photo-2850290.jpeg",
      title: "Solar Innovation Hub",
      description: "Leading the charge in renewable energy technology"
    },
    {
      image: "https://images.pexels.com/photos/9875414/pexels-photo-9875414.jpeg",
      title: "Smart Energy Solutions",
      description: "Intelligent systems for maximum efficiency"
    },
    {
      image: "https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg",
      title: "Sustainable Future",
      description: "Building tomorrow's clean energy infrastructure"
    }
  ]

  const stats = [
    { number: "500+", label: "Solar Projects Analyzed" },
    { number: "₹2.5M+", label: "Savings Generated" },
    { number: "95%", label: "Accuracy Rate" },
    { number: "24/7", label: "System Monitoring" }
  ]

  return (
    <div className="flex min-h-screen flex-col relative overflow-hidden">
      <CyberBackground />
      <Navbar />
      
      {/* Hero Section with Parallax */}
      <motion.section 
        ref={heroRef}
        style={{ y, opacity }}
        className="relative min-h-screen flex items-center justify-center"
      >
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/9875414/pexels-photo-9875414.jpeg"
            alt="Solar panels against blue sky"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90" />
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8 flex justify-center"
          >
            <div className="p-4 rounded-full bg-gradient-to-br from-solar-400 to-solar-600 shadow-2xl">
              <ModernSolarIcon size={64} className="text-white" />
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold mb-6 gradient-text"
          >
            Solarithm
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed"
          >
            The AI-powered solar intelligence platform transforming renewable energy decisions
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/waitlist"
              className="btn-primary text-lg px-8 py-4 rounded-full hover:shadow-2xl hover:shadow-solar-500/30"
            >
              Join Early Access
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="#features"
              className="btn-outline text-lg px-8 py-4 rounded-full border-white text-white hover:bg-white hover:text-slate-900"
            >
              Explore Features
            </Link>
          </motion.div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-solar-400 rounded-full"
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
              }}
            />
          ))}
        </div>
      </motion.section>

      {/* Stats Marquee */}
      <section className="bg-gradient-to-r from-solar-500 to-solar-600 py-6 overflow-hidden">
        <Marquee speed={30}>
          <div className="flex items-center space-x-16 text-white">
            {stats.concat(stats).map((stat, index) => (
              <div key={index} className="flex items-center space-x-4 px-8">
                <div className="text-center">
                  <div className="text-3xl font-bold">{stat.number}</div>
                  <div className="text-sm opacity-90">{stat.label}</div>
                </div>
                <div className="w-px h-12 bg-white/30" />
              </div>
            ))}
          </div>
        </Marquee>
      </section>

      {/* Features Section with Scroll Slide Effect */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Intelligent Solar Solutions
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Advanced analytics and AI-powered insights to optimize your solar investments
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <MapPin className="h-12 w-12 text-solar-500" />,
                title: "Smart Location Analysis",
                description: "AI-powered site assessment using satellite imagery and weather data",
                image: "https://images.pexels.com/photos/2850290/pexels-photo-2850290.jpeg"
              },
              {
                icon: <LineChart className="h-12 w-12 text-sky-500" />,
                title: "ROI Optimization",
                description: "Precise financial modeling with real-time market data",
                image: "https://images.pexels.com/photos/159160/solar-panel-array-power-sun-electricity-159160.jpeg"
              },
              {
                icon: <Globe className="h-12 w-12 text-forest-500" />,
                title: "Climate Integration",
                description: "Real-time weather data for accurate performance predictions",
                image: "https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg"
              },
              {
                icon: <Zap className="h-12 w-12 text-solar-500" />,
                title: "Performance Monitoring",
                description: "24/7 system tracking with predictive maintenance alerts",
                image: "https://images.pexels.com/photos/9875414/pexels-photo-9875414.jpeg"
              },
              {
                icon: <Users className="h-12 w-12 text-sky-500" />,
                title: "Lead Generation",
                description: "Convert market insights into qualified prospects",
                image: "https://images.pexels.com/photos/2850290/pexels-photo-2850290.jpeg"
              },
              {
                icon: <BarChart3 className="h-12 w-12 text-forest-500" />,
                title: "Market Intelligence",
                description: "Comprehensive market analysis and competitor insights",
                image: "https://images.pexels.com/photos/159160/solar-panel-array-power-sun-electricity-159160.jpeg"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                  />
                </div>
                <div className="relative z-10">
                  <div className="mb-6">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-4 text-slate-900">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </div>
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-solar-200 transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section with Slideshow */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
                Revolutionizing Solar Intelligence
              </h2>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                We combine cutting-edge AI, satellite imagery, and real-time data to provide 
                the most accurate solar market intelligence platform in India.
              </p>
              
              <div className="space-y-4">
                {[
                  "AI-powered site analysis with 95% accuracy",
                  "Real-time ROI calculations and market insights",
                  "Comprehensive climate and weather integration",
                  "Advanced lead generation and CRM tools"
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="h-6 w-6 text-solar-400 flex-shrink-0" />
                    <span className="text-slate-300">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Slideshow slides={testimonialSlides} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industry Recognition Marquee */}
      <section className="py-12 bg-gradient-to-r from-sky-500 to-forest-500">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-white">Trusted by Industry Leaders</h3>
        </div>
        <Marquee speed={40}>
          <div className="flex items-center space-x-16 text-white">
            {[
              "MNRE Approved", "ISO 27001 Certified", "AI Excellence Award", 
              "Green Tech Innovation", "Solar Industry Partner", "Clean Energy Alliance",
              "MNRE Approved", "ISO 27001 Certified", "AI Excellence Award", 
              "Green Tech Innovation", "Solar Industry Partner", "Clean Energy Alliance"
            ].map((cert, index) => (
              <div key={index} className="flex items-center space-x-4 px-6">
                <Star className="h-6 w-6 text-yellow-300" />
                <span className="text-lg font-medium whitespace-nowrap">{cert}</span>
              </div>
            ))}
          </div>
        </Marquee>
      </section>

      {/* Testimonials Scroll Slide */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              What Industry Leaders Say
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Hear from solar professionals transforming their businesses with Solarithm
            </p>
          </motion.div>

          <TestimonialCarousel
            testimonials={[
              {
                id: 1,
                name: "Industry Professional",
                role: "CEO",
                company: "Leading Solar Company",
                image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
                quote: "Solarithm has transformed how we approach solar installations. The mapping tool alone has increased our efficiency by 40%."
              },
              {
                id: 2,
                name: "Energy Expert",
                role: "Head of Operations", 
                company: "Green Energy Solutions",
                image: "https://images.pexels.com/photos/3777946/pexels-photo-3777946.jpeg",
                quote: "The ROI calculator has become essential in our sales process. It provides transparent, accurate projections."
              },
              {
                id: 3,
                name: "Solar Analyst",
                role: "Market Analyst",
                company: "Solar Research Institute",
                image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg",
                quote: "As an analyst, I need reliable data. Solarithm's integration gives unprecedented accuracy in forecasting."
              }
            ]}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg"
            alt="Solar installation"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Transform Your Solar Business?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Join hundreds of solar professionals already using Solarithm to make smarter, 
              data-driven decisions. Get early access to our platform.
            </p>
            
            <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
              <EarlyAccessForm />
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
