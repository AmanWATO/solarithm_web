"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle } from "lucide-react"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Import the AnimatedPageWrapper
import AnimatedPageWrapper from "@/components/animated-page-wrapper"

// Wrap the content with AnimatedPageWrapper
export default function WaitlistPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    useCase: "",
    submitted: false,
    loading: false,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState((prev) => ({ ...prev, loading: true }))

    // Simulate form submission
    setTimeout(() => {
      setFormState((prev) => ({
        ...prev,
        submitted: true,
        loading: false,
      }))
    }, 1500)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <AnimatedPageWrapper>
        {/* Rest of the content remains the same */}
        {/* Header Section */}
        <section className="bg-gradient-to-br from-amber-600 to-orange-700 px-4 pt-32 pb-20 text-white sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                Be First. <span className="text-amber-200">Be Bright.</span>
              </h1>
              <p className="mt-6 text-xl text-amber-100">
                Join the exclusive early access to Solarithm and illuminate your solar game.
              </p>
            </div>
          </div>
        </section>

        {/* Waitlist Form Section */}
        <section className="bg-white px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Benefits */}
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Early Access Benefits</h2>
                <p className="mt-4 text-lg text-gray-600">
                  Join our waitlist today and enjoy these exclusive perks when Solarithm launches.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    <div className="ml-3">
                      <h3 className="text-lg font-medium text-gray-900">Priority Access</h3>
                      <p className="mt-1 text-gray-600">
                        Be among the first to experience Solarithm's powerful features.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    <div className="ml-3">
                      <h3 className="text-lg font-medium text-gray-900">Early Bird Discount</h3>
                      <p className="mt-1 text-gray-600">
                        Enjoy special pricing available only to our waitlist members.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    <div className="ml-3">
                      <h3 className="text-lg font-medium text-gray-900">Exclusive Beta Features</h3>
                      <p className="mt-1 text-gray-600">
                        Test and provide feedback on new features before they're publicly available.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    <div className="ml-3">
                      <h3 className="text-lg font-medium text-gray-900">Dedicated Support</h3>
                      <p className="mt-1 text-gray-600">
                        Receive personalized onboarding and priority customer support.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 rounded-xl bg-amber-50 p-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <Image
                        src="/placeholder.svg?height=60&width=60"
                        alt="Testimonial"
                        width={60}
                        height={60}
                        className="h-12 w-12 rounded-full"
                      />
                    </div>
                    <div className="ml-4">
                      <p className="text-base italic text-gray-600">
                        "Solarithm's approach to solar intelligence is exactly what our industry has been missing. I
                        can't wait to see how it transforms our business operations."
                      </p>
                      <div className="mt-3">
                        <p className="text-sm font-medium text-gray-900">Sarah Johnson</p>
                        <p className="text-sm text-gray-500">CEO, SunPower Solutions</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Waitlist Form */}
              <div className="rounded-xl bg-white p-8 shadow-lg">
                {formState.submitted ? (
                  <div className="flex flex-col items-center justify-center py-10 text-center">
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="mb-2 text-2xl font-bold text-gray-900">You're on the list!</h3>
                    <p className="text-gray-600">
                      Thank you for joining our waitlist. We'll keep you updated on our progress and notify you when
                      early access becomes available.
                    </p>
                    <div className="mt-8">
                      <Link href="/" className="inline-flex items-center text-amber-600 hover:text-amber-700">
                        Return to homepage
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </div>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-gray-900">Join the Waitlist</h2>
                    <p className="mt-2 text-gray-600">
                      Fill out the form below to secure your spot in line for early access to Solarithm.
                    </p>

                    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                      <div className="grid gap-6 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input
                            id="name"
                            type="text"
                            placeholder="John Doe"
                            required
                            value={formState.name}
                            onChange={(e) => setFormState((prev) => ({ ...prev, name: e.target.value }))}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="john@example.com"
                            required
                            value={formState.email}
                            onChange={(e) => setFormState((prev) => ({ ...prev, email: e.target.value }))}
                          />
                        </div>
                      </div>

                      <div className="grid gap-6 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="company">Company Name</Label>
                          <Input
                            id="company"
                            type="text"
                            placeholder="Solar Solutions Inc."
                            value={formState.company}
                            onChange={(e) => setFormState((prev) => ({ ...prev, company: e.target.value }))}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="role">Your Role</Label>
                          <Input
                            id="role"
                            type="text"
                            placeholder="CEO, Manager, Analyst, etc."
                            value={formState.role}
                            onChange={(e) => setFormState((prev) => ({ ...prev, role: e.target.value }))}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="useCase">I'm interested in using Solarithm for...</Label>
                        <Select
                          value={formState.useCase}
                          onValueChange={(value) => setFormState((prev) => ({ ...prev, useCase: value }))}
                        >
                          <SelectTrigger id="useCase">
                            <SelectValue placeholder="Select your primary use case" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="installation">Solar Installation Planning</SelectItem>
                            <SelectItem value="sales">Sales and Lead Generation</SelectItem>
                            <SelectItem value="investment">Investment Analysis</SelectItem>
                            <SelectItem value="research">Market Research</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="pt-4">
                        <Button
                          type="submit"
                          className="w-full bg-amber-600 text-white hover:bg-amber-700"
                          disabled={formState.loading}
                        >
                          {formState.loading ? "Processing..." : "Join the Waitlist"}
                        </Button>
                      </div>

                      <p className="text-center text-xs text-gray-500">
                        By joining our waitlist, you agree to our{" "}
                        <Link href="/privacy" className="text-amber-600 hover:underline">
                          privacy policy
                        </Link>{" "}
                        and{" "}
                        <Link href="/terms" className="text-amber-600 hover:underline">
                          terms of service
                        </Link>
                        .
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Join the solar revolution</h2>
              <p className="mt-4 text-lg text-gray-600">
                Industry leaders are already excited about what Solarithm will bring to the market.
              </p>
            </div>

            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex items-center justify-center rounded-lg bg-white p-6 shadow-md">
                <div className="h-12 w-32 bg-gray-200"></div>
              </div>
              <div className="flex items-center justify-center rounded-lg bg-white p-6 shadow-md">
                <div className="h-12 w-32 bg-gray-200"></div>
              </div>
              <div className="flex items-center justify-center rounded-lg bg-white p-6 shadow-md">
                <div className="h-12 w-32 bg-gray-200"></div>
              </div>
              <div className="flex items-center justify-center rounded-lg bg-white p-6 shadow-md">
                <div className="h-12 w-32 bg-gray-200"></div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedPageWrapper>
      <Footer />
    </div>
  )
}
