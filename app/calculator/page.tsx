"use client"

import { useState, useEffect } from "react"
import { Calculator, Sun, IndianRupee, BarChart3, ArrowRight } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { motion } from "framer-motion"
import ScrollReveal from "@/components/scroll-reveal"

// Indian states with electricity rates
const electricityRates = [
  { state: "Andhra Pradesh", rate: 7.65 },
  { state: "Delhi", rate: 8.5 },
  { state: "Gujarat", rate: 6.7 },
  { state: "Karnataka", rate: 7.9 },
  { state: "Kerala", rate: 6.8 },
  { state: "Madhya Pradesh", rate: 7.5 },
  { state: "Maharashtra", rate: 9.1 },
  { state: "Punjab", rate: 7.3 },
  { state: "Rajasthan", rate: 8.25 },
  { state: "Tamil Nadu", rate: 8.05 },
  { state: "Telangana", rate: 7.75 },
  { state: "Uttar Pradesh", rate: 7.4 },
  { state: "West Bengal", rate: 8.15 },
]

export default function SolarCalculatorPage() {
  // System parameters
  const [systemSize, setSystemSize] = useState(5) // in kW
  const [roofArea, setRoofArea] = useState(500) // in sq ft
  const [selectedState, setSelectedState] = useState("Karnataka")
  const [electricityRate, setElectricityRate] = useState(7.9) // in Rs/kWh
  const [monthlyConsumption, setMonthlyConsumption] = useState(400) // in kWh
  const [systemCost, setSystemCost] = useState(45000) // in Rs per kW
  const [sunlightHours, setSunlightHours] = useState(5.5) // average daily sunlight hours
  const [efficiency, setEfficiency] = useState(80) // system efficiency in %

  // Results
  const [annualProduction, setAnnualProduction] = useState(0)
  const [annualSavings, setAnnualSavings] = useState(0)
  const [paybackPeriod, setPaybackPeriod] = useState(0)
  const [co2Reduction, setCo2Reduction] = useState(0)
  const [totalCost, setTotalCost] = useState(0)
  const [subsidyAmount, setSubsidyAmount] = useState(0)
  const [netCost, setNetCost] = useState(0)

  // Calculate results whenever inputs change
  useEffect(() => {
    // Calculate total system cost
    const rawCost = systemSize * systemCost

    // Calculate subsidy (based on Indian subsidy scheme)
    let subsidy = 0
    if (systemSize <= 3) {
      subsidy = rawCost * 0.4 // 40% subsidy for systems up to 3kW
    } else if (systemSize <= 10) {
      subsidy = 3 * systemCost * 0.4 + (systemSize - 3) * systemCost * 0.2 // 40% for first 3kW, 20% for next 7kW
    } else {
      subsidy = 3 * systemCost * 0.4 + 7 * systemCost * 0.2 // Maximum subsidy capped at 10kW
    }

    // Calculate net cost after subsidy
    const finalCost = rawCost - subsidy

    // Calculate annual production
    const dailyProduction = systemSize * sunlightHours * (efficiency / 100)
    const yearlyProduction = dailyProduction * 365

    // Calculate annual savings
    const yearlySavings = yearlyProduction * electricityRate

    // Calculate payback period
    const payback = finalCost / yearlySavings

    // Calculate CO2 reduction (0.82 kg CO2 per kWh in India)
    const co2Saved = yearlyProduction * 0.82

    // Update state with calculated values
    setAnnualProduction(Math.round(yearlyProduction))
    setAnnualSavings(Math.round(yearlySavings))
    setPaybackPeriod(Number.parseFloat(payback.toFixed(1)))
    setCo2Reduction(Math.round(co2Saved))
    setTotalCost(rawCost)
    setSubsidyAmount(Math.round(subsidy))
    setNetCost(Math.round(finalCost))
  }, [systemSize, roofArea, electricityRate, monthlyConsumption, systemCost, sunlightHours, efficiency])

  // Update electricity rate when state changes
  useEffect(() => {
    const stateData = electricityRates.find((item) => item.state === selectedState)
    if (stateData) {
      setElectricityRate(stateData.rate)
    }
  }, [selectedState])

  // Calculate maximum system size based on roof area (approx 100 sq ft per kW)
  const maxSystemSize = Math.floor(roofArea / 100)

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
              Solar ROI Calculator
            </h1>
            <p className="mt-6 text-xl text-gray-700">
              Calculate the potential returns and savings from your solar investment
            </p>
          </div>
        </div>
      </motion.section>

      {/* Calculator Section */}
      <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Input Form */}
            <ScrollReveal>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calculator className="mr-2 h-5 w-5 text-amber-600" />
                    System Parameters
                  </CardTitle>
                  <CardDescription>Enter your details to calculate solar potential</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Label htmlFor="system-size">System Size (kW)</Label>
                        <span className="text-sm text-gray-500">{systemSize} kW</span>
                      </div>
                      <Slider
                        id="system-size"
                        min={1}
                        max={Math.max(10, maxSystemSize)}
                        step={0.5}
                        value={[systemSize]}
                        onValueChange={(value) => setSystemSize(value[0])}
                      />
                      <p className="text-xs text-gray-500">
                        Based on your roof area, the maximum recommended system size is {maxSystemSize} kW
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="roof-area">Available Roof Area (sq ft)</Label>
                      <Input
                        id="roof-area"
                        type="number"
                        value={roofArea}
                        onChange={(e) => setRoofArea(Number(e.target.value))}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="state">State</Label>
                      <Select value={selectedState} onValueChange={setSelectedState}>
                        <SelectTrigger id="state">
                          <SelectValue placeholder="Select your state" />
                        </SelectTrigger>
                        <SelectContent>
                          {electricityRates.map((item) => (
                            <SelectItem key={item.state} value={item.state}>
                              {item.state}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="electricity-rate">Electricity Rate (₹/kWh)</Label>
                      <Input
                        id="electricity-rate"
                        type="number"
                        step="0.01"
                        value={electricityRate}
                        onChange={(e) => setElectricityRate(Number(e.target.value))}
                      />
                      <p className="text-xs text-gray-500">
                        Average electricity rate in {selectedState} is ₹{electricityRate}/kWh
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="monthly-consumption">Monthly Consumption (kWh)</Label>
                      <Input
                        id="monthly-consumption"
                        type="number"
                        value={monthlyConsumption}
                        onChange={(e) => setMonthlyConsumption(Number(e.target.value))}
                      />
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Label htmlFor="sunlight-hours">Average Daily Sunlight Hours</Label>
                        <span className="text-sm text-gray-500">{sunlightHours} hours</span>
                      </div>
                      <Slider
                        id="sunlight-hours"
                        min={4}
                        max={7}
                        step={0.1}
                        value={[sunlightHours]}
                        onValueChange={(value) => setSunlightHours(value[0])}
                      />
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Label htmlFor="efficiency">System Efficiency</Label>
                        <span className="text-sm text-gray-500">{efficiency}%</span>
                      </div>
                      <Slider
                        id="efficiency"
                        min={70}
                        max={90}
                        step={1}
                        value={[efficiency]}
                        onValueChange={(value) => setEfficiency(value[0])}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="system-cost">System Cost (₹/kW)</Label>
                      <Input
                        id="system-cost"
                        type="number"
                        step="1000"
                        value={systemCost}
                        onChange={(e) => setSystemCost(Number(e.target.value))}
                      />
                      <p className="text-xs text-gray-500">
                        Average cost in India ranges from ₹40,000 to ₹60,000 per kW
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Results */}
            <ScrollReveal delay={0.2}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="mr-2 h-5 w-5 text-amber-600" />
                    Results & ROI Analysis
                  </CardTitle>
                  <CardDescription>Estimated returns on your solar investment</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="summary">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="summary">Summary</TabsTrigger>
                      <TabsTrigger value="financial">Financial</TabsTrigger>
                      <TabsTrigger value="environmental">Environmental</TabsTrigger>
                    </TabsList>

                    <TabsContent value="summary" className="space-y-6 pt-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-lg bg-amber-50 p-4">
                          <div className="flex items-center">
                            <Sun className="h-5 w-5 text-amber-600 mr-2" />
                            <h3 className="text-sm font-medium text-gray-900">Annual Production</h3>
                          </div>
                          <p className="mt-2 text-2xl font-bold text-amber-600">
                            {annualProduction.toLocaleString()} kWh
                          </p>
                        </div>

                        <div className="rounded-lg bg-green-50 p-4">
                          <div className="flex items-center">
                            <IndianRupee className="h-5 w-5 text-green-600 mr-2" />
                            <h3 className="text-sm font-medium text-gray-900">Annual Savings</h3>
                          </div>
                          <p className="mt-2 text-2xl font-bold text-green-600">₹{annualSavings.toLocaleString()}</p>
                        </div>
                      </div>

                      <div className="rounded-lg bg-gray-50 p-4">
                        <h3 className="text-sm font-medium text-gray-900">System Overview</h3>
                        <div className="mt-2 space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-500">System Size:</span>
                            <span className="text-sm font-medium">{systemSize} kW</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-500">Estimated Generation:</span>
                            <span className="text-sm font-medium">
                              {Math.round(annualProduction / 12).toLocaleString()} kWh/month
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-500">Payback Period:</span>
                            <span className="text-sm font-medium">{paybackPeriod} years</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-500">CO₂ Reduction:</span>
                            <span className="text-sm font-medium">{co2Reduction.toLocaleString()} kg/year</span>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-lg border p-4">
                        <h3 className="text-sm font-medium text-gray-900">25-Year Benefits</h3>
                        <div className="mt-4 flex items-center">
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className="h-2.5 rounded-full bg-amber-600" style={{ width: "100%" }}></div>
                          </div>
                        </div>
                        <div className="mt-2 flex justify-between text-sm">
                          <span>Investment: ₹{netCost.toLocaleString()}</span>
                          <span>Returns: ₹{(annualSavings * 25).toLocaleString()}</span>
                        </div>
                      </div>

                      <Button className="w-full bg-amber-600 hover:bg-amber-700">Generate Detailed Report</Button>
                    </TabsContent>

                    <TabsContent value="financial" className="space-y-6 pt-4">
                      <div className="rounded-lg border p-4">
                        <h3 className="text-sm font-medium text-gray-900">Cost Breakdown</h3>
                        <div className="mt-4 space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-500">Total System Cost:</span>
                            <span className="text-sm font-medium">₹{totalCost.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-500">Government Subsidy:</span>
                            <span className="text-sm font-medium text-green-600">
                              - ₹{subsidyAmount.toLocaleString()}
                            </span>
                          </div>
                          <div className="flex justify-between border-t pt-2">
                            <span className="text-sm font-medium">Net Investment:</span>
                            <span className="text-sm font-medium">₹{netCost.toLocaleString()}</span>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-lg border p-4">
                        <h3 className="text-sm font-medium text-gray-900">Financial Returns</h3>
                        <div className="mt-4 space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-500">Annual Savings:</span>
                            <span className="text-sm font-medium">₹{annualSavings.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-500">Monthly Savings:</span>
                            <span className="text-sm font-medium">
                              ₹{Math.round(annualSavings / 12).toLocaleString()}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-500">Payback Period:</span>
                            <span className="text-sm font-medium">{paybackPeriod} years</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-500">ROI (25 years):</span>
                            <span className="text-sm font-medium">
                              {Math.round(((annualSavings * 25) / netCost - 1) * 100)}%
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-500">Lifetime Savings (25 years):</span>
                            <span className="text-sm font-medium">₹{(annualSavings * 25).toLocaleString()}</span>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-lg border p-4">
                        <h3 className="text-sm font-medium text-gray-900">Additional Benefits</h3>
                        <div className="mt-2 space-y-1">
                          <p className="text-sm text-gray-500">• Protection against rising electricity costs</p>
                          <p className="text-sm text-gray-500">• Increased property value</p>
                          <p className="text-sm text-gray-500">• Accelerated depreciation benefits for businesses</p>
                          <p className="text-sm text-gray-500">• Potential income from net metering</p>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="environmental" className="space-y-6 pt-4">
                      <div className="rounded-lg bg-green-50 p-4">
                        <h3 className="text-sm font-medium text-gray-900">Environmental Impact</h3>
                        <p className="mt-2 text-2xl font-bold text-green-600">{co2Reduction.toLocaleString()} kg CO₂</p>
                        <p className="text-sm text-gray-500">Annual carbon emissions avoided</p>
                      </div>

                      <div className="rounded-lg border p-4">
                        <h3 className="text-sm font-medium text-gray-900">Equivalent To</h3>
                        <div className="mt-4 space-y-4">
                          <div className="flex items-start">
                            <div className="mr-4 flex-shrink-0 rounded-full bg-green-100 p-2">
                              <svg
                                className="h-4 w-4 text-green-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <div>
                              <p className="text-sm font-medium">{Math.round(co2Reduction / 2400)} trees planted</p>
                              <p className="text-xs text-gray-500">Each tree absorbs about 22 kg of CO₂ per year</p>
                            </div>
                          </div>

                          <div className="flex items-start">
                            <div className="mr-4 flex-shrink-0 rounded-full bg-green-100 p-2">
                              <svg
                                className="h-4 w-4 text-green-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <div>
                              <p className="text-sm font-medium">
                                {Math.round(co2Reduction / 180)} fewer cars on the road
                              </p>
                              <p className="text-xs text-gray-500">Average car emits 4,600 kg of CO₂ per year</p>
                            </div>
                          </div>

                          <div className="flex items-start">
                            <div className="mr-4 flex-shrink-0 rounded-full bg-green-100 p-2">
                              <svg
                                className="h-4 w-4 text-green-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <div>
                              <p className="text-sm font-medium">{Math.round(co2Reduction / 500)} fewer flights</p>
                              <p className="text-xs text-gray-500">
                                Delhi to Mumbai flight emits ~500 kg CO₂ per passenger
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-lg border p-4">
                        <h3 className="text-sm font-medium text-gray-900">25-Year Impact</h3>
                        <div className="mt-4 space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-500">CO₂ Reduction:</span>
                            <span className="text-sm font-medium">{(co2Reduction * 25).toLocaleString()} kg</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-500">Equivalent to:</span>
                            <span className="text-sm font-medium">
                              {Math.round((co2Reduction * 25) / 2400)} trees growing for 10 years
                            </span>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-amber-600 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <ScrollReveal>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to go solar?</h2>
              <p className="mt-4 text-xl text-amber-100">
                Get a detailed analysis and personalized quote from our solar experts.
              </p>
              <div className="mt-8">
                <Button className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-lg font-medium text-amber-600 transition-all hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-amber-600">
                  Request a Quote
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
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
