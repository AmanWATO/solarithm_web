"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { MapPin, Mail, Phone } from "lucide-react"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Import the AnimatedPageWrapper
import AnimatedPageWrapper from "@/components/animated-page-wrapper"

// Wrap the content with AnimatedPageWrapper
export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    interest: "",
    message: "",
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
        <section className="bg-gradient-to-br from-amber-50 via-orange-100 to-sky-100 px-4 pt-32 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                Let the Sun Seek You
              </h1>
              <p className="mt-6 text-xl text-gray-700">
                Have questions or want to learn more about Solarithm? We'd love to hear from you.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="bg-white px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Get in Touch</h2>
                <p className="mt-4 text-lg text-gray-600">
                  We're here to answer your questions and discuss how Solarithm can help your business.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <Mail className="h-6 w-6 text-amber-600" />
                    </div>
                    <div className="ml-3 text-base text-gray-600">
                      <p>info@solarithm.com</p>
                      <p className="mt-1">We typically respond within 24-48 hours.</p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0">
                      <Phone className="h-6 w-6 text-amber-600" />
                    </div>
                    <div className="ml-3 text-base text-gray-600">
                      <p>+1 (555) 123-4567</p>
                      <p className="mt-1">Mon-Fri 9am to 5pm PST</p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0">
                      <MapPin className="h-6 w-6 text-amber-600" />
                    </div>
                    <div className="ml-3 text-base text-gray-600">
                      <p>123 Solar Street</p>
                      <p>San Francisco, CA 94103</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg bg-gray-100">
                    <div className="flex h-64 items-center justify-center bg-gray-200 text-gray-400">
                      [Map Placeholder]
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
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
                    <h3 className="mb-2 text-2xl font-bold text-gray-900">Message Received!</h3>
                    <p className="text-gray-600">
                      Thank you for reaching out. We'll get back to you as soon as possible.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
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

                    <div className="space-y-2">
                      <Label htmlFor="interest">I'm interested in...</Label>
                      <Select
                        value={formState.interest}
                        onValueChange={(value) => setFormState((prev) => ({ ...prev, interest: value }))}
                      >
                        <SelectTrigger id="interest">
                          <SelectValue placeholder="Select your interest" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sales">Sales</SelectItem>
                          <SelectItem value="partnership">Partnership</SelectItem>
                          <SelectItem value="investment">Investment</SelectItem>
                          <SelectItem value="media">Media</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="How can we help you?"
                        rows={5}
                        required
                        value={formState.message}
                        onChange={(e) => setFormState((prev) => ({ ...prev, message: e.target.value }))}
                      />
                    </div>

                    <div className="pt-4">
                      <Button
                        type="submit"
                        className="w-full bg-amber-600 text-white hover:bg-amber-700"
                        disabled={formState.loading}
                      >
                        {formState.loading ? "Sending..." : "Send Message"}
                      </Button>
                    </div>

                    <p className="text-center text-xs text-gray-500">
                      By submitting this form, you agree to our{" "}
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
                )}
              </div>
            </div>
          </div>
        </section>
      </AnimatedPageWrapper>
      <Footer />
    </div>
  )
}
