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
    <footer className="relative bg-gradient-to-br from-deep-space via-space-gray to-cosmic-gray px-4 py-12 text-stellar-white sm:px-6 lg:px-8 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 cyber-grid opacity-10" />
      <div className="absolute inset-0 neural-network opacity-5" />
      
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
              <ModernSolarIcon size={32} className="text-electric-blue" />
              <h3 className="ml-3 text-lg font-semibold bg-gradient-to-r from-electric-blue to-neon-green bg-clip-text text-transparent">
                Solarithm
              </h3>
            </div>
            <p className="mb-6 text-sm text-stellar-white/70 leading-relaxed">
              The intelligent solar market platform designed for energy companies, startups, and analysts. 
              Transforming sunlight into strategic insights.
            </p>
            
            {/* Social links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="group relative p-2 rounded-lg glass border border-electric-blue/20 hover:border-neon-green/40 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <social.icon className="h-4 w-4 text-stellar-white/70 group-hover:text-neon-green transition-colors duration-300" />
                  <span className="sr-only">{social.label}</span>
                  
                  {/* Hover glow */}
                  <motion.div
                    className="absolute inset-0 bg-neon-green/20 rounded-lg opacity-0 group-hover:opacity-100 blur-sm"
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
            <h3 className="mb-4 text-lg font-semibold text-electric-blue">Navigation</h3>
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
                    className="group relative inline-block text-stellar-white/70 hover:text-neon-green transition-colors duration-300"
                  >
                    {link.name}
                    <motion.span
                      className="absolute -bottom-1 left-0 h-0.5 bg-neon-green"
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
            <h3 className="mb-4 text-lg font-semibold text-cyber-purple">Legal</h3>
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
                    className="group relative inline-block text-stellar-white/70 hover:text-cyber-purple transition-colors duration-300"
                  >
                    {link.name}
                    <motion.span
                      className="absolute -bottom-1 left-0 h-0.5 bg-cyber-purple"
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
            <h3 className="mb-4 text-lg font-semibold text-quantum-gold">Contact</h3>
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
                    className="group flex items-start space-x-3 text-stellar-white/70 hover:text-quantum-gold transition-colors duration-300"
                  >
                    <contact.icon className="h-4 w-4 mt-0.5 flex-shrink-0 group-hover:text-quantum-gold transition-colors duration-300" />
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
          className="mt-12 border-t border-electric-blue/20 pt-8"
        >
          <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
            <p className="text-sm text-stellar-white/60">
              &copy; {new Date().getFullYear()} Solarithm. All rights reserved.
            </p>
            
            {/* Animated tagline */}
            <motion.p
              className="text-sm bg-gradient-to-r from-electric-blue via-neon-green to-cyber-purple bg-clip-text text-transparent font-medium"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                backgroundSize: "200% 200%",
              }}
            >
              Powering the future of solar intelligence
            </motion.p>
          </div>
        </motion.div>
      </div>
      
      {/* Corner decorations */}
      <motion.div
        className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-electric-blue/10 to-transparent"
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