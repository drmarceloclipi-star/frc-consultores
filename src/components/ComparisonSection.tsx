import { getTranslations, type Locale } from "@/lib/translations"
import { TechGrid } from "./TechGrid"

interface StatItem {
  number: string
  description: string
  citation: string
}

function ComparisonStat({ stat }: { stat: StatItem }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mb-3 font-mono text-4xl font-semibold tracking-tight text-frc-bronze [font-variant-numeric:tabular-nums] md:text-5xl">
        {stat.number}
      </div>
      <p className="mb-2 text-sm font-normal text-frc-muted md:text-base">
        {stat.description}
      </p>
      <p className="text-xs font-normal text-frc-muted md:text-sm">
        {stat.citation}
      </p>
    </div>
  )
}

interface ComparisonSectionProps {
  locale?: Locale
}

export function ComparisonSection({ locale = "en" }: ComparisonSectionProps) {
  const t = getTranslations(locale)

  const oldGenItems = t.comparison.oldItems
  const newGenItems = t.comparison.newItems
  const stats = t.comparison.stats
  return (
    <section
      id="comparison"
      className="relative w-full bg-[#f8f9fa] py-16 md:py-32"
    >
      <TechGrid />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 flex flex-col items-center text-center md:mb-20 lg:mb-24">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-frc-muted">
            <span className="text-frc-bronze">{"//"}</span> {t.comparison.eyebrow}
          </p>
          {/* Main Heading */}
          <h2 className="font-display mb-6 text-4xl font-semibold leading-tight text-[#2f4858] md:text-5xl">
            {t.comparison.heading}
          </h2>

          {/* Subheading */}
          <p className="mx-auto max-w-2xl text-base font-normal text-frc-muted leading-relaxed md:text-lg">
            {t.comparison.intro}
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="relative mb-16 md:mb-24 lg:mb-32">
          {/* Desktop layout: 2 columns with VS badge */}
          <div className="hidden md:grid grid-cols-2 gap-12 lg:gap-16">
            {/* Old Generation Column */}
            <div className="flex flex-col">
              <h3 className="mb-8 text-2xl font-bold text-[#2f4858] lg:text-3xl">
                {t.comparison.oldGeneration}
              </h3>

              <div className="space-y-4">
                {oldGenItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="mt-1 flex-shrink-0 text-lg text-frc-muted">
                      →
                    </span>
                    <p className="text-base font-normal text-frc-muted leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* VS Badge - Centered */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#2f4858] lg:h-20 lg:w-20">
                <span className="text-2xl font-bold text-[#c9a961] lg:text-3xl">
                  VS
                </span>
              </div>
            </div>

            {/* New Generation Column */}
            <div className="flex flex-col border-l border-l-frc-bronze pl-6 lg:pl-8">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#2f4858] lg:text-3xl">
                  {t.comparison.newGeneration}
                </h3>
                <p className="text-sm font-normal text-frc-bronze lg:text-base">
                  {t.comparison.agentic}
                </p>
              </div>

              <div className="space-y-4">
                {newGenItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="mt-1 flex-shrink-0 text-lg text-frc-bronze">
                      ✓
                    </span>
                    <p className="text-base font-normal text-frc-muted leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile/Tablet layout: Stacked */}
          <div className="md:hidden">
            {/* Old Generation */}
            <div className="mb-12 flex flex-col">
              <h3 className="mb-6 text-2xl font-bold text-[#2f4858]">
                {t.comparison.oldGeneration}
              </h3>
              <div className="space-y-3">
                {oldGenItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="mt-1 flex-shrink-0 text-lg text-frc-muted">
                      →
                    </span>
                    <p className="text-base font-normal text-frc-muted leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* VS Badge Mobile */}
            <div className="mb-12 flex justify-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2f4858]">
                <span className="text-xl font-bold text-[#c9a961]">VS</span>
              </div>
            </div>

            {/* New Generation */}
            <div className="flex flex-col border-l border-l-frc-bronze pl-4">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-[#2f4858]">
                  {t.comparison.newGeneration}
                </h3>
                <p className="text-sm font-normal text-frc-bronze">
                  {t.comparison.agentic}
                </p>
              </div>

              <div className="space-y-3">
                {newGenItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="mt-1 flex-shrink-0 text-lg text-frc-bronze">
                      ✓
                    </span>
                    <p className="text-base font-normal text-frc-muted leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="relative flex flex-col items-center border-t border-t-gray-200 pt-12 md:pt-20 lg:pt-24">
          {/* Heading */}
          <h3 className="mb-6 text-2xl font-bold text-[#2f4858] md:text-3xl">
            {t.comparison.breakthrough}
          </h3>

          {/* Intro Text */}
          <p className="mx-auto mb-10 max-w-2xl text-center text-sm font-normal text-frc-muted leading-relaxed md:mb-16 md:text-base">
            {t.comparison.breakthroughText}
          </p>

          {/* Stats Grid */}
          <div className="w-full bg-white">
            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 px-4 py-10 md:grid-cols-3 md:gap-12 md:px-6 md:py-16 lg:gap-16 lg:px-8">
              {stats.map((stat, index) => (
                <ComparisonStat key={index} stat={stat} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
