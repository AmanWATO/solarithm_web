"use client"

import { useState, useRef } from "react"
import { MapPin, Sun, ZoomIn, ZoomOut, RotateCw } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"
import ScrollReveal from "@/components/scroll-reveal"

// Indian cities with solar potential data
const solarData = [
  { city: "Jodhpur", state: "Rajasthan", potential: 92, lat: 26.2389, lng: 73.0243 },
  { city: "Jaisalmer", state: "Rajasthan", potential: 95, lat: 26.9157, lng: 70.9083 },
  { city: "Bikaner", state: "Rajasthan", potential: 90, lat: 28.0229, lng: 73.3119 },
  { city: "Ahmedabad", state: "Gujarat", potential: 87, lat: 23.0225, lng: 72.5714 },
  { city: "Kutch", state: "Gujarat", potential: 89, lat: 23.7337, lng: 69.8597 },
  { city: "Chennai", state: "Tamil Nadu", potential: 82, lat: 13.0827, lng: 80.2707 },
  { city: "Madurai", state: "Tamil Nadu", potential: 80, lat: 9.9252, lng: 78.1198 },
  { city: "Hyderabad", state: "Telangana", potential: 78, lat: 17.385, lng: 78.4867 },
  { city: "Bengaluru", state: "Karnataka", potential: 75, lat: 12.9716, lng: 77.5946 },
  { city: "Mumbai", state: "Maharashtra", potential: 72, lat: 19.076, lng: 72.8777 },
  { city: "Nagpur", state: "Maharashtra", potential: 76, lat: 21.1458, lng: 79.0882 },
  { city: "Delhi", state: "Delhi", potential: 70, lat: 28.6139, lng: 77.209 },
  { city: "Lucknow", state: "Uttar Pradesh", potential: 68, lat: 26.8467, lng: 80.9462 },
  { city: "Bhopal", state: "Madhya Pradesh", potential: 74, lat: 23.2599, lng: 77.4126 },
  { city: "Indore", state: "Madhya Pradesh", potential: 76, lat: 22.7196, lng: 75.8577 },
]

