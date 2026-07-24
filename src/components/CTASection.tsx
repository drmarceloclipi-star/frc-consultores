import Link from "next/link"
import { getTranslations, type Locale } from "@/lib/translations"
import { ContactTrigger } from "./ContactTrigger"

interface CTASectionProps {
  locale?: Locale
}

const CTASection = ({ locale = "en" }: CTASectionProps) => {
  const t = getTranslations(locale)

  return (
    <section className="frc-glow relative w-full min-h-[500px] flex items-center justify-center px-6 sm:px-6 py-[120px] md:py-[120px] lg:py-[120px] overflow-hidden">
      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-[700px]">
        {/* Heading */}
        <h2 className="font-display mb-2 sm:mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.2] text-white">
          {t.cta.heading}
        </h2>

        {/* Subheading */}
        <h3 className="font-display mb-6 sm:mb-8 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold italic leading-[1.2] text-[#c9a961]">
          {t.cta.subheading}
        </h3>

        {/* Body Text */}
        <p className="mb-10 sm:mb-12 text-base md:text-lg font-normal text-white opacity-90 leading-[1.6]">
          {t.cta.description}
        </p>

        {/* Buttons Container */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center w-full sm:w-auto">
          {/* Primary Button */}
          <ContactTrigger
            locale={locale}
            className="inline-block px-8 py-3 sm:py-4 bg-frc-gold text-frc-ink font-semibold text-base rounded-lg transition-colors duration-200 hover:bg-[#d3b674] active:bg-[#c3a058] whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-frc-ink"
          >
            {t.cta.startConversation}
          </ContactTrigger>

          {/* Secondary Button */}
          <Link
            href={`/${locale}/about`}
            className="inline-block px-8 py-3 sm:py-4 border border-[#d3b674] text-[#d3b674] font-semibold text-base rounded-lg transition-all duration-200 hover:bg-[#d3b674]/10 active:bg-[#d3b674]/20 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-frc-ink"
          >
            {t.cta.exploreAcademy}
          </Link>
        </div>
      </div>
    </section>
  )
}

export { CTASection }
