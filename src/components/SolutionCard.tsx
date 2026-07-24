import { LucideIcon } from "lucide-react"
import { type Locale } from "@/lib/translations"
import { ContactTrigger } from "./ContactTrigger"

interface SolutionCardProps {
  title: string
  subtitle: string
  description: string
  icon: LucideIcon
  includes: readonly string[]
  solutionType: string
  locale?: Locale
}

export function SolutionCard({
  title,
  subtitle,
  description,
  icon: Icon,
  includes,
  solutionType,
  locale = "en",
}: SolutionCardProps) {
  return (
    <div className="frc-card flex flex-col h-full bg-white border border-[#e5e7eb] rounded-lg shadow-[0_1px_3px_rgba(0,0,0,0.1)] p-8 overflow-hidden">
      {/* Icon */}
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-frc-gold">
        <Icon className="h-8 w-8 text-frc-ink" strokeWidth={2} />
      </div>

      {/* Title */}
      <h3 className="mb-4 text-2xl font-bold text-[#2f4858]">{title}</h3>

      {/* Subtitle */}
      <p className="mb-6 text-sm font-semibold text-frc-bronze">{subtitle}</p>

      {/* Description */}
      <p className="mb-6 text-sm font-normal text-frc-muted leading-relaxed">
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
              className="flex items-start gap-3 text-sm font-normal text-frc-muted leading-[1.5]"
            >
              <span className="mt-0.5 flex-shrink-0 text-frc-bronze">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Button - margin-top: auto pushes it to bottom */}
      <ContactTrigger
        locale={locale}
        solutionType={solutionType}
        className="mt-auto inline-flex w-full items-center justify-center rounded-lg bg-frc-gold px-6 py-3 text-sm font-semibold text-frc-ink transition-colors duration-200 hover:bg-[#d3b674] active:bg-[#c3a058] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-frc-bronze focus-visible:ring-offset-2"
      >
        {locale === "pt" ? "Discutir Suas Necessidades" : "Discuss Your Needs"}
      </ContactTrigger>
    </div>
  )
}
