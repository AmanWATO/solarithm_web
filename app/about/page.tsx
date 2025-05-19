import Link from "next/link"
import { ArrowRight } from "lucide-react"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import TeamMember from "@/components/team-member"
// Import the AnimatedPageWrapper
import AnimatedPageWrapper from "@/components/animated-page-wrapper"

// Wrap the content with AnimatedPageWrapper
export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <AnimatedPageWrapper>
        {/* Rest of the content remains the same */}
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-midnight-blue via-midnight-blue/90 to-midnight-blue/80 px-4 pt-32 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-[#FFC857] sm:text-5xl md:text-6xl">
                The Story Behind the Sun
              </h1>
              <p className="mt-6 text-xl text-[#EAEAEA]">
                How Solarithm is transforming solar intelligence from chaos to clarity.
              </p>
            </div>
          </div>
        </section>

        {/* Origin Story Section */}
        <section className="bg-[#F9F9F9] px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight text-[#FFC857] sm:text-4xl">Our Origin</h2>
              <div className="mt-6 space-y-6 text-lg text-[#121212]">
                <p>
                  Solarithm was born from a simple observation: despite the abundance of solar data, the industry lacked
                  the tools to transform this information into actionable intelligence. Our founders, with backgrounds
                  in renewable energy and data science, saw an opportunity to bring order to solar chaos.
                </p>
                <p>
                  What began as a project to help a single solar installation company optimize their site selection
                  process quickly evolved into a comprehensive platform. We realized that by combining advanced data
                  analytics, machine learning, and industry expertise, we could create a tool that would revolutionize
                  how solar companies operate.
                </p>
                <p>
                  Today, Solarithm is poised to become the leading solar market intelligence platform, empowering
                  companies to make data-driven decisions that maximize efficiency, reduce costs, and accelerate the
                  adoption of solar energy worldwide.
                </p>
              </div>

              <div className="mt-12">
                <blockquote className="border-l-4 border-ember-orange pl-4 italic text-[#121212]">
                  "Light is the source of all energy. Our mission is to ensure that this infinite resource is harnessed
                  with infinite intelligence."
                </blockquote>
              </div>
            </div>

            <div className="mt-20">
              <h2 className="text-center text-3xl font-bold tracking-tight text-[#FFC857] sm:text-4xl">Our Vision</h2>
              <p className="mx-auto mt-6 max-w-3xl text-center text-lg text-[#121212]">
                We envision a world where solar energy is the primary power source, made possible through intelligent
                data analysis and strategic implementation. Solarithm is committed to accelerating this transition by
                providing the tools and insights that make solar more accessible, profitable, and impactful.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="bg-[#EAEAEA] px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-[#FFC857] sm:text-4xl">
                The Stewards of Sunlight
              </h2>
              <p className="mt-4 text-lg text-[#121212]">
                Meet the passionate team behind Solarithm's mission to revolutionize solar intelligence.
              </p>
            </div>

            <div className="mt-20 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
              <TeamMember
                name="Alex Rivera"
                role="Founder & CEO"
                bio="Former solar project developer with 15+ years of experience in renewable energy markets."
                imageUrl="/placeholder.svg?height=300&width=300"
              />
              <TeamMember
                name="Dr. Samira Patel"
                role="Chief Data Scientist"
                bio="PhD in Machine Learning with expertise in geospatial analysis and predictive modeling."
                imageUrl="/placeholder.svg?height=300&width=300"
              />
              <TeamMember
                name="Marcus Chen"
                role="CTO"
                bio="Serial tech entrepreneur with previous exits in climate tech and IoT platforms."
                imageUrl="/placeholder.svg?height=300&width=300"
              />
              <TeamMember
                name="Olivia Washington"
                role="Head of Product"
                bio="Former product lead at a major solar manufacturer with deep industry connections."
                imageUrl="/placeholder.svg?height=300&width=300"
              />
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-[#F9F9F9] px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-[#FFC857] sm:text-4xl">Our Values</h2>
              <p className="mt-4 text-lg text-[#121212]">The principles that guide everything we do at Solarithm.</p>
            </div>

            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-xl bg-[#EAEAEA] p-8">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#2EC4B6]/20 text-[#2EC4B6]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold text-[#FF6B35]">Innovation</h3>
                <p className="text-[#121212]">
                  We constantly push the boundaries of what's possible in solar intelligence, never settling for the
                  status quo.
                </p>
              </div>

              <div className="rounded-xl bg-[#EAEAEA] p-8">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#2EC4B6]/20 text-[#2EC4B6]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold text-[#FF6B35]">Integrity</h3>
                <p className="text-[#121212]">
                  We're committed to transparency, accuracy, and ethical practices in all aspects of our business.
                </p>
              </div>

              <div className="rounded-xl bg-[#EAEAEA] p-8">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#2EC4B6]/20 text-[#2EC4B6]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold text-[#FF6B35]">Impact</h3>
                <p className="text-[#121212]">
                  Every feature we build is designed to accelerate the adoption of solar energy and create a more
                  sustainable future.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#1A1A2E] px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-[#FFC857] sm:text-4xl">Join our mission</h2>
              <p className="mt-4 text-xl text-[#EAEAEA]">
                Be part of the solar revolution by joining our waitlist or contacting us for partnership opportunities.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                <Link
                  href="/waitlist"
                  className="inline-flex items-center justify-center rounded-full bg-[#FFC857] px-8 py-3 text-lg font-medium text-[#121212] transition-all hover:bg-[#FFC857]/90 focus:outline-none focus:ring-2 focus:ring-solar-gold focus:ring-offset-2 focus:ring-offset-midnight-blue"
                >
                  Join the Waitlist
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border-2 border-cloud-gray px-8 py-3 text-lg font-medium text-[#EAEAEA] transition-all hover:bg-[#EAEAEA] hover:text-[#1A1A2E] focus:outline-none focus:ring-2 focus:ring-cloud-gray focus:ring-offset-2 focus:ring-offset-midnight-blue"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </AnimatedPageWrapper>
      <Footer />
    </div>
  )
}
