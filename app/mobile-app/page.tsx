"use client"

import type React from "react"

import { useState } from "react"
import {
  ArrowRight,
  Download,
  Home,
  LineChart,
  MapPin,
  Settings,
  Sun,
  Zap,
  IndianRupee,
  ZoomIn,
  ZoomOut,
  Bell,
} from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"
import ScrollReveal from "@/components/scroll-reveal"

export default function MobileAppPage() {
  const [activeScreen, setActiveScreen] = useState("dashboard")

  // Mock app screens
  const screens = {
    dashboard: {
      title: "Dashboard",
      icon: <Home className="h-5 w-5" />,
      content: (
        <div className="space-y-4 p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold">Hello, Rahul</h3>
            <div className="rounded-full bg-amber-100 p-1">
              <Sun className="h-5 w-5 text-amber-600" />
            </div>
          </div>

          <div className="rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 p-4 text-white">
            <div className="flex justify-between">
              <div>
                <p className="text-xs opacity-80">Today's Production</p>
                <p className="text-2xl font-bold">12.4 kWh</p>
              </div>
              <div>
                <LineChart className="h-12 w-12 opacity-50" />
              </div>
            </div>
            <div className="mt-2 h-1 w-full rounded-full bg-white/20">
              <div className="h-1 w-3/4 rounded-full bg-white"></div>
            </div>
            <div className="mt-1 flex justify-between text-xs">
              <span>0 kWh</span>
              <span>Target: 16.5 kWh</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-gray-100 p-3">
              <div className="flex items-center space-x-2">
                <div className="rounded-full bg-green-100 p-1">
                  <IndianRupee className="h-4 w-4 text-green-600" />
                </div>
                <span className="text-xs text-gray-500">Savings</span>
              </div>
              <p className="mt-1 text-lg font-bold">₹245</p>
              <p className="text-xs text-green-600">+12% vs yesterday</p>
            </div>

            <div className="rounded-xl bg-gray-100 p-3">
              <div className="flex items-center space-x-2">
                <div className="rounded-full bg-blue-100 p-1">
                  <Zap className="h-4 w-4 text-blue-600" />
                </div>
                <span className="text-xs text-gray-500">Efficiency</span>
              </div>
              <p className="mt-1 text-lg font-bold">92%</p>
              <p className="text-xs text-green-600">+3% vs yesterday</p>
            </div>
          </div>

          <div className="rounded-xl bg-gray-100 p-4">
            <h4 className="text-sm font-medium">Production Forecast</h4>
            <div className="mt-3 space-y-2">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, i) => (
                <div key={day} className="flex items-center">
                  <span className="w-8 text-xs text-gray-500">{day}</span>
                  <div className="ml-2 flex-1">
                    <div className="h-2 w-full rounded-full bg-gray-200">
                      <div
                        className="h-2 rounded-full bg-amber-500"
                        style={{ width: `${[75, 65, 80, 90, 70, 60, 85][i]}%` }}
                      ></div>
                    </div>
                  </div>
                  <span className="ml-2 text-xs">{[15, 13, 16, 18, 14, 12, 17][i]} kWh</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl bg-gray-100 p-4">
            <h4 className="text-sm font-medium">System Health</h4>
            <div className="mt-3 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <span className="text-sm">All systems operational</span>
              </div>
              <Button variant="ghost" size="sm" className="h-8 text-xs">
                Details
              </Button>
            </div>
          </div>
        </div>
      ),
    },
    analytics: {
      title: "Analytics",
      icon: <LineChart className="h-5 w-5" />,
      content: (
        <div className="space-y-4 p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold">Performance Analytics</h3>
            <Button variant="ghost" size="sm" className="h-8">
              <Download className="h-4 w-4" />
            </Button>
          </div>

          <div className="rounded-xl bg-gray-100 p-4">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-medium">Monthly Production</h4>
              <select className="rounded-md border-gray-200 bg-white text-xs">
                <option>Last 30 days</option>
                <option>Last 90 days</option>
                <option>Last year</option>
              </select>
            </div>
            <div className="mt-4 h-40 bg-white">
              <div className="flex h-full items-center justify-center">
                <p className="text-sm text-gray-400">Chart visualization</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-gray-100 p-3">
              <span className="text-xs text-gray-500">Total Production</span>
              <p className="mt-1 text-lg font-bold">342 kWh</p>
              <p className="text-xs text-green-600">+8% vs last month</p>
            </div>

            <div className="rounded-xl bg-gray-100 p-3">
              <span className="text-xs text-gray-500">Peak Production</span>
              <p className="mt-1 text-lg font-bold">24.6 kWh</p>
              <p className="text-xs text-green-600">May 15, 2024</p>
            </div>
          </div>

          <div className="rounded-xl bg-gray-100 p-4">
            <h4 className="text-sm font-medium">Performance Metrics</h4>
            <div className="mt-3 space-y-3">
              <div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-500">System Efficiency</span>
                  <span className="font-medium">92%</span>
                </div>
                <div className="mt-1 h-1.5 w-full rounded-full bg-gray-200">
                  <div className="h-1.5 w-[92%] rounded-full bg-green-500"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-500">Energy Utilization</span>
                  <span className="font-medium">78%</span>
                </div>
                <div className="mt-1 h-1.5 w-full rounded-full bg-gray-200">
                  <div className="h-1.5 w-[78%] rounded-full bg-blue-500"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-500">Grid Independence</span>
                  <span className="font-medium">65%</span>
                </div>
                <div className="mt-1 h-1.5 w-full rounded-full bg-gray-200">
                  <div className="h-1.5 w-[65%] rounded-full bg-amber-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    map: {
      title: "Solar Map",
      icon: <MapPin className="h-5 w-5" />,
      content: (
        <div className="space-y-4 p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold">Solar Map</h3>
            <Button variant="ghost" size="sm" className="h-8">
              <Settings className="h-4 w-4" />
            </Button>
          </div>

          <div className="relative h-64 rounded-xl bg-gray-200">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/placeholder.svg?height=400&width=300&text=India+Map')" }}
            ></div>
            <div className="absolute left-[40%] top-[30%]">
              <div className="relative">
                <MapPin className="h-6 w-6 text-red-500" />
                <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-white flex items-center justify-center">
                  <Sun className="h-2 w-2 text-amber-500" />
                </div>
              </div>
            </div>
            <div className="absolute right-3 top-3 rounded-lg bg-white/80 p-2 backdrop-blur-sm">
              <div className="flex flex-col gap-1">
                <button className="rounded-md bg-gray-100 p-1">
                  <ZoomIn className="h-4 w-4" />
                </button>
                <button className="rounded-md bg-gray-100 p-1">
                  <ZoomOut className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-gray-100 p-4">
            <h4 className="text-sm font-medium">Your Installation</h4>
            <div className="mt-2">
              <p className="text-sm">Bengaluru, Karnataka</p>
              <div className="mt-1 flex items-center">
                <Sun className="h-4 w-4 text-amber-500 mr-1" />
                <span className="text-xs text-gray-500">Solar Potential: 75%</span>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-gray-100 p-4">
            <h4 className="text-sm font-medium">Nearby Installations</h4>
            <div className="mt-3 space-y-3">
              {[
                { name: "Koramangala Community Solar", distance: "1.2 km", potential: 74 },
                { name: "HSR Layout Residential", distance: "3.5 km", potential: 76 },
                { name: "Electronic City Campus", distance: "8.7 km", potential: 73 },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">{item.name}</p>
                    <p className="text-xs text-gray-500">{item.distance} away</p>
                  </div>
                  <div className="flex items-center">
                    <span className="text-xs font-medium mr-1">{item.potential}%</span>
                    <Sun className="h-4 w-4 text-amber-500" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    settings: {
      title: "Settings",
      icon: <Settings className="h-5 w-5" />,
      content: (
        <div className="space-y-4 p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold">Settings</h3>
          </div>

          <div className="rounded-xl bg-gray-100 p-4">
            <div className="flex items-center">
              <div className="h-12 w-12 rounded-full bg-gray-300"></div>
              <div className="ml-3">
                <p className="font-medium">Rahul Sharma</p>
                <p className="text-xs text-gray-500">rahul.s@example.com</p>
              </div>
            </div>
            <Button variant="outline" size="sm" className="mt-3 w-full text-xs">
              Edit Profile
            </Button>
          </div>

          <div className="rounded-xl bg-gray-100 p-4">
            <h4 className="text-sm font-medium">System Settings</h4>
            <div className="mt-3 space-y-3">
              {["Notifications", "Connected Devices", "Data Sharing", "Privacy", "Alerts & Thresholds"].map(
                (item, i) => (
                  <div key={i} className="flex items-center justify-between border-b border-gray-200 pb-2">
                    <span className="text-sm">{item}</span>
                    <ArrowRight className="h-4 w-4 text-gray-400" />
                  </div>
                ),
              )}
            </div>
          </div>

          <div className="rounded-xl bg-gray-100 p-4">
            <h4 className="text-sm font-medium">App Settings</h4>
            <div className="mt-3 space-y-3">
              {["Dark Mode", "Language", "Units (Metric/Imperial)", "Data Usage"].map((item, i) => (
                <div key={i} className="flex items-center justify-between border-b border-gray-200 pb-2">
                  <span className="text-sm">{item}</span>
                  {i === 0 ? (
                    <div className="h-5 w-9 rounded-full bg-gray-300 px-0.5 flex items-center">
                      <div className="h-4 w-4 rounded-full bg-white"></div>
                    </div>
                  ) : (
                    <ArrowRight className="h-4 w-4 text-gray-400" />
                  )}
                </div>
              ))}
            </div>
          </div>

          <Button variant="outline" className="w-full text-red-500 hover:text-red-600 hover:bg-red-50">
            Log Out
          </Button>
        </div>
      ),
    },
  }

  // Custom component for the phone frame
  const PhoneFrame = ({ children }: { children: React.ReactNode }) => (
    <div className="relative mx-auto w-[280px] h-[580px] rounded-[3rem] border-[14px] border-gray-900 overflow-hidden shadow-xl">
      <div className="absolute top-0 inset-x-0 h-6 bg-gray-900 z-10">
        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-16 h-1 bg-gray-800 rounded-full"></div>
      </div>
      <div className="absolute bottom-2 inset-x-0 h-1 bg-gray-900 z-10"></div>
      <div className="relative h-full w-full bg-white overflow-hidden">{children}</div>
    </div>
  )

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Header Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-br from-amber-50 via-orange-100 to-sky-100 px-4 pt-32 pb-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              Solarithm Mobile App
            </h1>
            <p className="mt-6 text-xl text-gray-700">
              Monitor and manage your solar installation from anywhere, anytime
            </p>
          </div>
        </div>
      </motion.section>

      {/* App Showcase Section */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Phone Preview */}
            <ScrollReveal>
              <div className="flex justify-center">
                <PhoneFrame>
                  <div className="h-full w-full bg-white">
                    <div className="h-full flex flex-col">
                      {/* App Content */}
                      <div className="flex-1 overflow-auto">
                        {screens[activeScreen as keyof typeof screens].content}
                      </div>

                      {/* Bottom Navigation */}
                      <div className="h-16 border-t border-gray-200 flex items-center justify-around px-2">
                        {Object.entries(screens).map(([key, screen]) => (
                          <button
                            key={key}
                            className={`flex flex-col items-center justify-center h-full w-16 ${
                              activeScreen === key ? "text-amber-600" : "text-gray-400"
                            }`}
                            onClick={() => setActiveScreen(key)}
                          >
                            {screen.icon}
                            <span className="text-[10px] mt-1">{screen.title}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </PhoneFrame>
              </div>
            </ScrollReveal>

            {/* App Features */}
            <ScrollReveal delay={0.2}>
              <div className="flex flex-col justify-center h-full">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Solar Power in Your Pocket</h2>
                <p className="text-lg text-gray-600 mb-8">
                  The Solarithm mobile app gives you complete control over your solar installation, with real-time
                  monitoring, analytics, and insights to maximize your solar investment.
                </p>

                <div className="space-y-6">
                  <div className="flex">
                    <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-md bg-amber-100 text-amber-600">
                      <Zap className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">Real-time Monitoring</h3>
                      <p className="mt-2 text-gray-600">
                        Track your system's performance in real-time with detailed insights into energy production,
                        consumption, and savings.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-md bg-amber-100 text-amber-600">
                      <LineChart className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">Advanced Analytics</h3>
                      <p className="mt-2 text-gray-600">
                        Gain deeper insights with comprehensive analytics, performance metrics, and historical data
                        comparison.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-md bg-amber-100 text-amber-600">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">Solar Mapping</h3>
                      <p className="mt-2 text-gray-600">
                        Visualize your installation on an interactive map and compare performance with nearby systems.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-md bg-amber-100 text-amber-600">
                      <Bell className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">Smart Alerts</h3>
                      <p className="mt-2 text-gray-600">
                        Receive instant notifications about system performance, maintenance needs, and optimization
                        opportunities.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <Button className="bg-black text-white hover:bg-gray-800 flex items-center justify-center gap-2">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <path d="M17.5,12.5c0-0.9,0.5-1.7,1.3-2.2c-0.5-0.7-1.2-1.3-2.1-1.6c-0.9-0.3-1.7-0.4-2.5-0.2c-1.1,0.2-1.9,0.7-2.2,0.7 c-0.4,0-1.1-0.5-2.1-0.5c-1.1,0-2.1,0.6-2.7,1.5c-1.2,2-0.3,5,0.8,6.6c0.6,0.8,1.2,1.7,2.1,1.7c0.8,0,1.2-0.5,2.2-0.5 c0.9,0,1.3,0.5,2.2,0.5c0.9,0,1.5-0.8,2.1-1.6c0.4-0.6,0.8-1.3,1-2C18.2,14.4,17.5,13.5,17.5,12.5z M15.2,7.2 c0.5-0.6,0.8-1.4,0.7-2.2c-0.7,0.1-1.4,0.4-1.9,1c-0.5,0.5-0.8,1.3-0.7,2.1C14,8.1,14.7,7.8,15.2,7.2z" />
                    </svg>
                    App Store
                  </Button>
                  <Button className="bg-black text-white hover:bg-gray-800 flex items-center justify-center gap-2">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <path d="M3.5,20.5c0.2,0.3,0.5,0.5,0.8,0.5h0c0.1,0,0.3,0,0.4-0.1l8.5-4.4l-2.1-2.1L3.5,20.5z M13.6,15.7l2.1-2.1L5.2,3.1 c-0.1-0.1-0.3-0.1-0.4-0.1c-0.3,0-0.6,0.2-0.8,0.5L13.6,15.7z M14.4,10.5L21.5,7c0.4-0.2,0.6-0.7,0.4-1.1c-0.1-0.1-0.2-0.2-0.3-0.3 l-7.1-3.5l-2.1,2.1L14.4,10.5z M14.4,13.5l2.1,2.1l1.9-1l-2.1-2.1L14.4,13.5z" />
                    </svg>
                    Google Play
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* App Features Section */}
      <section className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Key App Features</h2>
              <p className="mt-4 text-lg text-gray-600">
                Explore the powerful features that make the Solarithm app essential for solar system owners
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-12">
            <Tabs defaultValue="dashboard" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                <TabsTrigger value="map">Solar Map</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>

              {Object.entries(screens).map(([key, screen]) => (
                <TabsContent key={key} value={key} className="mt-6">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="grid md:grid-cols-2 gap-6 items-center">
                        <div>
                          <h3 className="text-xl font-bold mb-4 flex items-center">
                            {screen.icon}
                            <span className="ml-2">{screen.title}</span>
                          </h3>

                          {key === "dashboard" && (
                            <div className="space-y-4">
                              <p>
                                The dashboard provides a quick overview of your solar system's performance at a glance.
                              </p>
                              <ul className="space-y-2">
                                <li className="flex items-start">
                                  <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-amber-600"></div>
                                  <span>Real-time energy production monitoring</span>
                                </li>
                                <li className="flex items-start">
                                  <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-amber-600"></div>
                                  <span>Daily savings and efficiency metrics</span>
                                </li>
                                <li className="flex items-start">
                                  <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-amber-600"></div>
                                  <span>Weather-based production forecasts</span>
                                </li>
                                <li className="flex items-start">
                                  <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-amber-600"></div>
                                  <span>System health status and alerts</span>
                                </li>
                              </ul>
                            </div>
                          )}

                          {key === "analytics" && (
                            <div className="space-y-4">
                              <p>Dive deep into your system's performance with comprehensive analytics and insights.</p>
                              <ul className="space-y-2">
                                <li className="flex items-start">
                                  <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-amber-600"></div>
                                  <span>Historical production data visualization</span>
                                </li>
                                <li className="flex items-start">
                                  <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-amber-600"></div>
                                  <span>Performance comparison across time periods</span>
                                </li>
                                <li className="flex items-start">
                                  <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-amber-600"></div>
                                  <span>Efficiency metrics and optimization suggestions</span>
                                </li>
                                <li className="flex items-start">
                                  <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-amber-600"></div>
                                  <span>Exportable reports for financial tracking</span>
                                </li>
                              </ul>
                            </div>
                          )}

                          {key === "map" && (
                            <div className="space-y-4">
                              <p>Visualize your solar installation and compare with others in your region.</p>
                              <ul className="space-y-2">
                                <li className="flex items-start">
                                  <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-amber-600"></div>
                                  <span>Interactive map of your installation</span>
                                </li>
                                <li className="flex items-start">
                                  <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-amber-600"></div>
                                  <span>Solar potential analysis by location</span>
                                </li>
                                <li className="flex items-start">
                                  <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-amber-600"></div>
                                  <span>Nearby installation performance comparison</span>
                                </li>
                                <li className="flex items-start">
                                  <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-amber-600"></div>
                                  <span>Regional solar irradiance data</span>
                                </li>
                              </ul>
                            </div>
                          )}

                          {key === "settings" && (
                            <div className="space-y-4">
                              <p>Customize your app experience and manage your profile and system settings.</p>
                              <ul className="space-y-2">
                                <li className="flex items-start">
                                  <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-amber-600"></div>
                                  <span>User profile management</span>
                                </li>
                                <li className="flex items-start">
                                  <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-amber-600"></div>
                                  <span>Notification preferences</span>
                                </li>
                                <li className="flex items-start">
                                  <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-amber-600"></div>
                                  <span>Connected devices configuration</span>
                                </li>
                                <li className="flex items-start">
                                  <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-amber-600"></div>
                                  <span>App appearance and language settings</span>
                                </li>
                              </ul>
                            </div>
                          )}
                        </div>

                        <div className="flex justify-center">
                          <div className="w-[220px]">
                            <PhoneFrame>
                              <div className="h-full w-full bg-white">{screen.content}</div>
                            </PhoneFrame>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      {/* Download CTA Section */}
      <section className="bg-amber-600 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <ScrollReveal>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Download the Solarithm App Today
              </h2>
              <p className="mt-4 text-xl text-amber-100">
                Take control of your solar investment with our powerful mobile app.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                <Button className="bg-white text-amber-600 hover:bg-gray-100 flex items-center justify-center gap-2">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                    <path d="M17.5,12.5c0-0.9,0.5-1.7,1.3-2.2c-0.5-0.7-1.2-1.3-2.1-1.6c-0.9-0.3-1.7-0.4-2.5-0.2c-1.1,0.2-1.9,0.7-2.2,0.7 c-0.4,0-1.1-0.5-2.1-0.5c-1.1,0-2.1,0.6-2.7,1.5c-1.2,2-0.3,5,0.8,6.6c0.6,0.8,1.2,1.7,2.1,1.7c0.8,0,1.2-0.5,2.2-0.5 c0.9,0,1.3,0.5,2.2,0.5c0.9,0,1.5-0.8,2.1-1.6c0.4-0.6,0.8-1.3,1-2C18.2,14.4,17.5,13.5,17.5,12.5z M15.2,7.2 c0.5-0.6,0.8-1.4,0.7-2.2c-0.7,0.1-1.4,0.4-1.9,1c-0.5,0.5-0.8,1.3-0.7,2.1C14,8.1,14.7,7.8,15.2,7.2z" />
                  </svg>
                  Download on App Store
                </Button>
                <Button className="bg-white text-amber-600 hover:bg-gray-100 flex items-center justify-center gap-2">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                    <path d="M3.5,20.5c0.2,0.3,0.5,0.5,0.8,0.5h0c0.1,0,0.3,0,0.4-0.1l8.5-4.4l-2.1-2.1L3.5,20.5z M13.6,15.7l2.1-2.1L5.2,3.1 c-0.1-0.1-0.3-0.1-0.4-0.1c-0.3,0-0.6,0.2-0.8,0.5L13.6,15.7z M14.4,10.5L21.5,7c0.4-0.2,0.6-0.7,0.4-1.1c-0.1-0.1-0.2-0.2-0.3-0.3 l-7.1-3.5l-2.1,2.1L14.4,10.5z M14.4,13.5l2.1,2.1l1.9-1l-2.1-2.1L14.4,13.5z" />
                  </svg>
                  Get it on Google Play
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
