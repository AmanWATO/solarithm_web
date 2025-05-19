import Link from "next/link"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AnimatedPageWrapper from "@/components/animated-page-wrapper"

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <AnimatedPageWrapper>
        {/* Header Section */}
        <section className="bg-gradient-to-br from-amber-50 via-orange-100 to-sky-100 px-4 pt-32 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                Terms of Service
              </h1>
              <p className="mt-6 text-xl text-gray-700">
                Please read these terms carefully before using our platform and services.
              </p>
            </div>
          </div>
        </section>

        {/* Terms of Service Content */}
        <section className="bg-white px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-amber-600">
              <h2>Agreement to Terms</h2>
              <p>
                These Terms of Service ("Terms") constitute a legally binding agreement between you and Solarithm
                ("Company," "we," "us," or "our") governing your access to and use of the Solarithm platform, website,
                and services (collectively, the "Services").
              </p>
              <p>
                By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these
                Terms, you may not access or use the Services.
              </p>

              <h2>Changes to Terms</h2>
              <p>
                We may revise and update these Terms from time to time in our sole discretion. All changes are effective
                immediately when we post them. Your continued use of the Services following the posting of revised Terms
                means that you accept and agree to the changes.
              </p>

              <h2>Accessing the Services</h2>
              <p>
                We reserve the right to withdraw or amend our Services, and any service or material we provide, in our
                sole discretion without notice. We will not be liable if for any reason all or any part of the Services
                are unavailable at any time or for any period.
              </p>

              <h2>User Accounts</h2>
              <p>
                When you create an account with us, you must provide information that is accurate, complete, and current
                at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate
                termination of your account.
              </p>
              <p>
                You are responsible for safeguarding the password that you use to access the Services and for any
                activities or actions under your password. You agree not to disclose your password to any third party.
              </p>

              <h2>Intellectual Property Rights</h2>
              <p>
                The Services and their entire contents, features, and functionality (including but not limited to all
                information, software, text, displays, images, video, and audio, and the design, selection, and
                arrangement thereof) are owned by the Company, its licensors, or other providers of such material and
                are protected by copyright, trademark, patent, trade secret, and other intellectual property or
                proprietary rights laws.
              </p>

              <h2>Prohibited Uses</h2>
              <p>
                You may use the Services only for lawful purposes and in accordance with these Terms. You agree not to:
              </p>
              <ul>
                <li>
                  Use the Services in any way that violates any applicable federal, state, local, or international law
                  or regulation
                </li>
                <li>Use the Services to transmit or send unsolicited commercial communications</li>
                <li>
                  Attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of the Services
                </li>
                <li>Use the Services in any manner that could disable, overburden, damage, or impair the site</li>
                <li>
                  Use any robot, spider, or other automatic device, process, or means to access the Services for any
                  purpose
                </li>
              </ul>

              <h2>Limitation of Liability</h2>
              <p>
                In no event will the Company, its affiliates, or their licensors, service providers, employees, agents,
                officers, or directors be liable for damages of any kind, under any legal theory, arising out of or in
                connection with your use, or inability to use, the Services, including any direct, indirect, special,
                incidental, consequential, or punitive damages.
              </p>

              <h2>Indemnification</h2>
              <p>
                You agree to defend, indemnify, and hold harmless the Company, its affiliates, licensors, and service
                providers, and its and their respective officers, directors, employees, contractors, agents, licensors,
                suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards,
                losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to
                your violation of these Terms or your use of the Services.
              </p>

              <h2>Governing Law</h2>
              <p>
                These Terms and your use of the Services shall be governed by and construed in accordance with the laws
                of the State of California, without regard to its conflict of law principles.
              </p>

              <h2>Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at{" "}
                <Link href="mailto:legal@solarithm.com">legal@solarithm.com</Link>.
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
