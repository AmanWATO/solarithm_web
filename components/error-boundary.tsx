
"use client"

import { Component, ReactNode } from "react"
import { motion } from "framer-motion"
import { AlertCircle, RefreshCw } from "lucide-react"

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error('Error caught by boundary:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-md w-full text-center"
          >
            <div 
              className="rounded-2xl p-8 border backdrop-blur-lg"
              style={{
                backgroundColor: "rgba(239, 68, 68, 0.1)",
                borderColor: "rgba(239, 68, 68, 0.2)",
                backdropFilter: "blur(20px)"
              }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="mx-auto mb-4 w-16 h-16 flex items-center justify-center rounded-full"
                style={{ backgroundColor: "rgba(239, 68, 68, 0.2)" }}
              >
                <AlertCircle className="w-8 h-8 text-red-400" />
              </motion.div>
              
              <h2 className="text-2xl font-bold text-white mb-2">Something went wrong</h2>
              <p className="text-gray-300 mb-6">
                We encountered an unexpected error. Please try refreshing the page.
              </p>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.reload()}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, #0066FF, #00FF88)",
                  color: "#0A0A0F"
                }}
              >
                <RefreshCw className="w-4 h-4" />
                Refresh Page
              </motion.button>
            </div>
          </motion.div>
        </div>
      )
    }

    return this.props.children
  }
}
