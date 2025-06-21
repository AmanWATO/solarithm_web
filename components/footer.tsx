
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
  ]

  const contactInfo = [
    { icon: Mail, text: "hello@solarithm.com", href: "mailto:hello@solarithm.com" },
    { icon: Phone, text: "+91 80 1234 5678", href: "tel:+918012345678" },
    { icon: MapPin, text: "Koramangala, Bengaluru, Karnataka 560034, India", href: "#" },
  ]

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-dots opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />

      <div className="relative px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="flex items-center mb-6">
                <div className="p-2 rounded-lg bg-gradient-to-br from-solar-400 to-solar-600">
                  <ModernSolarIcon size={28} className="text-white" />
                </div>
                <h3 className="ml-3 text-xl font-display font-bold gradient-text">
                  Solarithm
                </h3>
              </div>
              <p className="mb-8 text-slate-300 leading-relaxed">
                The intelligent solar market platform designed for energy companies, startups, and analysts. 
                Transforming sunlight into strategic insights.
              </p>

              {/* Social links */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="group relative p-3 rounded-lg glass hover:bg-solar-500/20 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5 text-slate-300 group-hover:text-solar-300 transition-colors" />

                    {/* Hover glow */}
                    <motion.div
                      className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 blur-sm"
                      style={{ backgroundColor: "rgba(255, 149, 0, 0.2)" }}
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
              <h3 className="mb-6 text-lg font-display font-semibold text-solar-300">Navigation</h3>
              <ul className="space-y-3">
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
                      className="group relative inline-block text-slate-300 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                      <motion.span
                        className="absolute -bottom-1 left-0 h-0.5 bg-solar-400"
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
              <h3 className="mb-6 text-lg font-display font-semibold text-sky-300">Legal</h3>
              <ul className="space-y-3">
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
                      className="group relative inline-block text-slate-300 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                      <motion.span
                        className="absolute -bottom-1 left-0 h-0.5 bg-sky-400"
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
              <h3 className="mb-6 text-lg font-display font-semibold text-forest-300">Contact</h3>
              <ul className="space-y-4">
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
                      className="group flex items-start gap-3 text-slate-300 hover:text-white transition-colors duration-300"
                    >
                      <contact.icon className="h-5 w-5 mt-0.5 flex-shrink-0 text-forest-400" />
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
            className="mt-16 border-t border-slate-700 pt-8"
          >
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <p className="text-slate-400">
                &copy; {new Date().getFullYear()} Solarithm. All rights reserved.
              </p>

              {/* Animated tagline */}
              <motion.p
                className="text-sm font-medium gradient-text"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 4,
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
          </div>
        </div>
      </div>

      {/* Corner decoration */}
      <motion.div
        className="absolute bottom-0 right-0 w-32 h-32 opacity-20"
        style={{
          background: "linear-gradient(to top left, rgba(255, 149, 0, 0.3), transparent)"
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </footer>

}
