"use client"

import { useState } from "react"
import Link from "next/link"
import { ContactFormModal } from "./ContactFormModal"
import { getTranslations, type Locale } from "@/lib/translations"

interface CTASectionProps {
  locale?: Locale
}

const CTASection = ({ locale = "en" }: CTASectionProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const t = getTranslations(locale)

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <section className="relative w-full min-h-[500px] bg-[#2f4858] flex items-center justify-center px-6 sm:px-6 py-[120px] md:py-[120px] lg:py-[120px] overflow-hidden">
      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-[700px]">
        {/* Heading */}
        <h2 className="mb-2 sm:mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.2] text-white">
          {t.cta.heading}
        </h2>

        {/* Subheading */}
        <h3 className="mb-6 sm:mb-8 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.2] text-[#c9a961]">
          {t.cta.subheading}
        </h3>

        {/* Body Text */}
        <p className="mb-10 sm:mb-12 text-base md:text-lg font-normal text-white opacity-90 leading-[1.6]">
          {t.cta.description}
        </p>

        {/* Buttons Container */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center w-full sm:w-auto">
          {/* Primary Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-block px-8 py-3 sm:py-4 bg-[#c9a961] text-[#2f4858] font-semibold text-base rounded-lg transition-colors duration-200 hover:bg-[#b39550] active:bg-[#a0845a] whitespace-nowrap cursor-pointer"
          >
            {t.cta.startConversation}
          </button>

          {/* Secondary Button */}
          <Link
            href={`/${locale}/academy`}
            className="inline-block px-8 py-3 sm:py-4 border border-[#c9a961] text-[#c9a961] font-semibold text-base rounded-lg transition-all duration-200 hover:bg-[#c9a961] hover:bg-opacity-10 active:bg-opacity-20 whitespace-nowrap"
          >
            {t.cta.exploreAcademy}
          </Link>
        </div>
      </div>

      <ContactFormModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </section>
  )
}

export { CTASection }