export default function SolarMapPage() {
  const [zoom, setZoom] = useState(5)
  const [selectedCity, setSelectedCity] = useState<(typeof solarData)[0] | null>(null)
  const [mapRotation, setMapRotation] = useState(0)
  const mapRef = useRef<HTMLDivElement>(null)

  const handleZoomIn = () => {
    setZoom(Math.min(zoom + 1, 10))
  }

  const handleZoomOut = () => {
    setZoom(Math.max(zoom - 1, 3))
  }

  const handleRotate = () => {
    setMapRotation(mapRotation + 45)
  }

  const handleCityClick = (city: (typeof solarData)[0]) => {
    setSelectedCity(city)
  }

  // Calculate position based on latitude and longitude
  const getPosition = (lat: number, lng: number) => {
    // Simple conversion for demo purposes
    // In a real app, you'd use proper map projection
    const x = ((lng - 70) / 15) * 100 // normalize to percentage
    const y = 100 - ((lat - 8) / 25) * 100 // normalize to percentage
    return { x, y }
  }

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
              Interactive Solar Map of India
            </h1>
            <p className="mt-6 text-xl text-gray-700">
              Explore solar potential across different regions of India and discover optimal installation zones.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Map Section */}
      <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-3">
            <ScrollReveal className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Solar Potential Map</CardTitle>
                  <CardDescription>Click on any marker to see detailed information</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <div className="flex justify-end space-x-2 mb-4">
                      <Button variant="outline" size="icon" onClick={handleZoomIn}>
                        <ZoomIn className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon" onClick={handleZoomOut}>
                        <ZoomOut className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon" onClick={handleRotate}>
                        <RotateCw className="h-4 w-4" />
                      </Button>
                    </div>

                    <div
                      ref={mapRef}
                      className="relative h-[500px] bg-sky-50 rounded-lg overflow-hidden border border-gray-200"
                      style={{
                        backgroundImage: "url('/placeholder.svg?height=800&width=800&text=India+Map')",
                        backgroundSize: `${zoom * 10}%`,
                        backgroundPosition: "center",
                        transform: `rotate(${mapRotation}deg)`,
                        transition: "all 0.5s ease",
                      }}
                    >
                      {solarData.map((city) => {
                        const { x, y } = getPosition(city.lat, city.lng)
                        return (
                          <motion.div
                            key={city.city}
                            className="absolute cursor-pointer"
                            style={{ left: `${x}%`, top: `${y}%` }}
                            whileHover={{ scale: 1.2 }}
                            onClick={() => handleCityClick(city)}
                          >
                            <div className="relative">
                              <MapPin
                                className={`h-6 w-6 ${
                                  city.potential > 85
                                    ? "text-red-500"
                                    : city.potential > 75
                                      ? "text-orange-500"
                                      : "text-yellow-500"
                                }`}
                              />
                              <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-white flex items-center justify-center">
                                <Sun className="h-2 w-2 text-amber-500" />
                              </div>
                            </div>
                          </motion.div>
                        )
                      })}
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="flex items-center">
                          <span className="h-3 w-3 rounded-full bg-red-500 mr-1"></span>
                          <span className="text-xs">High Potential</span>
                        </span>
                        <span className="flex items-center">
                          <span className="h-3 w-3 rounded-full bg-orange-500 mr-1"></span>
                          <span className="text-xs">Medium Potential</span>
                        </span>
                        <span className="flex items-center">
                          <span className="h-3 w-3 rounded-full bg-yellow-500 mr-1"></span>
                          <span className="text-xs">Moderate Potential</span>
                        </span>
                      </div>
                      <div>
                        <span className="text-xs text-gray-500">Zoom: {zoom}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>{selectedCity ? selectedCity.city : "Location Details"}</CardTitle>
                  <CardDescription>
                    {selectedCity
                      ? `${selectedCity.city}, ${selectedCity.state}`
                      : "Select a location on the map to view details"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {selectedCity ? (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">Solar Potential</h3>
                        <div className="mt-2 flex items-center">
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div
                              className="h-2.5 rounded-full bg-amber-600"
                              style={{ width: `${selectedCity.potential}%` }}
                            ></div>
                          </div>
                          <span className="ml-2 text-sm font-medium">{selectedCity.potential}%</span>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-sm font-medium text-gray-500">Location</h3>
                        <p className="mt-1">Latitude: {selectedCity.lat}°</p>
                        <p>Longitude: {selectedCity.lng}°</p>
                      </div>

                      <div>
                        <h3 className="text-sm font-medium text-gray-500">Estimated Annual Production</h3>
                        <p className="mt-1 text-2xl font-bold text-amber-600">
                          {Math.round(1500 * (selectedCity.potential / 100))} kWh/kWp
                        </p>
                        <p className="text-xs text-gray-500">Per installed kilowatt-peak capacity</p>
                      </div>

                      <div>
                        <h3 className="text-sm font-medium text-gray-500">Best Installation Type</h3>
                        <p className="mt-1">
                          {selectedCity.potential > 85
                            ? "Utility Scale Solar Farm"
                            : selectedCity.potential > 75
                              ? "Commercial Rooftop"
                              : "Residential Rooftop"}
                        </p>
                      </div>

                      <Button className="w-full bg-amber-600 hover:bg-amber-700">Run Detailed Analysis</Button>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-64 text-center">
                      <MapPin className="h-12 w-12 text-gray-300 mb-4" />
                      <p className="text-gray-500">
                        Select a location on the map to view detailed solar potential information
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Data Visualization Section */}
      <section className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Regional Solar Insights</h2>
              <p className="mt-4 text-lg text-gray-600">Compare solar potential across different regions of India</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <Tabs defaultValue="potential" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="potential">Potential by Region</TabsTrigger>
                <TabsTrigger value="irradiance">Solar Irradiance</TabsTrigger>
                <TabsTrigger value="policies">State Policies</TabsTrigger>
              </TabsList>
              <TabsContent value="potential">
                <Card>
                  <CardHeader>
                    <CardTitle>Solar Potential by Region</CardTitle>
                    <CardDescription>Average solar potential across different states of India</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { state: "Rajasthan", potential: 92 },
                        { state: "Gujarat", potential: 88 },
                        { state: "Tamil Nadu", potential: 81 },
                        { state: "Karnataka", potential: 75 },
                        { state: "Maharashtra", potential: 74 },
                        { state: "Madhya Pradesh", potential: 75 },
                        { state: "Telangana", potential: 78 },
                        { state: "Andhra Pradesh", potential: 77 },
                        { state: "Uttar Pradesh", potential: 68 },
                        { state: "Delhi", potential: 70 },
                      ].map((item) => (
                        <div key={item.state}>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">{item.state}</span>
                            <span className="text-sm font-medium">{item.potential}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div
                              className="h-2.5 rounded-full bg-amber-600"
                              style={{ width: `${item.potential}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="irradiance">
                <Card>
                  <CardHeader>
                    <CardTitle>Solar Irradiance Map</CardTitle>
                    <CardDescription>Average daily solar irradiance in kWh/m²</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-96 bg-gray-100 rounded-lg flex items-center justify-center">
                      <p className="text-gray-500">Solar irradiance heatmap visualization would appear here</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="policies">
                <Card>
                  <CardHeader>
                    <CardTitle>State Solar Policies</CardTitle>
                    <CardDescription>Overview of solar policies and incentives by state</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          state: "Rajasthan",
                          policy: "Rajasthan Solar Energy Policy 2019",
                          incentives: "30% subsidy for residential, net metering",
                        },
                        {
                          state: "Gujarat",
                          policy: "Gujarat Solar Power Policy 2021",
                          incentives: "40% subsidy up to 3kW, net metering",
                        },
                        {
                          state: "Tamil Nadu",
                          policy: "Tamil Nadu Solar Energy Policy 2019",
                          incentives: "20% subsidy, net metering, banking facility",
                        },
                        {
                          state: "Karnataka",
                          policy: "Karnataka Solar Policy 2021-26",
                          incentives: "25% subsidy, net metering, tax benefits",
                        },
                        {
                          state: "Maharashtra",
                          policy: "Maharashtra Solar Policy 2020",
                          incentives: "Subsidy for residential, net metering",
                        },
                      ].map((item) => (
                        <div key={item.state} className="border-b pb-3">
                          <h3 className="font-medium">{item.state}</h3>
                          <p className="text-sm text-gray-600">{item.policy}</p>
                          <p className="text-sm text-gray-500 mt-1">Incentives: {item.incentives}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  )
}
