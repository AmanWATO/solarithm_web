"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function EarlyAccessForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    interest: "",
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

  if (formState.submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#2EC4B6]/20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-[#2EC4B6]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mb-2 text-2xl font-bold text-[#121212]">Thank You!</h3>
        <p className="text-[#121212]">
          We've added you to our waitlist. We'll be in touch when Solarithm is ready for early access.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-[#121212]">
            Full Name
          </Label>
          <Input
            id="name"
            type="text"
            placeholder="John Doe"
            required
            value={formState.name}
            onChange={(e) => setFormState((prev) => ({ ...prev, name: e.target.value }))}
            className="border-cloud-gray bg-[#F9F9F9] text-[#121212]"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-[#121212]">
            Email Address
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="john@example.com"
            required
            value={formState.email}
            onChange={(e) => setFormState((prev) => ({ ...prev, email: e.target.value }))}
            className="border-cloud-gray bg-[#F9F9F9] text-[#121212]"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="interest" className="text-[#121212]">
          I'm interested in...
        </Label>
        <Select
          value={formState.interest}
          onValueChange={(value) => setFormState((prev) => ({ ...prev, interest: value }))}
        >
          <SelectTrigger id="interest" className="border-cloud-gray bg-[#F9F9F9] text-[#121212]">
            <SelectValue placeholder="Select your interest" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="sales">Sales & Marketing Tools</SelectItem>
            <SelectItem value="investment">Investment & ROI Analysis</SelectItem>
            <SelectItem value="testing">Beta Testing</SelectItem>
            <SelectItem value="partnership">Partnership Opportunities</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="pt-4">
        <Button
          type="submit"
          className="w-full bg-[#FFC857] text-[#121212] hover:bg-[#FFC857]/90"
          disabled={formState.loading}
        >
          {formState.loading ? "Processing..." : "Join the Waitlist"}
        </Button>
      </div>

      <p className="text-center text-xs text-[#121212]/70">
        By submitting this form, you agree to our privacy policy and terms of service.
      </p>
    </form>
  )
}
