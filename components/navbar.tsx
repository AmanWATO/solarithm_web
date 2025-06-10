"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { ThemeToggle } from "@/components/theme-toggle"
import ModernSolarIcon from "@/components/modern-solar-icon"

const navLinks = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Solar Map", href: "/solar-map" },
  { name: "Calculator", href: "/calculator" },
  { name: "Roadmap", href: "/roadmap" },
  { name: "Blog", href: "/blog" },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "backdrop-blur-xl border-b shadow-lg" 
          : "backdrop-blur-md"
      }`}
      style={{
        backgroundColor: isScrolled ? "rgba(10, 10, 15, 0.9)" : "rgba(10, 10, 15, 0.5)",
        borderBottomColor: isScrolled ? "rgba(0, 102, 255, 0.2)" : "transparent",
        boxShadow: isScrolled ? "0 4px 20px rgba(0, 102, 255, 0.1)" : "none"
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link href="/" className="flex items-center group">
              <div className="relative">
                <ModernSolarIcon size={40} className="text-[#0066FF]" />
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{ backgroundColor: "rgba(0, 102, 255, 0.2)" }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
              <motion.span 
                className="ml-3 text-xl font-bold"
                style={{
                  background: "linear-gradient(to right, #0066FF, #00FF88, #8B5CF6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Solarithm
              </motion.span>
            </Link>
          </motion.div>

          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navLinks.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.6 }}
                >
                  <Link
                    href={link.href}
                    className={`relative text-sm font-medium transition-all duration-300 hover:text-[#00FF88] group ${
                      isActive(link.href) ? "text-[#0066FF]" : "text-[#F8FAFC]"
                    }`}
                  >
                    {link.name}
                    <motion.span
                      className="absolute -bottom-1 left-0 h-0.5"
                      style={{
                        background: "linear-gradient(to right, #0066FF, #00FF88)"
                      }}
                      initial={{ width: 0 }}
                      animate={{ width: isActive(link.href) ? "100%" : 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                    {isActive(link.href) && (
                      <motion.div
                        className="absolute -inset-2 rounded-lg border"
                        style={{
                          backgroundColor: "rgba(0, 102, 255, 0.1)",
                          borderColor: "rgba(0, 102, 255, 0.2)"
                        }}
                        layoutId="activeTab"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/waitlist"
                className="relative overflow-hidden rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 hover:shadow-lg group"
                style={{
                  background: "linear-gradient(to right, #0066FF, #00FF88)",
                  color: "#0A0A0F",
                  boxShadow: "0 4px 15px rgba(0, 102, 255, 0.25)"
                }}
              >
                <span className="relative z-10">Join Waitlist</span>
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100"
                  style={{
                    background: "linear-gradient(to right, #00FF88, #0066FF)"
                  }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <motion.button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 transition-colors duration-200"
              style={{
                color: "#F8FAFC",
                backgroundColor: "rgba(45, 45, 68, 0.5)"
              }}
              onClick={toggleMenu}
              whileTap={{ scale: 0.95 }}
            >
              <span className="sr-only">Open main menu</span>
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden"
          >
            <div 
              className="backdrop-blur-xl border-t"
              style={{
                backgroundColor: "rgba(45, 45, 68, 0.95)",
                borderTopColor: "rgba(0, 102, 255, 0.2)"
              }}
            >
              <div className="space-y-1 px-4 pb-3 pt-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      className={`block rounded-md px-3 py-2 text-base font-medium transition-all duration-200 ${
                        isActive(link.href) 
                          ? "text-[#0066FF]" 
                          : "text-[#F8FAFC]"
                      }`}
                      style={{
                        backgroundColor: isActive(link.href) 
                          ? "rgba(0, 102, 255, 0.1)" 
                          : "transparent"
                      }}
                      onClick={toggleMenu}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * navLinks.length, duration: 0.3 }}
                  className="pt-4"
                >
                  <Link
                    href="/waitlist"
                    className="block rounded-md px-3 py-2 text-base font-medium transition-all duration-300"
                    style={{
                      background: "linear-gradient(to right, #0066FF, #00FF88)",
                      color: "#0A0A0F",
                      boxShadow: "0 4px 15px rgba(0, 102, 255, 0.25)"
                    }}
                    onClick={toggleMenu}
                  >
                    Join Waitlist
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}