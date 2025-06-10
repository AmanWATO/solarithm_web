import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Globe, LineChart, MapPin, Zap } from "lucide-react"

import CyberBackground from "@/components/cyber-background"
import EarlyAccessForm from "@/components/early-access-form"
import FeatureCard from "@/components/feature-card"
import Navbar from "@/components/navbar"
import RoadmapItem from "@/components/roadmap-item"
import BlogCard from "@/components/blog-card"
import Footer from "@/components/footer"
import ScrollReveal from "@/components/scroll-reveal"
import TestimonialCarousel from "@/components/testimonial-carousel"
import AnimatedPageWrapper from "@/components/animated-page-wrapper"
import ModernHeroSection from "@/components/modern-hero-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col relative">
      <CyberBackground />
      <Navbar />
      <AnimatedPageWrapper>
        {/* Modern Hero Section */}
        <ModernHeroSection />

        {/* About Section */}
        <section 
          id="about" 
          className="relative px-4 py-24 sm:px-6 lg:px-8"
          style={{
            background: "linear-gradient(135deg, #0A0A0F 0%, #1A1A2E 50%, #2D2D44 100%)"
          }}
        >
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: "linear-gradient(rgba(0, 102, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 102, 255, 0.1) 1px, transparent 1px)",
              backgroundSize: "50px 50px"
            }}
          />
          <div className="relative mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <ScrollReveal>
                <h2 
                  className="text-3xl font-bold tracking-tight sm:text-4xl"
                  style={{
                    background: "linear-gradient(to right, #0066FF, #00FF88)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text"
                  }}
                >
                  About Solarithm
                </h2>
                <p 
                  className="mt-4 text-lg"
                  style={{ color: "rgba(248, 250, 252, 0.8)" }}
                >
                  We're building the next generation of solar intelligence tools to empower the renewable energy
                  revolution.
                </p>
              </ScrollReveal>
            </div>

            <div className="mt-20 grid gap-8 md:grid-cols-2">
              <ScrollReveal direction="left">
                <div className="flex flex-col justify-center">
                  <h3 className="text-2xl font-bold" style={{ color: "#0066FF" }}>Our Mission</h3>
                  <p 
                    className="mt-4 text-lg"
                    style={{ color: "rgba(248, 250, 252, 0.8)" }}
                  >
                    Solarithm combines cutting-edge data analytics with solar industry expertise to provide actionable
                    insights for businesses. We're on a mission to accelerate solar adoption by making market intelligence
                    accessible, accurate, and actionable.
                  </p>
                  <div className="mt-8">
                    <h4 className="text-xl font-semibold" style={{ color: "#00FF88" }}>Who We Serve</h4>
                    <ul className="mt-4 space-y-3">
                      {[
                        "Solar installation companies",
                        "Energy startups",
                        "Market analysts",
                        "Utility companies",
                        "Clean energy investors",
                      ].map((item, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="mr-2 h-5 w-5" style={{ color: "#00FF88" }} />
                          <span style={{ color: "rgba(248, 250, 252, 0.8)" }}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal direction="right">
                <div 
                  className="relative h-[400px] overflow-hidden rounded-xl shadow-xl sm:h-[500px]"
                  style={{
                    backgroundColor: "rgba(248, 250, 252, 0.1)",
                    backdropFilter: "blur(10px)"
                  }}
                >
                  <Image 
                    src="https://images.pexels.com/photos/9875414/pexels-photo-9875414.jpeg" 
                    alt="Solar panels with futuristic overlay" 
                    fill 
                    className="object-cover" 
                  />
                  <div 
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(to top, rgba(0, 102, 255, 0.2), transparent)"
                    }}
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section 
          id="features" 
          className="relative px-4 py-24 sm:px-6 lg:px-8"
          style={{
            background: "linear-gradient(135deg, #2D2D44 0%, #1A1A2E 50%, #0A0A0F 100%)"
          }}
        >
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              background: "radial-gradient(circle at 25% 25%, rgba(0, 255, 136, 0.2) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.2) 0%, transparent 50%)"
            }}
          />
          <div className="relative mx-auto max-w-7xl">
            <ScrollReveal>
              <div className="mx-auto max-w-3xl text-center">
                <h2 
                  className="text-3xl font-bold tracking-tight sm:text-4xl"
                  style={{
                    background: "linear-gradient(to right, #00FF88, #8B5CF6)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text"
                  }}
                >
                  Feature Highlights
                </h2>
                <p 
                  className="mt-4 text-lg"
                  style={{ color: "rgba(248, 250, 252, 0.8)" }}
                >
                  Powerful tools designed to transform how you approach solar projects and market analysis.
                </p>
              </div>
            </ScrollReveal>

            <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <FeatureCard
                icon={<MapPin className="h-10 w-10" style={{ color: "#00FF88" }} />}
                title="Smart Solar Zone Mapping"
                description="Identify optimal installation zones with AI-powered geographic analysis and solar potential mapping."
                delay={0.1}
              />
              <FeatureCard
                icon={<LineChart className="h-10 w-10" style={{ color: "#0066FF" }} />}
                title="ROI & Cost Calculator"
                description="Precise financial modeling tools to forecast returns and optimize investment decisions."
                delay={0.2}
              />
              <FeatureCard
                icon={<Globe className="h-10 w-10" style={{ color: "#8B5CF6" }} />}
                title="IoT Climate Data Integration"
                description="Real-time weather and climate data integration for accurate performance predictions."
                delay={0.3}
              />
              <FeatureCard
                icon={<Zap className="h-10 w-10" style={{ color: "#FF6B35" }} />}
                title="Lead Generator for Sales Teams"
                description="Convert market insights into qualified leads with our intelligent prospecting tools."
                delay={0.4}
              />
            </div>
          </div>
        </section>

        {/* Roadmap Section */}
        <section 
          id="roadmap" 
          className="relative px-4 py-24 sm:px-6 lg:px-8"
          style={{
            background: "linear-gradient(135deg, #0A0A0F 0%, #1A1A2E 100%)"
          }}
        >
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: "linear-gradient(rgba(0, 102, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 102, 255, 0.1) 1px, transparent 1px)",
              backgroundSize: "50px 50px"
            }}
          />
          <div className="relative mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <ScrollReveal>
                <h2 
                  className="text-3xl font-bold tracking-tight sm:text-4xl"
                  style={{
                    background: "linear-gradient(to right, #FFD700, #FF6B35)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text"
                  }}
                >
                  Product Roadmap
                </h2>
                <p 
                  className="mt-4 text-lg"
                  style={{ color: "rgba(248, 250, 252, 0.8)" }}
                >
                  Our journey to revolutionize solar market intelligence.
                </p>
              </ScrollReveal>
            </div>

            <div className="relative mt-20">
              <div 
                className="absolute left-1/2 h-full w-1 -translate-x-1/2 opacity-50"
                style={{
                  background: "linear-gradient(to bottom, #0066FF, #00FF88, #8B5CF6)"
                }}
              ></div>

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
        <section 
          id="blog" 
          className="relative px-4 py-24 sm:px-6 lg:px-8"
          style={{
            background: "linear-gradient(135deg, #1A1A2E 0%, #2D2D44 100%)"
          }}
        >
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              background: "radial-gradient(circle at 25% 25%, rgba(0, 255, 136, 0.2) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.2) 0%, transparent 50%)"
            }}
          />
          <div className="relative mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <ScrollReveal>
                <h2 
                  className="text-3xl font-bold tracking-tight sm:text-4xl"
                  style={{
                    background: "linear-gradient(to right, #8B5CF6, #0066FF)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text"
                  }}
                >
                  Latest Insights
                </h2>
                <p 
                  className="mt-4 text-lg"
                  style={{ color: "rgba(248, 250, 252, 0.8)" }}
                >
                  Explore our latest thoughts on the solar industry and market trends.
                </p>
              </ScrollReveal>
            </div>

            <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <ScrollReveal delay={0.1}>
                <BlogCard
                  title="Why Smart Solar Needs Smarter Data"
                  excerpt="The future of solar depends on intelligent data analysis and predictive modeling to maximize efficiency and ROI."
                  date="October 15, 2024"
                  imageUrl="https://images.pexels.com/photos/9875414/pexels-photo-9875414.jpeg"
                />
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <BlogCard
                  title="5 Trends Reshaping Solar in 2025"
                  excerpt="From AI-powered forecasting to new financing models, these trends are transforming the solar landscape."
                  date="September 28, 2024"
                  imageUrl="https://images.pexels.com/photos/9875414/pexels-photo-9875414.jpeg"
                />
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <BlogCard
                  title="The ROI Revolution in Solar Projects"
                  excerpt="How new calculation methods and market intelligence are changing investment decisions in solar energy."
                  date="September 10, 2024"
                  imageUrl="https://images.pexels.com/photos/9875414/pexels-photo-9875414.jpeg"
                />
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section 
          id="testimonials" 
          className="relative px-4 py-24 sm:px-6 lg:px-8"
          style={{
            background: "linear-gradient(135deg, #2D2D44 0%, #0A0A0F 100%)"
          }}
        >
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: "linear-gradient(rgba(0, 102, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 102, 255, 0.1) 1px, transparent 1px)",
              backgroundSize: "50px 50px"
            }}
          />
          <div className="relative mx-auto max-w-7xl">
            <ScrollReveal>
              <div className="mx-auto max-w-3xl text-center mb-12">
                <h2 
                  className="text-3xl font-bold tracking-tight sm:text-4xl"
                  style={{
                    background: "linear-gradient(to right, #00FF88, #FFD700)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text"
                  }}
                >
                  What Our Users Say
                </h2>
                <p 
                  className="mt-4 text-lg"
                  style={{ color: "rgba(248, 250, 252, 0.8)" }}
                >
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
                    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
                    quote:
                      "Solarithm has transformed how we approach solar installations. The mapping tool alone has increased our efficiency by 40%, allowing us to identify optimal sites quickly and accurately.",
                  },
                  {
                    id: 2,
                    name: "Priya Sharma",
                    role: "Head of Operations",
                    company: "GreenEnergy India, Bengaluru",
                    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
                    quote:
                      "The ROI calculator has become an essential tool in our sales process. It provides transparent, accurate projections that have significantly improved our conversion rates.",
                  },
                  {
                    id: 3,
                    name: "Vikram Singh",
                    role: "Solar Analyst",
                    company: "SolarVision, Delhi",
                    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
                    quote:
                      "As an analyst, I need reliable data. Solarithm's integration of NASA climate data with local weather patterns gives me unprecedented accuracy in performance forecasting.",
                  },
                  {
                    id: 4,
                    name: "Ananya Patel",
                    role: "Marketing Director",
                    company: "SunPower India, Chennai",
                    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
                    quote:
                      "The lead generation tools have revolutionized our marketing strategy. We're now targeting high-potential customers with precision, resulting in a 35% increase in qualified leads.",
                  },
                  {
                    id: 5,
                    name: "Arjun Reddy",
                    role: "Installation Manager",
                    company: "BrightSolar, Hyderabad",
                    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
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
          className="relative px-4 py-24 sm:px-6 lg:px-8"
          style={{
            background: "linear-gradient(135deg, #0A0A0F 0%, #1A1A2E 50%, #2D2D44 100%)"
          }}
        >
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              background: "radial-gradient(circle at 25% 25%, rgba(0, 255, 136, 0.2) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.2) 0%, transparent 50%)"
            }}
          />
          <div className="relative mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <ScrollReveal>
                <h2 
                  className="text-3xl font-bold tracking-tight sm:text-4xl"
                  style={{
                    background: "linear-gradient(to right, #0066FF, #00FF88)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text"
                  }}
                >
                  Get Early Access
                </h2>
                <p 
                  className="mt-4 text-lg"
                  style={{ color: "rgba(248, 250, 252, 0.8)" }}
                >
                  Join our waitlist to be among the first to experience Solarithm when we launch.
                </p>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.2}>
              <div 
                className="mt-12 rounded-xl p-8 shadow-xl border"
                style={{
                  backgroundColor: "rgba(248, 250, 252, 0.1)",
                  backdropFilter: "blur(10px)",
                  borderColor: "rgba(0, 102, 255, 0.2)"
                }}
              >
                <EarlyAccessForm />
              </div>
            </ScrollReveal>
          </div>
        </section>
      </AnimatedPageWrapper>
      <Footer />
    </div>
  )
}