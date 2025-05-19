import Link from "next/link"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AnimatedPageWrapper from "@/components/animated-page-wrapper"

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <AnimatedPageWrapper>
        {/* Header Section */}
        <section className="bg-gradient-to-br from-amber-50 via-orange-100 to-sky-100 px-4 pt-32 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                Privacy Policy
              </h1>
              <p className="mt-6 text-xl text-gray-700">
                We're committed to protecting your privacy and being transparent about how we use your data.
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="bg-white px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-amber-600">
              <h2>Introduction</h2>
              <p>
                This Privacy Policy explains how Solarithm ("we," "us," or "our") collects, uses, and shares information
                about you when you use our website, products, and services (collectively, the "Services").
              </p>
              <p>
                By using our Services, you agree to the collection, use, and sharing of your information as described in
                this Privacy Policy. If you do not agree with our policies and practices, do not use our Services.
              </p>

              <h2>Information We Collect</h2>
              <p>We collect several types of information from and about users of our Services, including:</p>
              <ul>
                <li>
                  <strong>Personal Information:</strong> This includes information that can be used to identify you,
                  such as your name, email address, postal address, phone number, and company name.
                </li>
                <li>
                  <strong>Usage Information:</strong> We collect information about how you use our Services, including
                  your browsing actions and patterns, the pages you visit, the time you spend on those pages, and the
                  features you use.
                </li>
                <li>
                  <strong>Device Information:</strong> We collect information about the devices you use to access our
                  Services, including IP address, browser type, operating system, and device identifiers.
                </li>
              </ul>

              <h2>How We Use Your Information</h2>
              <p>We use the information we collect about you for various purposes, including to:</p>
              <ul>
                <li>Provide, maintain, and improve our Services</li>
                <li>Process transactions and send related information</li>
                <li>Send you technical notices, updates, security alerts, and support messages</li>
                <li>Respond to your comments, questions, and requests</li>
                <li>Communicate with you about products, services, offers, and events</li>
                <li>Monitor and analyze trends, usage, and activities in connection with our Services</li>
                <li>Detect, prevent, and address technical issues</li>
                <li>Protect against harmful, unauthorized, or illegal activity</li>
              </ul>

              <h2>How We Share Your Information</h2>
              <p>We may share your information in the following circumstances:</p>
              <ul>
                <li>With service providers who perform services on our behalf</li>
                <li>With business partners with whom we jointly offer products or services</li>
                <li>In connection with a merger, sale, or acquisition of all or a portion of our business</li>
                <li>To comply with legal obligations or protect our rights</li>
                <li>With your consent or at your direction</li>
              </ul>

              <h2>Your Choices</h2>
              <p>You have several choices regarding the information we collect and how it is used:</p>
              <ul>
                <li>
                  <strong>Account Information:</strong> You may update, correct, or delete your account information at
                  any time by logging into your account or contacting us.
                </li>
                <li>
                  <strong>Cookies:</strong> Most web browsers are set to accept cookies by default. You can usually
                  choose to set your browser to remove or reject cookies.
                </li>
                <li>
                  <strong>Promotional Communications:</strong> You may opt out of receiving promotional emails from us
                  by following the instructions in those emails.
                </li>
              </ul>

              <h2>Data Security</h2>
              <p>
                We take reasonable measures to help protect your personal information from loss, theft, misuse, and
                unauthorized access, disclosure, alteration, and destruction.
              </p>

              <h2>Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. If we make material changes, we will notify you by
                email or through a notice on our website prior to the change becoming effective.
              </p>

              <h2>Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at{" "}
                <Link href="mailto:privacy@solarithm.com">privacy@solarithm.com</Link>.
              </p>

              <p className="text-sm text-gray-500">Last updated: May 15, 2024</p>
            </div>
          </div>
        </section>
      </AnimatedPageWrapper>
      <Footer />
    </div>
  )
}
