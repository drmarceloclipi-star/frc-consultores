import Link from "next/link"
import { getTranslations, type Locale } from "@/lib/translations"

interface HeroSectionProps {
  locale?: Locale
}

const HeroSection = ({ locale = "en" }: HeroSectionProps) => {
  const t = getTranslations(locale)
  return (
    <section className="relative w-full min-h-[500px] bg-[#fafbfc] py-20 md:py-20 lg:py-20 overflow-hidden">
      {/* SVG Background Pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none"
        viewBox="0 0 1440 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="geometric-pattern"
            patternUnits="userSpaceOnUse"
            width="80"
            height="80"
          >
            <line
              x1="0"
              y1="0"
              x2="80"
              y2="80"
              stroke="#2f4858"
              strokeWidth="1"
            />
            <line
              x1="80"
              y1="0"
              x2="0"
              y2="80"
              stroke="#2f4858"
              strokeWidth="1"
            />
            <rect
              x="0"
              y="0"
              width="80"
              height="80"
              fill="none"
              stroke="#2f4858"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="1440" height="800" fill="url(#geometric-pattern)" />
      </svg>

      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Subtitle */}
          <p className="mb-6 text-base md:text-lg font-normal text-[#6b8393]">
            {t.hero.subtitle}
          </p>

          {/* Main Heading */}
          <h1 className="mb-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-[#2f4858]">{t.hero.titlePart1}</span>
            {" "}
            <span className="text-[#c9a961]">{t.hero.titlePart2}</span>
          </h1>

          {/* Body Text */}
          <p className="mb-10 max-w-xl text-base md:text-lg font-normal text-[#6b8393] leading-relaxed">
            {t.hero.description}
          </p>

          {/* Links/CTA */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center items-center">
            <Link
              href="#comparison"
              className="text-[#c9a961] font-medium text-base hover:text-[#b8985a] transition-colors duration-200"
            >
              {t.hero.seeDifference}
            </Link>
            <Link
              href="#case-studies"
              className="text-[#c9a961] font-medium text-base hover:text-[#b8985a] transition-colors duration-200"
            >
              {t.hero.viewExamples}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export { HeroSection }
