"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowRight,
  BarChart3,
  Bell,
  Calendar,
  ChevronDown,
  Cloud,
  Download,
  Home,
  LineChart,
  MapPin,
  MessageSquare,
  PieChart,
  Settings,
  Sun,
  Users,
  Zap,
} from "lucide-react"

import { ThemeToggle } from "@/components/theme-toggle"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <SidebarProvider>
      <div className="flex h-screen flex-col md:flex-row bg-[#F9F9F9] dark:bg-[#1A1A2E]">
        {/* Sidebar */}
        <Sidebar className="w-full md:w-auto">
          <SidebarHeader>
            <div className="flex items-center px-2 py-3">
              <Sun className="h-8 w-8 text-[#FFC857]" />
              <span className="ml-2 text-xl font-bold text-[#FFC857]">Solarithm</span>
            </div>
            <div className="px-2">
              <SidebarInput placeholder="Search..." />
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Main</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton isActive tooltip="Dashboard">
                      <Home className="h-4 w-4" />
                      <span>Dashboard</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Solar Map">
                      <MapPin className="h-4 w-4" />
                      <span>Solar Map</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Analytics">
                      <LineChart className="h-4 w-4" />
                      <span>Analytics</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Projects">
                      <Zap className="h-4 w-4" />
                      <span>Projects</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarGroupLabel>Tools</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="ROI Calculator">
                      <PieChart className="h-4 w-4" />
                      <span>ROI Calculator</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Weather Data">
                      <Cloud className="h-4 w-4" />
                      <span>Weather Data</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Reports">
                      <BarChart3 className="h-4 w-4" />
                      <span>Reports</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarGroupLabel>Team</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Clients">
                      <Users className="h-4 w-4" />
                      <span>Clients</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Messages">
                      <MessageSquare className="h-4 w-4" />
                      <span>Messages</span>
                      <Badge className="ml-auto bg-[#FF6B35] text-white">3</Badge>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Calendar">
                      <Calendar className="h-4 w-4" />
                      <span>Calendar</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Settings">
                  <Settings className="h-4 w-4" />
                  <span>Settings</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Profile">
                  <div className="flex items-center w-full">
                    <Avatar className="h-6 w-6 mr-2">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <span>John Doe</span>
                    <ChevronDown className="ml-auto h-4 w-4" />
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
          <SidebarRail />
        </Sidebar>

        {/* Main Content */}
        <div className="flex flex-1 flex-col overflow-hidden">
          {/* Top Navigation */}
          <header className="flex h-16 items-center justify-between border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1A1A2E]/30 px-4">
            <div className="flex items-center">
              <SidebarTrigger />
              <h1 className="ml-4 text-xl font-semibold text-[#121212] dark:text-[#EAEAEA]">Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Bell className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#FF6B35] text-[10px] font-bold text-white">
                  2
                </span>
              </div>
              <ThemeToggle />
              <Link href="/" className="text-sm text-[#FF6B35] hover:text-[#2EC4B6]">
                Exit Demo
              </Link>
            </div>
          </header>

          {/* Dashboard Content */}
          <main className="flex-1 overflow-auto p-4 md:p-6">
            <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <h2 className="text-2xl font-bold text-[#121212] dark:text-[#EAEAEA]">Solar Performance Overview</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Monitor your solar installations and energy production
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Select defaultValue="last7days">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select timeframe" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="today">Today</SelectItem>
                    <SelectItem value="yesterday">Yesterday</SelectItem>
                    <SelectItem value="last7days">Last 7 days</SelectItem>
                    <SelectItem value="last30days">Last 30 days</SelectItem>
                    <SelectItem value="thismonth">This month</SelectItem>
                    <SelectItem value="lastmonth">Last month</SelectItem>
                    <SelectItem value="custom">Custom range</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="icon">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="overview" className="mb-6" onValueChange={(value) => setActiveTab(value)}>
              <TabsList className="w-full flex overflow-x-auto sm:w-auto">
                <TabsTrigger value="overview" className="flex-1 sm:flex-none">
                  Overview
                </TabsTrigger>
                <TabsTrigger value="production" className="flex-1 sm:flex-none">
                  Production
                </TabsTrigger>
                <TabsTrigger value="financial" className="flex-1 sm:flex-none">
                  Financial
                </TabsTrigger>
                <TabsTrigger value="environmental" className="flex-1 sm:flex-none">
                  Environmental
                </TabsTrigger>
              </TabsList>

              {/* Overview Tab Content */}
              <TabsContent value="overview" className="space-y-6 mt-6">
                {/* Key Metrics */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardDescription>Total Energy Generated</CardDescription>
                      <CardTitle className="text-2xl">284.5 kWh</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-xs text-green-500 flex items-center">
                        <ArrowRight className="h-3 w-3 rotate-45" />
                        <span>+12.5% from last week</span>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardDescription>System Efficiency</CardDescription>
                      <CardTitle className="text-2xl">94.2%</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-xs text-green-500 flex items-center">
                        <ArrowRight className="h-3 w-3 rotate-45" />
                        <span>+1.8% from last week</span>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardDescription>Cost Savings</CardDescription>
                      <CardTitle className="text-2xl">₹3,245</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-xs text-green-500 flex items-center">
                        <ArrowRight className="h-3 w-3 rotate-45" />
                        <span>+15.3% from last week</span>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardDescription>CO₂ Avoided</CardDescription>
                      <CardTitle className="text-2xl">198.2 kg</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-xs text-green-500 flex items-center">
                        <ArrowRight className="h-3 w-3 rotate-45" />
                        <span>+12.5% from last week</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Energy Production Chart */}
                <Card>
                  <CardHeader>
                    <CardTitle>Energy Production</CardTitle>
                    <CardDescription>Daily energy generation over the past week</CardDescription>
                  </CardHeader>
                  <CardContent className="h-80">
                    <div className="h-full w-full bg-gray-100 dark:bg-gray-800 rounded-md flex items-center justify-center">
                      <div className="text-center">
                        <LineChart className="h-12 w-12 mx-auto text-gray-400" />
                        <p className="mt-2 text-gray-500 dark:text-gray-400">Energy Production Chart</p>
                        <p className="text-xs text-gray-400 dark:text-gray-500">
                          (Placeholder for actual chart implementation)
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Installation Sites */}
                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Installation Sites</CardTitle>
                      <CardDescription>Performance by location</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <p className="text-sm font-medium">Residential Site A</p>
                            <div className="flex items-center text-xs text-gray-500">
                              <MapPin className="mr-1 h-3 w-3" />
                              <span>Bengaluru, Karnataka</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-medium">98.5 kWh</p>
                            <p className="text-xs text-green-500">+5.2%</p>
                          </div>
                        </div>
                        <Progress value={92} className="h-2" />

                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <p className="text-sm font-medium">Commercial Site B</p>
                            <div className="flex items-center text-xs text-gray-500">
                              <MapPin className="mr-1 h-3 w-3" />
                              <span>Mumbai, Maharashtra</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-medium">124.3 kWh</p>
                            <p className="text-xs text-green-500">+12.8%</p>
                          </div>
                        </div>
                        <Progress value={78} className="h-2" />

                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <p className="text-sm font-medium">Industrial Site C</p>
                            <div className="flex items-center text-xs text-gray-500">
                              <MapPin className="mr-1 h-3 w-3" />
                              <span>Chennai, Tamil Nadu</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-medium">61.7 kWh</p>
                            <p className="text-xs text-red-500">-2.1%</p>
                          </div>
                        </div>
                        <Progress value={65} className="h-2" />
                      </div>
                    </CardContent>
                  </Card>

                  {/* Weather Impact */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Weather Impact</CardTitle>
                      <CardDescription>How weather affects your production</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="mr-4 rounded-full bg-amber-100 p-2 dark:bg-amber-900">
                              <Sun className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                            </div>
                            <div>
                              <p className="text-sm font-medium">Sunny Days</p>
                              <p className="text-xs text-gray-500">4 days this week</p>
                            </div>
                          </div>
                          <p className="text-sm font-medium">+24.5% production</p>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="mr-4 rounded-full bg-gray-100 p-2 dark:bg-gray-800">
                              <Cloud className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                            </div>
                            <div>
                              <p className="text-sm font-medium">Cloudy Days</p>
                              <p className="text-xs text-gray-500">2 days this week</p>
                            </div>
                          </div>
                          <p className="text-sm font-medium">-15.2% production</p>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="mr-4 rounded-full bg-blue-100 p-2 dark:bg-blue-900">
                              <Cloud className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                            </div>
                            <div>
                              <p className="text-sm font-medium">Rainy Days</p>
                              <p className="text-xs text-gray-500">1 day this week</p>
                            </div>
                          </div>
                          <p className="text-sm font-medium">-32.8% production</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Other tabs would be implemented similarly */}
              <TabsContent value="production" className="space-y-6 mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Production Details</CardTitle>
                    <CardDescription>Detailed breakdown of energy production</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-12">
                      <p className="text-gray-500 dark:text-gray-400">Production tab content would appear here</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="financial" className="space-y-6 mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Financial Analysis</CardTitle>
                    <CardDescription>ROI and financial metrics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-12">
                      <p className="text-gray-500 dark:text-gray-400">Financial tab content would appear here</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="environmental" className="space-y-6 mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Environmental Impact</CardTitle>
                    <CardDescription>Carbon offset and environmental benefits</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-12">
                      <p className="text-gray-500 dark:text-gray-400">Environmental tab content would appear here</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}
