import { ArrowUpRight, MoveRight } from "lucide-react"
import { ContactTrigger } from "./ContactTrigger"
import { Footer } from "./Footer"
import type { Locale } from "@/lib/translations"

interface CaseStudy {
  index: string
  name: string
  category: string
  title: string
  description: string
  capabilities: readonly string[]
  url: string
  domain: string
  links?: readonly {
    label: string
    url: string
  }[]
}

interface CasesPageProps {
  locale: Locale
  content: {
    eyebrow: string
    title: string
    intro: string
    cases: readonly CaseStudy[]
    visitLabel: string
    proofLabel: string
    proofText: string
    ctaTitle: string
    ctaDescription: string
    ctaLabel: string
  }
}

export function CasesPage({ locale, content }: CasesPageProps) {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex-1">
        <section className="border-b border-gray-200 bg-frc-ink text-white">
          <div className="mx-auto max-w-6xl px-4 pb-16 pt-12 sm:px-6 md:py-28 lg:px-8">
            <div className="grid gap-10 md:grid-cols-[0.8fr_2.2fr]">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-frc-gold">
                {content.eyebrow}
              </p>
              <div>
                <h1 className="font-display max-w-4xl text-4xl font-semibold leading-[1.05] sm:text-5xl md:text-6xl">
                  {content.title}
                </h1>
                <p className="mt-7 max-w-2xl text-base leading-relaxed text-gray-300 md:text-lg">
                  {content.intro}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="cases-index-title" className="bg-white">
          <h2 id="cases-index-title" className="sr-only">
            {content.eyebrow}
          </h2>
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            {content.cases.map((caseStudy) => (
              <article
                key={caseStudy.name}
                className="grid gap-7 border-b border-gray-200 py-14 md:grid-cols-[0.55fr_1.15fr_1.3fr] md:gap-10 md:py-20"
              >
                <div>
                  <p className="font-mono text-sm font-semibold text-frc-bronze">
                    {caseStudy.index}
                  </p>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-frc-muted">
                    {caseStudy.category}
                  </p>
                </div>

                <div>
                  <h3 className="font-display text-4xl font-semibold leading-none text-frc-ink md:text-5xl">
                    {caseStudy.name}
                  </h3>
                  <p className="mt-5 text-xl font-semibold leading-snug text-frc-slate">
                    {caseStudy.title}
                  </p>
                  <a
                    href={caseStudy.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-7 inline-flex min-h-11 items-center gap-2 border-b border-frc-bronze pb-1 text-sm font-semibold text-frc-bronze transition-colors hover:text-frc-ink"
                  >
                    {content.visitLabel}
                    <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                    <span className="sr-only">{caseStudy.domain}</span>
                  </a>
                </div>

                <div className="border-l-2 border-frc-gold pl-6 md:pl-8">
                  <p className="text-base leading-relaxed text-frc-muted">
                    {caseStudy.description}
                  </p>
                  {caseStudy.links ? (
                    <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1">
                      {caseStudy.links.map((link) => (
                        <a
                          key={link.url}
                          href={link.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex min-h-11 items-center text-sm font-semibold text-frc-bronze underline decoration-1 underline-offset-4 transition-colors hover:text-frc-ink"
                        >
                          {link.label}
                          <ArrowUpRight aria-hidden="true" className="ml-1 h-4 w-4" />
                        </a>
                      ))}
                    </div>
                  ) : null}
                  <ul className="mt-7 flex flex-wrap gap-2" aria-label={caseStudy.name}>
                    {caseStudy.capabilities.map((capability) => (
                      <li
                        key={capability}
                        className="rounded-full border border-gray-300 px-3 py-1.5 text-xs font-medium text-frc-slate"
                      >
                        {capability}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-8 font-mono text-xs text-frc-muted">
                    {caseStudy.domain}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <aside className="border-b border-gray-200 bg-[#f5f1e8] py-12">
          <div className="mx-auto grid max-w-6xl gap-5 px-4 sm:px-6 md:grid-cols-[0.8fr_2.2fr] lg:px-8">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-frc-bronze">
              {content.proofLabel}
            </p>
            <p className="max-w-3xl text-base leading-relaxed text-frc-slate">
              {content.proofText}
            </p>
          </div>
        </aside>

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
      <Footer locale={locale} path="/cases" />
    </div>
  )
}
