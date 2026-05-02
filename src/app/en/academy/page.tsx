"use client"

import { useState } from "react"
import { ContactFormModal } from "@/components/ContactFormModal"

export default function Academy() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedTopic, setSelectedTopic] = useState<string>("")

  const handleOpenModal = (topic: string) => {
    setSelectedTopic(topic)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedTopic("")
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-1">
        {/* Header */}
        <section className="w-full bg-white py-20 md:py-32">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 flex flex-col items-center text-center">
              <h1 className="mb-6 text-4xl font-bold text-[#2f4858] md:text-5xl">
                Tavon <span className="text-[#c9a961]">Academy</span>
              </h1>

              <p className="mx-auto max-w-2xl text-base font-normal text-[#6b8393] leading-relaxed md:text-lg">
                Learn to harness the power of AI agents. From free introductory
                webinars to hands-on workshops, we&apos;ll help you and your team
                master AI agent platforms.
              </p>
            </div>
          </div>
        </section>

        {/* Free Webinar Section */}
        <section className="w-full bg-white py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-lg bg-[#3a4d5c] p-8 md:p-12 text-white">
              {/* FREE Badge */}
              <div className="mb-6">
                <span className="inline-block bg-[#c9a961] text-[#2f4858] px-3 py-1 rounded-full text-sm font-bold">
                  FREE
                </span>
              </div>

              {/* Title */}
              <h2 className="mb-4 text-2xl md:text-3xl font-bold">
                Introducing Claude Cowork: Using Local Agents to Get Work Done
              </h2>

              {/* Description */}
              <p className="mb-8 text-base leading-relaxed opacity-90">
                Agents are everywhere. Everyone&apos;s talking about what agents could do. But how do you actually deploy an agent today to get real work done?
              </p>

              {/* Two Column Content */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
                {/* What You&apos;ll Learn */}
                <div>
                  <h3 className="text-lg font-bold mb-4">What You&apos;ll Learn</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <span className="text-[#c9a961] mt-1">•</span>
                      <span>Why new agent architecture makes these different from chatbots</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#c9a961] mt-1">•</span>
                      <span>Real examples of multi-step workflows running autonomously</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#c9a961] mt-1">•</span>
                      <span>How to start small, experiment fast, and scale what works</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#c9a961] mt-1">•</span>
                      <span>Your first practical steps with Claude Cowork</span>
                    </li>
                  </ul>
                </div>

                {/* Details */}
                <div>
                  <h3 className="text-lg font-bold mb-4">Details</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm opacity-75">Duration:</p>
                      <p className="font-semibold">45 minutes + Q&A</p>
                    </div>
                    <div>
                      <p className="text-sm opacity-75">Format:</p>
                      <p className="font-semibold">Live online session</p>
                    </div>
                    <div>
                      <p className="text-sm opacity-75">Hosted by:</p>
                      <p className="font-semibold">Matthias Lübken</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quote */}
              <p className="mb-8 text-sm italic opacity-75">
                No hype. No theoretical roadmaps. Just what actually works.
              </p>

              {/* Dates Section */}
              <div className="bg-[#2f4858] rounded p-6 mb-8">
                <h3 className="text-lg font-bold mb-4">Dates</h3>
                <p className="mb-6 opacity-90">
                  We&apos;re currently planning the next live sessions. Request more information and we&apos;ll let you know as soon as dates are announced.
                </p>
                <button onClick={() => handleOpenModal("Claude Cowork Webinar")} className="border-2 border-[#c9a961] text-[#c9a961] px-6 py-2 rounded font-semibold hover:bg-[#c9a961] hover:text-[#2f4858] transition cursor-pointer">
                  Request More Information
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Workshops Section */}
        <section className="w-full bg-white py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl md:text-4xl font-bold text-[#2f4858]">
                Workshops
              </h2>
              <p className="text-base text-[#6b8393]">
                Practical, hands-on workshops designed to help everyone leverage AI agents in their daily work.
              </p>
            </div>

            {/* Claude for Everyone Workshop */}
            <div className="mb-12 border-l-4 border-l-[#c9a961] p-8 bg-white rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-[#2f4858] mb-4">
                Claude for Everyone
              </h3>
              <p className="text-[#6b8393] mb-8">
                After engineers have used Claude for development, it&apos;s time to leverage it for the rest of professional users. A hands-on workshop series that teaches knowledge workers how to use Claude Cowork for daily tasks.
              </p>

              {/* What You&apos;ll Learn Grid */}
              <div className="mb-8">
                <h4 className="text-lg font-bold text-[#2f4858] mb-4">What You&apos;ll Learn</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="font-bold text-[#c9a961] mb-1">1. Foundations: From Chat to Cowork</p>
                    <p className="text-sm text-[#6b8393]">Set up Claude Cowork, understand the core task loop, and complete your first real task</p>
                  </div>
                  <div>
                    <p className="font-bold text-[#c9a961] mb-1">3. Documents & Data Analysis</p>
                    <p className="text-sm text-[#6b8393]">Produce slide decks, reports, spreadsheets and run analysis at scale using subagents</p>
                  </div>
                  <div>
                    <p className="font-bold text-[#c9a961] mb-1">2. Coordination & Communication</p>
                    <p className="text-sm text-[#6b8393]">Connect email, calendar, and other tools to build coordination workflows</p>
                  </div>
                  <div>
                    <p className="font-bold text-[#c9a961] mb-1">4. Automation, Workflows & Making It Stick</p>
                    <p className="text-sm text-[#6b8393]">Set up scheduled tasks, write multi-step prompts, and plan team rollout</p>
                  </div>
                </div>
              </div>

              {/* Format and Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-bold text-[#2f4858] mb-3">Format</h4>
                  <ul className="text-sm text-[#6b8393] space-y-1">
                    <li>• 4 Live Online Sessions</li>
                    <li>• 1.5 hours each · 18:00 – 19:30 CET</li>
                    <li>• Interactive with Q&A</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-[#2f4858] mb-3">Details</h4>
                  <p className="text-sm text-[#6b8393]">Format: 4 live online sessions · 1.5 hours each</p>
                  <p className="text-sm text-[#6b8393]">Dates: To be announced</p>
                </div>
              </div>

              <button onClick={() => handleOpenModal("Claude for Everyone Workshop")} className="border-2 border-[#c9a961] text-[#c9a961] px-6 py-2 rounded font-semibold hover:bg-[#c9a961] hover:text-white transition cursor-pointer">
                Request More Information
              </button>
            </div>

            {/* Workshop Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Online Workshops Card */}
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-[#2f4858] mb-4">
                  Online Workshops
                </h3>
                <p className="text-sm text-[#6b8393] mb-6">
                  Hands-on training sessions where you&apos;ll learn to use AI agent platforms like Claude Cowork, build simple automations, and apply best practices.
                </p>

                <div className="mb-6 space-y-2">
                  <p className="text-sm text-[#6b8393]">✓ Interactive live sessions</p>
                  <p className="text-sm text-[#6b8393]">✓ Practice exercises and examples</p>
                  <p className="text-sm text-[#6b8393]">✓ Certificate of completion</p>
                </div>

                <div className="mb-6">
                  <p className="text-sm font-bold text-[#2f4858] mb-2">Next Cohort</p>
                  <p className="text-sm text-[#6b8393]">Dates to be announced</p>
                </div>

                <button onClick={() => handleOpenModal("Online Workshops")} className="w-full border-2 border-[#c9a961] text-[#c9a961] px-4 py-2 rounded font-semibold hover:bg-[#c9a961] hover:text-white transition cursor-pointer">
                  Request More Information
                </button>
              </div>

              {/* On-Site Workshops Card */}
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-[#2f4858] mb-4">
                  On-Site Workshops
                </h3>
                <p className="text-sm text-[#6b8393] mb-6">
                  Immersive in-person training tailored to your needs. We come to a location near you and work with your specific use cases and tools.
                </p>

                <div className="mb-6 space-y-2">
                  <p className="text-sm text-[#6b8393]">✓ Exchange with other peers</p>
                  <p className="text-sm text-[#6b8393]">✓ 1 day intensive format</p>
                </div>

                <div className="mb-6">
                  <p className="text-sm font-bold text-[#2f4858] mb-2">Locations</p>
                  <p className="text-sm text-[#6b8393]">Cologne • Berlin • London</p>
                  <p className="text-sm text-[#6b8393]">(Dates TBD)</p>
                </div>

                <button onClick={() => handleOpenModal("On-Site Workshops")} className="w-full border-2 border-[#c9a961] text-[#c9a961] px-4 py-2 rounded font-semibold hover:bg-[#c9a961] hover:text-white transition cursor-pointer">
                  Request More Information
                </button>
              </div>

              {/* Custom Training Card */}
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-[#2f4858] mb-4">
                  Custom Training
                </h3>
                <p className="text-sm text-[#6b8393] mb-6">
                  Need something specific? We create custom training programs for your organization, covering exactly what your team needs to know.
                </p>

                <div className="mb-6 space-y-2">
                  <p className="text-sm text-[#6b8393]">✓ Fully customized curriculum</p>
                  <p className="text-sm text-[#6b8393]">✓ Your schedule and format</p>
                  <p className="text-sm text-[#6b8393]">✓ Ongoing support options</p>
                </div>

                <div className="mb-6">
                  <p className="text-sm font-bold text-[#2f4858] mb-2">Perfect For</p>
                  <p className="text-sm text-[#6b8393]">Executive workshops, department-specific training, or enterprise-wide programs</p>
                </div>

                <button onClick={() => handleOpenModal("Custom Training")} className="w-full border-2 border-[#c9a961] text-[#c9a961] px-4 py-2 rounded font-semibold hover:bg-[#c9a961] hover:text-white transition cursor-pointer">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full bg-white py-16 md:py-24">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="mb-4 text-3xl font-bold text-[#2f4858]">
              Questions About Training?
            </h2>
            <p className="mb-8 text-base text-[#6b8393]">
              We&apos;re happy to discuss which training option is right for your team and organization.
            </p>
            <button onClick={() => handleOpenModal("Training Inquiry")} className="bg-[#c9a961] text-[#2f4858] px-8 py-3 rounded font-semibold hover:bg-[#b0925a] transition cursor-pointer">
              Get in Touch
            </button>
          </div>
        </section>

        <ContactFormModal isOpen={isModalOpen} onClose={handleCloseModal} solutionType={selectedTopic} />
      </main>
    </div>
  )
}
