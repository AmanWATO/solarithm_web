"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, BarChart3, MapPin, Calculator, Zap } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Home() {
  const features = [
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Smart Solar Mapping",
      description: "AI-powered geographic analysis to identify optimal installation zones with unprecedented accuracy."
    },
    {
      icon: <Calculator className="h-8 w-8" />,
      title: "ROI Calculator",
      description: "Precise financial modeling tools to forecast returns and optimize investment decisions."
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Market Intelligence",
      description: "Real-time data integration and analytics for informed strategic decision making."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Performance Analytics",
      description: "Comprehensive monitoring and analysis tools to maximize system efficiency."
    }
  ]

  const benefits = [
    "Reduce site assessment time by 75%",
    "Increase project success rate by 40%",
    "Access real-time market data",
    "Streamline decision-making process"
  ]

  const stats = [
    { number: "500+", label: "Projects Analyzed" },
    { number: "95%", label: "Accuracy Rate" },
    { number: "50+", label: "Enterprise Clients" },
    { number: "24/7", label: "Support Available" }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-32 pb-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="accent-line"></div>
              <h1 className="text-display text-black mb-6">
                Solar Intelligence
                <br />
                <span className="text-gray-600">Redefined</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                The most advanced solar market intelligence platform designed for energy companies, 
                startups, and analysts. Transform data into strategic advantage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link href="/demo" className="btn-primary">
                  Request Demo
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/calculator" className="btn-secondary">
                  Try Calculator
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-8">
                {stats.slice(0, 2).map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                  >
                    <div className="text-3xl font-bold text-black">{stat.number}</div>
                    <div className="text-sm text-gray-600 uppercase tracking-wide">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-[600px] w-full">
                <Image
                  src="https://images.pexels.com/photos/9875414/pexels-photo-9875414.jpeg"
                  alt="Solar Intelligence Platform"
                  fill
                  className="object-cover rounded-lg shadow-strong"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="accent-line mx-auto"></div>
            <h2 className="text-headline text-black mb-6">
              Comprehensive Solar Intelligence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform combines cutting-edge technology with industry expertise to deliver 
              unparalleled insights for solar market professionals.
            </p>
          </motion.div>

          <div className="grid-professional">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-professional text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-white rounded-lg mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-title text-black mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative h-[500px] w-full">
                <Image
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                  alt="Solar Analytics Dashboard"
                  fill
                  className="object-cover rounded-lg shadow-medium"
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="accent-line"></div>
              <h2 className="text-headline text-black mb-6">
                Why Industry Leaders Choose Solarithm
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Transform your solar business with data-driven insights and advanced analytics 
                that deliver measurable results.
              </p>
              
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <CheckCircle className="h-5 w-5 text-black mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
              
              <Link href="/platform" className="btn-primary">
                Explore Platform
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-black text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-headline mb-6">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Join the growing community of solar professionals who rely on Solarithm 
              for critical business decisions.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-gray-400 uppercase tracking-wide text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="accent-line mx-auto"></div>
            <h2 className="text-headline text-black mb-6">
              Ready to Transform Your Solar Business?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join industry leaders who trust Solarithm for critical business decisions. 
              Experience the power of intelligent solar analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/demo" className="btn-primary">
                Request Demo
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="btn-secondary">
                Contact Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}