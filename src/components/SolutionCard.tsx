"use client"

import { LucideIcon } from "lucide-react"
import { type Locale } from "@/lib/translations"

interface SolutionCardProps {
  title: string
  subtitle: string
  description: string
  icon: LucideIcon
  includes: readonly string[]
  onDiscuss?: () => void
  locale?: Locale
}

export function SolutionCard({
  title,
  subtitle,
  description,
  icon: Icon,
  includes,
  onDiscuss,
  locale = "en",
}: SolutionCardProps) {
  return (
    <div className="frc-card flex flex-col h-full bg-white border border-[#e5e7eb] rounded-lg shadow-[0_1px_3px_rgba(0,0,0,0.1)] p-8 overflow-hidden">
      {/* Icon */}
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#c9a961]">
        <Icon className="h-8 w-8 text-white" strokeWidth={2} />
      </div>

      {/* Title */}
      <h3 className="mb-4 text-2xl font-bold text-[#2f4858]">{title}</h3>

      {/* Subtitle */}
      <p className="mb-6 text-sm font-semibold text-[#c9a961]">{subtitle}</p>

      {/* Description */}
      <p className="mb-6 text-sm font-normal text-[#6b8393] leading-relaxed">
        {description}
      </p>

      {/* Includes Section */}
      <div className="mb-8">
        <p className="mb-3 text-sm font-semibold text-[#2f4858]">
          {locale === "pt" ? "Inclui:" : "Includes:"}
        </p>
        <ul className="space-y-2">
          {includes.map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-3 text-sm font-normal text-[#6b8393] leading-[1.5]"
            >
              <span className="mt-0.5 flex-shrink-0 text-[#c9a961]">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Button - margin-top: auto pushes it to bottom */}
      <button
        onClick={onDiscuss}
        className="mt-auto inline-flex w-full items-center justify-center rounded-lg bg-[#c9a961] px-6 py-3 text-sm font-semibold text-[#2f4858] transition-colors duration-200 hover:bg-[#b8985a] active:bg-[#a88850] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a961] focus-visible:ring-offset-2"
      >
        {locale === "pt" ? "Discutir Suas Necessidades" : "Discuss Your Needs"}
      </button>
    </div>
  )
}
