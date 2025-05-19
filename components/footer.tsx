import Link from "next/link"
import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#1A1A2E] px-4 py-12 text-[#EAEAEA] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold text-[#FFC857]">Solarithm</h3>
            <p className="mb-4 text-sm">
              The intelligent solar market platform designed for energy companies, startups, and analysts.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-[#EAEAEA] transition-colors hover:text-[#F9F9F9]">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-[#EAEAEA] transition-colors hover:text-[#F9F9F9]">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-[#EAEAEA] transition-colors hover:text-[#F9F9F9]">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-[#EAEAEA] transition-colors hover:text-[#F9F9F9]">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-[#EAEAEA] transition-colors hover:text-[#F9F9F9]">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-[#FFC857]">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="transition-colors hover:text-[#FF6B35]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="transition-colors hover:text-[#FF6B35]">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/solar-map" className="transition-colors hover:text-[#FF6B35]">
                  Solar Map
                </Link>
              </li>
              <li>
                <Link href="/calculator" className="transition-colors hover:text-[#FF6B35]">
                  Calculator
                </Link>
              </li>
              <li>
                <Link href="/roadmap" className="transition-colors hover:text-[#FF6B35]">
                  Roadmap
                </Link>
              </li>
              <li>
                <Link href="/blog" className="transition-colors hover:text-[#FF6B35]">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/waitlist" className="transition-colors hover:text-[#FF6B35]">
                  Join Waitlist
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-[#FFC857]">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="transition-colors hover:text-[#FF6B35]">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="transition-colors hover:text-[#FF6B35]">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-[#FF6B35]">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-[#FF6B35]">
                  GDPR
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-[#FFC857]">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="mailto:info@solarithm.com" className="transition-colors hover:text-[#FF6B35]">
                  info@solarithm.com
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-[#FF6B35]">
                  Koramangala, Bengaluru, Karnataka 560034, India
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-midnight-blue/50 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Solarithm. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
