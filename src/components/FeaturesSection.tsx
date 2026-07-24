import Link from "next/link"
import { getTranslations, type Locale } from "@/lib/translations"
import { TechGrid } from "./TechGrid"

interface FeatureCardProps {
  title: string
  description: string
  ctaText: string
  href: string
}

function FeatureCard({ title, description, ctaText, href }: FeatureCardProps) {
  return (
    <Link href={href} className="group">
      <div className="frc-card flex flex-col h-full bg-white border border-[#e5e7eb] rounded-lg sm:rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.08)] p-8 sm:p-10 overflow-hidden">
        {/* Title */}
        <h3 className="mb-4 text-xl sm:text-2xl font-bold text-[#2f4858]">
          {title}
        </h3>

        {/* Description - flex-grow pushes CTA to bottom */}
        <p className="mb-6 flex-grow text-base sm:text-[15px] text-frc-muted leading-[1.6] font-normal">
          {description}
        </p>

        {/* CTA */}
        <p className="text-base sm:text-[15px] font-semibold text-frc-bronze underline decoration-1 underline-offset-4 transition-colors duration-200 group-hover:text-frc-ink">
          {ctaText}
        </p>
      </div>
    </Link>
  )
}

interface FeaturesSectionProps {
  locale?: Locale
}

export function FeaturesSection({ locale = "en" }: FeaturesSectionProps) {
  const t = getTranslations(locale)
  const features = t.features.cards
  return (
    <section className="relative w-full bg-white py-20 sm:py-24 lg:py-24">
      <TechGrid />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-frc-muted">
            <span className="text-frc-bronze">{"//"}</span> {t.features.eyebrow}
          </p>
          {/* Heading */}
          <h2 className="font-display mb-4 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
            <span className="text-[#2f4858]">{t.features.heading1}</span>
            <span className="text-frc-bronze">{t.features.heading2}</span>
          </h2>

          {/* Subtitle */}
          <p className="max-w-2xl text-base sm:text-lg font-normal text-frc-muted leading-relaxed">
            {t.features.subtitle}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-8">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              ctaText={feature.ctaText}
              href={feature.href}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
