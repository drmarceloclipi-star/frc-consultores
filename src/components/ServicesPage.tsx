import { Check, MoveRight } from "lucide-react"
import { ContactTrigger } from "./ContactTrigger"
import { Footer } from "./Footer"
import type { Locale } from "@/lib/translations"

interface Service {
  index: string
  title: string
  summary: string
  deliverables: readonly string[]
}

interface Step {
  index: string
  title: string
  description: string
}

interface ServicesPageProps {
  locale: Locale
  content: {
    eyebrow: string
    title: string
    intro: string
    services: readonly Service[]
    processEyebrow: string
    processTitle: string
    steps: readonly Step[]
    ctaTitle: string
    ctaDescription: string
    ctaLabel: string
  }
}

export function ServicesPage({ locale, content }: ServicesPageProps) {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex-1">
        <section className="border-b border-gray-200 bg-[#f5f1e8]">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-16 pt-12 sm:px-6 md:grid-cols-[0.8fr_2.2fr] md:py-28 lg:px-8">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-frc-bronze">
              {content.eyebrow}
            </p>
            <div>
              <h1 className="font-display max-w-4xl text-4xl font-semibold leading-[1.05] text-frc-ink sm:text-5xl md:text-6xl">
                {content.title}
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-relaxed text-frc-muted md:text-lg">
                {content.intro}
              </p>
            </div>
          </div>
        </section>

        <section aria-labelledby="service-index-title" className="bg-white">
          <h2 id="service-index-title" className="sr-only">
            {content.eyebrow}
          </h2>
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            {content.services.map((service) => (
              <article
                key={service.index}
                className="grid gap-6 border-b border-gray-200 py-12 md:grid-cols-[0.8fr_1.15fr_1.05fr] md:gap-10 md:py-16"
              >
                <div className="flex items-start gap-4">
                  <span className="font-mono text-sm font-semibold text-frc-bronze">
                    {service.index}
                  </span>
                  <div className="mt-2 h-px flex-1 bg-frc-gold/70" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-display text-3xl font-semibold leading-tight text-frc-ink">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-frc-muted">
                    {service.summary}
                  </p>
                </div>
                <ul className="space-y-3" aria-label={service.title}>
                  {service.deliverables.map((deliverable) => (
                    <li
                      key={deliverable}
                      className="flex items-start gap-3 text-sm leading-relaxed text-frc-slate"
                    >
                      <Check
                        aria-hidden="true"
                        className="mt-0.5 h-4 w-4 shrink-0 text-frc-bronze"
                      />
                      <span>{deliverable}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-frc-ink py-16 text-white md:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 md:grid-cols-[0.8fr_2.2fr]">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-frc-gold">
                {content.processEyebrow}
              </p>
              <h2 className="font-display max-w-3xl text-4xl font-semibold leading-tight md:text-5xl">
                {content.processTitle}
              </h2>
            </div>
            <ol className="mt-14 grid gap-px overflow-hidden border border-white/20 bg-white/20 md:grid-cols-5">
              {content.steps.map((step) => (
                <li key={step.index} className="bg-frc-ink p-6">
                  <span className="font-mono text-xs font-semibold text-frc-gold">
                    {step.index}
                  </span>
                  <h3 className="mt-12 text-lg font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-300">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-frc-gold py-16 md:py-20">
          <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:px-6 md:flex-row md:items-end md:justify-between lg:px-8">
            <div>
              <h2 className="font-display max-w-2xl text-3xl font-semibold text-frc-ink md:text-4xl">
                {content.ctaTitle}
              </h2>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-frc-slate">
                {content.ctaDescription}
              </p>
            </div>
            <ContactTrigger
              locale={locale}
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-md bg-frc-ink px-6 py-3 font-semibold text-white transition-colors hover:bg-frc-slate"
            >
              {content.ctaLabel}
              <MoveRight aria-hidden="true" className="h-4 w-4" />
            </ContactTrigger>
          </div>
        </section>
      </main>
      <Footer locale={locale} path="/services" />
    </div>
  )
}
