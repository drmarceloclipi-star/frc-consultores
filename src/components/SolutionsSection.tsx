import { Briefcase, Cog, Wrench } from "lucide-react"
import { SolutionCard } from "./SolutionCard"
import { getTranslations, type Locale } from "@/lib/translations"
import { TechGrid } from "./TechGrid"

interface SolutionsSectionProps {
  locale?: Locale
}

export function SolutionsSection({ locale = "en" }: SolutionsSectionProps) {
  const t = getTranslations(locale)

  const solutions = [
    {
      id: "consulting",
      title: t.solutions.consulting.title,
      subtitle: t.solutions.consulting.subtitle,
      description: t.solutions.consulting.description,
      icon: Briefcase,
      includes: t.solutions.consulting.includes,
    },
    {
      id: "automation",
      title: t.solutions.automation.title,
      subtitle: t.solutions.automation.subtitle,
      description: t.solutions.automation.description,
      icon: Cog,
      includes: t.solutions.automation.includes,
    },
    {
      id: "toolkit",
      title: t.solutions.toolkit.title,
      subtitle: t.solutions.toolkit.subtitle,
      description: t.solutions.toolkit.description,
      icon: Wrench,
      includes: t.solutions.toolkit.includes,
    },
  ]
  return (
    <section id="solutions" className="relative w-full bg-white py-20 md:py-32 lg:py-32">
      <TechGrid />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-start md:mb-20 lg:mb-24">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-frc-muted">
            <span className="text-frc-bronze">{"//"}</span> {t.solutions.eyebrow}
          </p>
          {/* Heading */}
          <h2 className="font-display mb-4 text-4xl font-semibold leading-tight md:text-5xl">
            <span className="text-[#2f4858]">{t.solutions.heading1}</span>
            <span className="text-frc-bronze">{t.solutions.heading2}</span>
          </h2>

          {/* Intro Text */}
          <p className="max-w-3xl text-base font-normal text-frc-muted leading-relaxed md:text-lg">
            {t.solutions.intro}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => (
            <SolutionCard
              key={solution.id}
              title={solution.title}
              subtitle={solution.subtitle}
              description={solution.description}
              icon={solution.icon}
              includes={solution.includes}
              solutionType={solution.title}
              locale={locale}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
