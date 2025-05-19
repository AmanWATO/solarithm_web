import Link from "next/link"
import { ArrowRight, Globe, LineChart, MapPin, Zap } from "lucide-react"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import FeatureShowcase from "@/components/feature-showcase"
// Import the AnimatedPageWrapper
import AnimatedPageWrapper from "@/components/animated-page-wrapper"

// Wrap the content with AnimatedPageWrapper
export default function FeaturesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <AnimatedPageWrapper>
        {/* Rest of the content remains the same */}
        {/* Header Section */}
        <section className="bg-gradient-to-br from-midnight-blue via-midnight-blue/90 to-midnight-blue/80 px-4 pt-32 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-[#FFC857] sm:text-5xl md:text-6xl">
                What powers <span className="text-[#F9F9F9]">Solarithm</span>?
              </h1>
              <p className="mt-6 text-xl text-[#EAEAEA]">
                Discover the innovative features that make Solarithm the leading solar market intelligence platform.
              </p>
            </div>
          </div>
        </section>

        {/* Feature Showcase Sections */}
        <section className="bg-[#F9F9F9] py-24">
          <div className="mx-auto max-w-7xl">
            {/* Smart Solar Zone Mapping */}
            <FeatureShowcase
              title="Smart Solar Zone Mapping"
              description="Our AI-powered geographic analysis identifies optimal installation zones by analyzing satellite imagery, local regulations, and historical weather patterns. Solarithm's mapping technology helps you pinpoint the most profitable locations for solar installations with unprecedented accuracy."
              imageUrl="/placeholder.svg?height=600&width=800"
              icon={<MapPin className="h-10 w-10 text-[#2EC4B6]" />}
              features={[
                "High-resolution satellite imagery analysis",
                "Local zoning and regulation compliance checking",
                "Historical weather pattern integration",
                "Shade analysis throughout the day and seasons",
                "Property boundary identification",
              ]}
              reversed={false}
            />

            {/* ROI & Cost Calculator */}
            <FeatureShowcase
              title="ROI & Cost Calculator"
              description="Make data-driven investment decisions with our comprehensive ROI and cost calculator. Solarithm's financial modeling tools provide precise forecasts of returns, taking into account local incentives, electricity rates, and installation costs to give you the most accurate financial picture possible."
              imageUrl="/placeholder.svg?height=600&width=800"
              icon={<LineChart className="h-10 w-10 text-[#2EC4B6]" />}
              features={[
                "Customizable financial models",
                "Local incentive and rebate integration",
                "Utility rate structure analysis",
                "Maintenance cost projections",
                "Financing option comparisons",
              ]}
              reversed={true}
            />

            {/* IoT Climate Data Integration */}
            <FeatureShowcase
              title="IoT Climate Data Integration"
              description="Leverage real-time weather and climate data from NASA and other sources to predict solar performance with unprecedented accuracy. Our IoT integration connects with on-site sensors and global weather networks to provide the most up-to-date information for your solar projects."
              imageUrl="/placeholder.svg?height=600&width=800"
              icon={<Globe className="h-10 w-10 text-[#2EC4B6]" />}
              features={[
                "Real-time weather data integration",
                "NASA climate data access",
                "On-site sensor compatibility",
                "Historical performance correlation",
                "Predictive maintenance alerts",
              ]}
              reversed={false}
            />

            {/* Lead Generator for Sales Teams */}
            <FeatureShowcase
              title="Lead Generator for Sales Teams"
              description="Convert market insights into qualified leads with our intelligent prospecting tools. Solarithm analyzes property characteristics, energy usage patterns, and demographic data to identify high-potential customers, helping your sales team focus their efforts where they'll have the greatest impact."
              imageUrl="/placeholder.svg?height=600&width=800"
              icon={<Zap className="h-10 w-10 text-[#2EC4B6]" />}
              features={[
                "AI-powered lead scoring",
                "CRM integration capabilities",
                "Demographic and psychographic analysis",
                "Automated follow-up scheduling",
                "Performance tracking and analytics",
              ]}
              reversed={true}
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#1A1A2E] px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-[#FFC857] sm:text-4xl">
                Ready to transform your solar business?
              </h2>
              <p className="mt-4 text-xl text-[#EAEAEA]">
                Join our waitlist to be among the first to experience these powerful features.
              </p>
              <div className="mt-8">
                <Link
                  href="/waitlist"
                  className="inline-flex items-center justify-center rounded-full bg-[#FFC857] px-8 py-3 text-lg font-medium text-[#121212] transition-all hover:bg-[#FFC857]/90 focus:outline-none focus:ring-2 focus:ring-solar-gold focus:ring-offset-2 focus:ring-offset-midnight-blue"
                >
                  Join the Waitlist
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
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
