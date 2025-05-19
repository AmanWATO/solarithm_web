"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Sun, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

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
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#121212]/90 backdrop-blur-md dark:bg-[#1A1A2E]/90" : "bg-[#121212] dark:bg-[#1A1A2E]"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Sun className="h-8 w-8 text-[#FFC857]" />
              <span className="ml-2 text-xl font-bold text-[#FFC857]">Solarithm</span>
            </Link>
          </div>

          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`text-sm font-medium transition-colors hover:text-[#2EC4B6] ${
                      isActive(link.href) ? "text-[#FF6B35]" : "text-[#EAEAEA]"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Link
              href="/waitlist"
              className="rounded-full bg-[#FFC857] px-4 py-2 text-sm font-medium text-[#121212] transition-colors hover:bg-[#FFC857]/90 dark:text-[#1A1A2E]"
            >
              Join Waitlist
            </Link>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-[#EAEAEA] hover:bg-[#1A1A2E]/50 hover:text-[#FFC857]"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 bg-[#121212] dark:bg-[#1A1A2E] px-2 pb-3 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`block rounded-md px-3 py-2 text-base font-medium transition-colors hover:bg-[#1A1A2E]/50 hover:text-[#2EC4B6] ${
                  isActive(link.href) ? "text-[#FF6B35]" : "text-[#EAEAEA]"
                }`}
                onClick={toggleMenu}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/waitlist"
              className="mt-4 block rounded-md bg-[#FFC857] px-3 py-2 text-base font-medium text-[#121212] hover:bg-[#FFC857]/90 dark:text-[#1A1A2E]"
              onClick={toggleMenu}
            >
              Join Waitlist
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
