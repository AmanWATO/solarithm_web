import Link from "next/link"
import { ArrowRight } from "lucide-react"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import RoadmapMilestone from "@/components/roadmap-milestone"
import AnimatedPageWrapper from "@/components/animated-page-wrapper"

export default function RoadmapPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <AnimatedPageWrapper>
        {/* Header Section */}
        <section className="bg-gradient-to-br from-amber-50 via-orange-100 to-sky-100 px-4 pt-32 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                Timeline of Brilliance
              </h1>
              <p className="mt-6 text-xl text-gray-700">
                Follow our journey as we build the future of solar market intelligence.
              </p>
            </div>
          </div>
        </section>

        {/* Roadmap Timeline Section */}
        <section className="bg-white px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="relative">
              <div className="absolute left-1/2 h-full w-1 -translate-x-1/2 bg-amber-200"></div>

              <div className="space-y-24">
                <RoadmapMilestone
                  date="May - July 2025"
                  title="MVP Development & Lead Monitoring"
                  description="Development of core platform features and initial data integration. Establishment of early partnerships with solar companies for feedback and testing."
                  features={[
                    "Core platform architecture",
                    "Initial data integration with weather APIs",
                    "Basic mapping functionality",
                    "User interface design and development",
                    "Early partner onboarding",
                  ]}
                  status="In Progress"
                  imageUrl="/placeholder.svg?height=400&width=600"
                />

                <RoadmapMilestone
                  date="August 2025"
                  title="Beta Access Opens"
                  description="Limited beta access for select partners and early adopters. Focus on gathering user feedback and refining the platform based on real-world usage."
                  features={[
                    "Expanded feature set based on MVP feedback",
                    "Enhanced data visualization tools",
                    "Improved ROI calculator accuracy",
                    "Initial API access for partners",
                    "Bug fixes and performance optimizations",
                  ]}
                  status="Upcoming"
                  imageUrl="/placeholder.svg?height=400&width=600"
                />

                <RoadmapMilestone
                  date="September 2025"
                  title="Smart Solar Mapping Demo"
                  description="Public demonstration of our Smart Solar Mapping technology. Showcase of how Solarithm can identify optimal installation zones with unprecedented accuracy."
                  features={[
                    "Full implementation of AI-powered mapping",
                    "Integration with satellite imagery providers",
                    "Advanced shade analysis algorithms",
                    "Local regulation database integration",
                    "Interactive demo for public access",
                  ]}
                  status="Upcoming"
                  imageUrl="/placeholder.svg?height=400&width=600"
                />

                <RoadmapMilestone
                  date="October 2025"
                  title="Pre-Launch Preparations"
                  description="Final refinements based on beta feedback. Scaling of infrastructure to prepare for public launch. Marketing and outreach to build anticipation."
                  features={[
                    "Platform-wide performance optimizations",
                    "Comprehensive security audit",
                    "Documentation and knowledge base creation",
                    "Customer support team training",
                    "Final UI/UX refinements",
                  ]}
                  status="Upcoming"
                  imageUrl="/placeholder.svg?height=400&width=600"
                />

                <RoadmapMilestone
                  date="November 2025"
                  title="Public Launch"
                  description="Official launch of Solarithm to the public. Full feature set available to all users. Beginning of post-launch support and continuous improvement cycle."
                  features={[
                    "Complete platform availability",
                    "All core features fully implemented",
                    "Enterprise support options",
                    "Partner program launch",
                    "Roadmap for future enhancements",
                  ]}
                  status="Upcoming"
                  isHighlighted={true}
                  imageUrl="/placeholder.svg?height=400&width=600"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Future Vision Section */}
        <section className="bg-gray-50 px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Beyond the Horizon</h2>
              <p className="mt-4 text-lg text-gray-600">
                Our vision extends far beyond our initial launch. Here's a glimpse of what's to come in the future of
                Solarithm.
              </p>
            </div>

            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-xl bg-white p-8 shadow-md">
                <div className="mb-4 text-2xl">🔮</div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">AI-Powered Forecasting</h3>
                <p className="text-gray-600">
                  Advanced machine learning algorithms to predict solar performance with unprecedented accuracy.
                </p>
              </div>

              <div className="rounded-xl bg-white p-8 shadow-md">
                <div className="mb-4 text-2xl">🤝</div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Marketplace Integration</h3>
                <p className="text-gray-600">
                  Connect solar providers directly with customers through an integrated marketplace platform.
                </p>
              </div>

              <div className="rounded-xl bg-white p-8 shadow-md">
                <div className="mb-4 text-2xl">🌐</div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Global Expansion</h3>
                <p className="text-gray-600">
                  Extending our platform to support solar markets worldwide with localized data and regulations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-amber-600 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Be part of our journey</h2>
              <p className="mt-4 text-xl text-amber-100">
                Join our waitlist to stay updated on our progress and be among the first to experience Solarithm.
              </p>
              <div className="mt-8">
                <Link
                  href="/waitlist"
                  className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-lg font-medium text-amber-600 transition-all hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-amber-600"
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
