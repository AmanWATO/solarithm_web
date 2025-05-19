import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Globe, LineChart, MapPin, Zap } from "lucide-react"

import AnimatedHeroBackground from "@/components/animated-hero-background"
import EarlyAccessForm from "@/components/early-access-form"
import FeatureCard from "@/components/feature-card"
import Navbar from "@/components/navbar"
import RoadmapItem from "@/components/roadmap-item"
import BlogCard from "@/components/blog-card"
import Footer from "@/components/footer"
import ScrollReveal from "@/components/scroll-reveal"
// Import the TestimonialCarousel component
import TestimonialCarousel from "@/components/testimonial-carousel"
// Import the AnimatedPageWrapper
import AnimatedPageWrapper from "@/components/animated-page-wrapper"

// Wrap the content with AnimatedPageWrapper
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <AnimatedPageWrapper>
        {/* Rest of the content remains the same */}
        {/* Hero Section */}
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-midnight-blue via-midnight-blue/90 to-midnight-blue/80 dark:from-jet-black dark:via-jet-black/90 dark:to-jet-black/80 px-4 py-24 text-center sm:px-6 lg:px-8">
          <AnimatedHeroBackground />
          <div className="relative z-10 mx-auto max-w-5xl">
            <div className="mb-8 inline-block rounded-full bg-[#1A1A2E]/50 dark:bg-[#121212]/50 px-4 py-1.5 text-sm font-medium text-[#EAEAEA]">
              Launching November 2025
            </div>
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-[#FFC857] sm:text-5xl md:text-6xl">
              Solarithm — <span className="text-[#F9F9F9] dark:text-[#EAEAEA]">Sunlight</span> Meets{" "}
              <span className="text-[#F9F9F9] dark:text-[#EAEAEA]">Strategy</span>
            </h1>
            <p className="mb-10 text-xl text-[#EAEAEA] sm:text-2xl">
              The intelligent solar market platform designed for energy companies, startups, and analysts
            </p>
            <Link
              href="#early-access"
              className="group inline-flex items-center justify-center rounded-full bg-[#FFC857] px-8 py-3 text-lg font-medium text-[#121212] transition-all hover:bg-[#FFC857]/90 focus:outline-none focus:ring-2 focus:ring-solar-gold focus:ring-offset-2 dark:text-[#1A1A2E]"
            >
              Join the Waitlist
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <Link
              href="#about"
              className="flex items-center justify-center rounded-full bg-[#F9F9F9] dark:bg-[#EAEAEA] p-2 shadow-lg"
            >
              <ArrowRight className="h-5 w-5 rotate-90 text-[#FF6B35]" />
            </Link>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-[#F9F9F9] px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-[#FF6B35] sm:text-4xl">About Solarithm</h2>
              <p className="mt-4 text-lg text-[#121212]">
                We're building the next generation of solar intelligence tools to empower the renewable energy
                revolution.
              </p>
            </div>

            <div className="mt-20 grid gap-8 md:grid-cols-2">
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-[#1A1A2E]">Our Mission</h3>
                <p className="mt-4 text-lg text-[#121212]">
                  Solarithm combines cutting-edge data analytics with solar industry expertise to provide actionable
                  insights for businesses. We're on a mission to accelerate solar adoption by making market intelligence
                  accessible, accurate, and actionable.
                </p>
                <div className="mt-8">
                  <h4 className="text-xl font-semibold text-[#1A1A2E]">Who We Serve</h4>
                  <ul className="mt-4 space-y-3">
                    {[
                      "Solar installation companies",
                      "Energy startups",
                      "Market analysts",
                      "Utility companies",
                      "Clean energy investors",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="mr-2 h-5 w-5 text-[#2EC4B6]" />
                        <span className="text-[#121212]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="relative h-[400px] overflow-hidden rounded-xl shadow-xl sm:h-[500px]">
                <Image src="/placeholder.svg?height=500&width=600" alt="Solar panels" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="bg-[#EAEAEA] dark:bg-[#1A1A2E]/50 px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <ScrollReveal>
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-[#FF6B35] sm:text-4xl">Feature Highlights</h2>
                <p className="mt-4 text-lg text-[#121212] dark:text-[#EAEAEA]">
                  Powerful tools designed to transform how you approach solar projects and market analysis.
                </p>
              </div>
            </ScrollReveal>

            <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <FeatureCard
                icon={<MapPin className="h-10 w-10 text-[#2EC4B6]" />}
                title="Smart Solar Zone Mapping"
                description="Identify optimal installation zones with AI-powered geographic analysis and solar potential mapping."
                delay={0.1}
              />
              <FeatureCard
                icon={<LineChart className="h-10 w-10 text-[#2EC4B6]" />}
                title="ROI & Cost Calculator"
                description="Precise financial modeling tools to forecast returns and optimize investment decisions."
                delay={0.2}
              />
              <FeatureCard
                icon={<Globe className="h-10 w-10 text-[#2EC4B6]" />}
                title="IoT Climate Data Integration"
                description="Real-time weather and climate data integration for accurate performance predictions."
                delay={0.3}
              />
              <FeatureCard
                icon={<Zap className="h-10 w-10 text-[#2EC4B6]" />}
                title="Lead Generator for Sales Teams"
                description="Convert market insights into qualified leads with our intelligent prospecting tools."
                delay={0.4}
              />
            </div>
          </div>
        </section>

        {/* Roadmap Section */}
        <section id="roadmap" className="bg-[#F9F9F9] px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-[#FF6B35] sm:text-4xl">Product Roadmap</h2>
              <p className="mt-4 text-lg text-[#121212]">Our journey to revolutionize solar market intelligence.</p>
            </div>

            <div className="relative mt-20">
              <div className="absolute left-1/2 h-full w-1 -translate-x-1/2 bg-[#FFC857]/50"></div>

              <div className="space-y-20">
                <RoadmapItem
                  date="Q1 2025"
                  title="Beta Testing"
                  description="Limited access to core features for select partners and early adopters."
                  isActive={true}
                />
                <RoadmapItem
                  date="Q2 2025"
                  title="Pilot Programs"
                  description="Expanded access with additional features and integration capabilities."
                  isActive={false}
                />
                <RoadmapItem
                  date="Q3 2025"
                  title="Pre-Launch"
                  description="Final refinements based on pilot feedback and performance data."
                  isActive={false}
                />
                <RoadmapItem
                  date="November 2025"
                  title="Full Launch"
                  description="Complete platform release with all features and enterprise support."
                  isActive={false}
                  isHighlighted={true}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="bg-[#EAEAEA] px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-[#FF6B35] sm:text-4xl">Latest Insights</h2>
              <p className="mt-4 text-lg text-[#121212]">
                Explore our latest thoughts on the solar industry and market trends.
              </p>
            </div>

            <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <BlogCard
                title="Why Smart Solar Needs Smarter Data"
                excerpt="The future of solar depends on intelligent data analysis and predictive modeling to maximize efficiency and ROI."
                date="October 15, 2024"
                imageUrl="/placeholder.svg?height=300&width=500"
              />
              <BlogCard
                title="5 Trends Reshaping Solar in 2025"
                excerpt="From AI-powered forecasting to new financing models, these trends are transforming the solar landscape."
                date="September 28, 2024"
                imageUrl="/placeholder.svg?height=300&width=500"
              />
              <BlogCard
                title="The ROI Revolution in Solar Projects"
                excerpt="How new calculation methods and market intelligence are changing investment decisions in solar energy."
                date="September 10, 2024"
                imageUrl="/placeholder.svg?height=300&width=500"
              />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="bg-[#EAEAEA] dark:bg-[#1A1A2E]/50 px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <ScrollReveal>
              <div className="mx-auto max-w-3xl text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight text-[#FF6B35] sm:text-4xl">What Our Users Say</h2>
                <p className="mt-4 text-lg text-[#121212] dark:text-[#EAEAEA]">
                  Hear from solar professionals and businesses using Solarithm across India
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <TestimonialCarousel
                testimonials={[
                  {
                    id: 1,
                    name: "Rajesh Kumar",
                    role: "CEO",
                    company: "SunTech Solutions, Mumbai",
                    image: "/placeholder.svg?height=128&width=128",
                    quote:
                      "Solarithm has transformed how we approach solar installations. The mapping tool alone has increased our efficiency by 40%, allowing us to identify optimal sites quickly and accurately.",
                  },
                  {
                    id: 2,
                    name: "Priya Sharma",
                    role: "Head of Operations",
                    company: "GreenEnergy India, Bengaluru",
                    image: "/placeholder.svg?height=128&width=128",
                    quote:
                      "The ROI calculator has become an essential tool in our sales process. It provides transparent, accurate projections that have significantly improved our conversion rates.",
                  },
                  {
                    id: 3,
                    name: "Vikram Singh",
                    role: "Solar Analyst",
                    company: "SolarVision, Delhi",
                    image: "/placeholder.svg?height=128&width=128",
                    quote:
                      "As an analyst, I need reliable data. Solarithm's integration of NASA climate data with local weather patterns gives me unprecedented accuracy in performance forecasting.",
                  },
                  {
                    id: 4,
                    name: "Ananya Patel",
                    role: "Marketing Director",
                    company: "SunPower India, Chennai",
                    image: "/placeholder.svg?height=128&width=128",
                    quote:
                      "The lead generation tools have revolutionized our marketing strategy. We're now targeting high-potential customers with precision, resulting in a 35% increase in qualified leads.",
                  },
                  {
                    id: 5,
                    name: "Arjun Reddy",
                    role: "Installation Manager",
                    company: "BrightSolar, Hyderabad",
                    image: "/placeholder.svg?height=128&width=128",
                    quote:
                      "The mobile app has been a game-changer for our field teams. Real-time data access and system monitoring capabilities have streamlined our installation and maintenance processes.",
                  },
                ]}
              />
            </ScrollReveal>
          </div>
        </section>

        {/* Early Access Form Section */}
        <section
          id="early-access"
          className="bg-gradient-to-br from-midnight-blue to-midnight-blue/90 px-4 py-24 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-[#FFC857] sm:text-4xl">Get Early Access</h2>
              <p className="mt-4 text-lg text-[#EAEAEA]">
                Join our waitlist to be among the first to experience Solarithm when we launch.
              </p>
            </div>

            <div className="mt-12 rounded-xl bg-[#F9F9F9] p-8 shadow-xl">
              <EarlyAccessForm />
            </div>
          </div>
        </section>
      </AnimatedPageWrapper>
      <Footer />
    </div>
  )
}
