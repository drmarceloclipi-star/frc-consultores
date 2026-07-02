import Link from "next/link"
import { getTranslations, type Locale } from "@/lib/translations"
import { HeroIllustration } from "./HeroIllustration"

interface HeroSectionProps {
  locale?: Locale
}

const registryItems: Record<Locale, string[]> = {
  pt: [
    "CNPJ 22.052.463/0001-30",
    "CNAE 62.03-1 · software não-customizável",
    "CNAE 62.02-3 · software customizável",
    "CNAE 62.04-0 · consultoria em TI",
    "CNAE 63.11-9 · hospedagem e dados",
    "NIRE 26.2.0224315-1 · JUCEPE",
    "empresa desde 2015 · software desde 2026",
    "sede Recife · PE",
    "desenvolvimento Joinville · SC",
  ],
  en: [
    "CNPJ 22.052.463/0001-30",
    "CNAE 62.03-1 · non-customizable software",
    "CNAE 62.02-3 · customizable software",
    "CNAE 62.04-0 · IT consulting",
    "CNAE 63.11-9 · hosting and data",
    "NIRE 26.2.0224315-1 · JUCEPE",
    "company since 2015 · software since 2026",
    "HQ Recife · Brazil",
    "development Joinville · Brazil",
  ],
}

const HeroSection = ({ locale = "en" }: HeroSectionProps) => {
  const t = getTranslations(locale)
  const registry = registryItems[locale]
  return (
    <section className="relative w-full min-h-[540px] bg-[#fafbfc] pt-20 md:pt-24 overflow-hidden">
      {/* Drifting blueprint grid */}
      <div className="absolute -inset-[80px] frc-drift pointer-events-none" aria-hidden>
        <svg className="w-[calc(100%+160px)] h-[calc(100%+160px)] opacity-[0.04]">
          <defs>
            <pattern
              id="geometric-pattern"
              patternUnits="userSpaceOnUse"
              width="80"
              height="80"
            >
              <line x1="0" y1="0" x2="80" y2="80" stroke="#2f4858" strokeWidth="1" />
              <line x1="80" y1="0" x2="0" y2="80" stroke="#2f4858" strokeWidth="1" />
              <rect x="0" y="0" width="80" height="80" fill="none" stroke="#2f4858" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#geometric-pattern)" />
        </svg>
      </div>

      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-16 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-8 items-center">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            {/* Subtitle */}
            <p className="frc-rise frc-rise-1 mb-6 font-mono text-xs sm:text-sm uppercase tracking-[0.2em] text-[#6b8393]">
              {t.hero.subtitle}
            </p>

            {/* Main Heading */}
            {/* No entrance animation: this is the LCP element */}
            <h1 className="font-display mb-4 text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.05]">
              <span className="text-[#22333f]">{t.hero.titlePart1}</span>{" "}
              <span className="text-[#c9a961]">{t.hero.titlePart2}</span>
            </h1>

            {/* Gold rule */}
            <div className="frc-rule mb-8 h-[3px] w-24 rounded-full bg-gradient-to-r from-[#c9a961] to-[#a8873e]" aria-hidden />

            {/* Body Text */}
            <p className="frc-rise frc-rise-3 mb-10 max-w-xl text-base md:text-lg font-normal text-[#6b8393] leading-relaxed">
              {t.hero.description}
            </p>

            {/* Links/CTA */}
            <div className="frc-rise frc-rise-4 flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center lg:justify-start items-center">
              <Link
                href="#comparison"
                className="text-[#c9a961] font-medium text-base hover:text-[#a8873e] transition-colors duration-200"
              >
                {t.hero.seeDifference}
              </Link>
              <Link
                href="#solutions"
                className="text-[#c9a961] font-medium text-base hover:text-[#a8873e] transition-colors duration-200"
              >
                {t.hero.viewExamples}
              </Link>
            </div>
          </div>

          {/* Illustration */}
          <div className="frc-rise frc-rise-3 w-full px-6 sm:px-12 lg:px-0">
            <HeroIllustration />
          </div>
        </div>
      </div>

      {/* Registry ticker — the company's public record, in motion */}
      <div className="relative z-10 border-t border-b border-[#2f4858]/10 bg-white/60 backdrop-blur-sm overflow-hidden">
        <div className="frc-ticker flex w-max whitespace-nowrap py-3">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex" aria-hidden={copy === 1}>
              {registry.map((item) => (
                <span
                  key={`${copy}-${item}`}
                  className="mx-6 font-mono text-xs tracking-wide text-[#2f4858]/70"
                >
                  {item}
                  <span className="ml-12 text-[#c9a961]">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export { HeroSection }
