"use client"

import { useState } from "react"
import { getTranslations, type Locale } from "@/lib/translations"

interface CaseStudy {
  id: number
  tabLabel: string
  category: string
  heading: string
  challenge: string
  solution: string
  behindScenes: string
  results: string[]
  team: string
}

interface CaseStudiesSectionProps {
  locale?: Locale
}

export function CaseStudiesSection({ locale = "en" }: CaseStudiesSectionProps) {
  const t = getTranslations(locale)
  const [activeTab, setActiveTab] = useState(0)

  const caseStudies: CaseStudy[] = t.caseStudies.cases.map((c, index) => ({
    id: index,
    tabLabel: c.tabLabel,
    category: c.category,
    heading: c.heading,
    challenge: c.challenge,
    solution: c.solution,
    behindScenes: c.behindScenes,
    results: c.results,
    team: c.team,
  }))

  const currentCase = caseStudies[activeTab]

  return (
    <section id="case-studies" className="w-full bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          {/* Heading with colored text */}
          <h2 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            <span className="text-[#2f4858]">{t.caseStudies.heading1}</span>
            <span className="text-[#c9a961]">{t.caseStudies.heading2}</span>
          </h2>

          {/* Subtitle */}
          <p className="max-w-2xl text-base sm:text-lg font-normal text-[#6b8393] leading-relaxed">
            {t.caseStudies.intro}
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="mb-12 flex flex-wrap gap-4 sm:gap-6 lg:mb-16">
          {caseStudies.map((caseStudy, index) => (
            <button
              key={caseStudy.id}
              onClick={() => setActiveTab(index)}
              className={`px-4 sm:px-6 py-3 text-sm sm:text-base font-semibold transition-all duration-300 ease-out border-b-4 ${
                activeTab === index
                  ? "border-[#c9a961] text-[#c9a961]"
                  : "border-transparent text-[#2f4858] hover:bg-gray-100"
              }`}
              aria-selected={activeTab === index}
              role="tab"
            >
              {caseStudy.tabLabel}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mt-12 sm:mt-16 lg:mt-20">
          {/* Category Badge */}
          <div className="mb-6">
            <span className="inline-block text-xs sm:text-sm font-semibold text-[#c9a961] uppercase tracking-wide">
              {currentCase.category}
            </span>
          </div>

          {/* Main Heading */}
          <h3 className="mb-8 text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2f4858]">
            {currentCase.heading}
          </h3>

          {/* Content Sections */}
          <div className="space-y-8 sm:space-y-10">
            {/* The Challenge */}
            <div>
              <h4 className="mb-3 text-lg sm:text-xl lg:text-2xl font-bold text-[#2f4858]">
                {t.caseStudies.theChallenge}
              </h4>
              <p className="text-base sm:text-lg text-[#6b8393] leading-relaxed">
                {currentCase.challenge}
              </p>
            </div>

            {/* The Solution */}
            <div>
              <h4 className="mb-3 text-lg sm:text-xl lg:text-2xl font-bold text-[#2f4858]">
                {t.caseStudies.theSolution}
              </h4>
              <p className="text-base sm:text-lg text-[#6b8393] leading-relaxed">
                {currentCase.solution}
              </p>
            </div>

            {/* Behind the Scenes */}
            <div>
              <h4 className="mb-3 text-lg sm:text-xl lg:text-2xl font-bold text-[#2f4858]">
                {t.caseStudies.behindScenes}
              </h4>
              <p className="text-base sm:text-lg text-[#6b8393] leading-relaxed">
                {currentCase.behindScenes}
              </p>
            </div>

            {/* Results & Impact */}
            <div>
              <h4 className="mb-4 text-lg sm:text-xl lg:text-2xl font-bold text-[#2f4858]">
                {t.caseStudies.resultsImpact}
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                {currentCase.results.map((result, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-base sm:text-lg text-[#6b8393] leading-relaxed"
                  >
                    <span className="mt-1 flex-shrink-0 text-[#c9a961] font-semibold">
                      ✓
                    </span>
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Team */}
            <div>
              <p className="text-base sm:text-lg text-[#6b8393]">
                <span className="font-semibold text-[#2f4858]">{t.caseStudies.team}</span>{" "}
                {currentCase.team}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
