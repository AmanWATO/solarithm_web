"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Facebook, Github, Instagram, Linkedin, Twitter, Mail, MapPin, Phone } from "lucide-react"
import ModernSolarIcon from "@/components/modern-solar-icon"

export default function Footer() {
  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Github, href: "#", label: "GitHub" },
  ]

  const navigationLinks = [
    { name: "Home", href: "/" },
    { name: "Dashboard", href: "/dashboard" },
    { name: "Solar Map", href: "/solar-map" },
    { name: "Calculator", href: "/calculator" },
    { name: "Roadmap", href: "/roadmap" },
    { name: "Blog", href: "/blog" },
    { name: "Join Waitlist", href: "/waitlist" },
  ]

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "#" },
    { name: "GDPR", href: "#" },
  ]

  const contactInfo = [
    { icon: Mail, text: "info@solarithm.com", href: "mailto:info@solarithm.com" },
    { icon: Phone, text: "+91 80 1234 5678", href: "tel:+918012345678" },
    { icon: MapPin, text: "Koramangala, Bengaluru, Karnataka 560034, India", href: "#" },
  ]

  return (
    <footer 
      className="relative px-4 py-12 text-[#F8FAFC] sm:px-6 lg:px-8 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0A0A0F 0%, #1A1A2E 50%, #2D2D44 100%)"
      }}
    >
      {/* Background effects */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 102, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 102, 255, 0.1) 1px, transparent 1px)",
          backgroundSize: "50px 50px"
        }}
      />
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          background: "radial-gradient(circle at 25% 25%, rgba(0, 255, 136, 0.2) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.2) 0%, transparent 50%)"
        }}
      />
      
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center mb-4">
              <ModernSolarIcon size={32} className="text-[#0066FF]" />
              <h3 
                className="ml-3 text-lg font-semibold"
                style={{
                  background: "linear-gradient(to right, #0066FF, #00FF88)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                }}
              >
                Solarithm
              </h3>
            </div>
            <p 
              className="mb-6 text-sm leading-relaxed"
              style={{ color: "rgba(248, 250, 252, 0.7)" }}
            >
              The intelligent solar market platform designed for energy companies, startups, and analysts. 
              Transforming sunlight into strategic insights.
            </p>
            
            {/* Social links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="group relative p-2 rounded-lg border transition-all duration-300"
                  style={{
                    backgroundColor: "rgba(248, 250, 252, 0.1)",
                    backdropFilter: "blur(10px)",
                    borderColor: "rgba(0, 102, 255, 0.2)"
                  }}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -2,
                    borderColor: "rgba(0, 255, 136, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <social.icon 
                    className="h-4 w-4 transition-colors duration-300" 
                    style={{ 
                      color: "rgba(248, 250, 252, 0.7)"
                    }}
                  />
                  <span className="sr-only">{social.label}</span>
                  
                  {/* Hover glow */}
                  <motion.div
                    className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 blur-sm"
                    style={{ backgroundColor: "rgba(0, 255, 136, 0.2)" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-4 text-lg font-semibold" style={{ color: "#0066FF" }}>Navigation</h3>
            <ul className="space-y-2 text-sm">
              {navigationLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={link.href}
                    className="group relative inline-block transition-colors duration-300"
                    style={{ color: "rgba(248, 250, 252, 0.7)" }}
                  >
                    {link.name}
                    <motion.span
                      className="absolute -bottom-1 left-0 h-0.5"
                      style={{ backgroundColor: "#00FF88" }}
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-4 text-lg font-semibold" style={{ color: "#8B5CF6" }}>Legal</h3>
            <ul className="space-y-2 text-sm">
              {legalLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={link.href}
                    className="group relative inline-block transition-colors duration-300"
                    style={{ color: "rgba(248, 250, 252, 0.7)" }}
                  >
                    {link.name}
                    <motion.span
                      className="absolute -bottom-1 left-0 h-0.5"
                      style={{ backgroundColor: "#8B5CF6" }}
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-4 text-lg font-semibold" style={{ color: "#FFD700" }}>Contact</h3>
            <ul className="space-y-3 text-sm">
              {contactInfo.map((contact, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={contact.href}
                    className="group flex items-start space-x-3 transition-colors duration-300"
                    style={{ color: "rgba(248, 250, 252, 0.7)" }}
                  >
                    <contact.icon className="h-4 w-4 mt-0.5 flex-shrink-0 transition-colors duration-300" />
                    <span className="leading-relaxed">{contact.text}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 border-t pt-8"
          style={{ borderTopColor: "rgba(0, 102, 255, 0.2)" }}
        >
          <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
            <p 
              className="text-sm"
              style={{ color: "rgba(248, 250, 252, 0.6)" }}
            >
              &copy; {new Date().getFullYear()} Solarithm. All rights reserved.
            </p>
            
            {/* Animated tagline */}
            <motion.p
              className="text-sm font-medium"
              style={{
                background: "linear-gradient(to right, #0066FF, #00FF88, #8B5CF6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                backgroundSize: "200% 200%"
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              Powering the future of solar intelligence
            </motion.p>
          </div>
        </motion.div>
      </div>
      
      {/* Corner decorations */}
      <motion.div
        className="absolute bottom-0 right-0 w-32 h-32"
        style={{
          background: "linear-gradient(to top left, rgba(0, 102, 255, 0.1), transparent)"
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </footer>
  )
}