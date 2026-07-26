import {
  ArrowRight,
  Check,
  Clock3,
  Code2,
  ExternalLink,
  ShieldCheck,
  Smartphone,
} from "lucide-react"
import { ContactTrigger } from "./ContactTrigger"
import { Footer } from "./Footer"
import type { AppProduct } from "@/lib/app-products"
import type { Locale } from "@/lib/translations"

interface AppProductsPageProps {
  locale: Locale
  content: ReturnType<typeof import("@/lib/app-products").getAppProductsContent>
}

function ProductCard({
  product,
  locale,
  content,
}: {
  product: AppProduct
  locale: Locale
  content: AppProductsPageProps["content"]
}) {
  return (
    <article
      id={product.id}
      className={`relative flex h-full flex-col border p-6 sm:p-7 ${
        product.featured
          ? "border-frc-gold bg-[#fffaf0] shadow-[0_18px_45px_-32px_rgba(34,51,63,0.5)]"
          : "border-gray-200 bg-white"
      }`}
    >
      {product.featured ? (
        <span className="absolute right-5 top-0 -translate-y-1/2 rounded-full bg-frc-ink px-3 py-1 font-mono text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-white">
          {content.featuredLabel}
        </span>
      ) : null}

      <div className="flex items-center justify-between gap-4">
        <span className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-frc-bronze">
          {product.timeline}
        </span>
        <Clock3 aria-hidden="true" className="h-4 w-4 text-frc-muted" />
      </div>
      <h3 className="font-display mt-5 text-3xl font-semibold leading-tight text-frc-ink">
        {product.name}
      </h3>
      <p className="mt-4 text-sm leading-relaxed text-frc-muted">{product.summary}</p>

      <div className="mt-7 border-y border-gray-200 py-5">
        <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-frc-muted">
          {content.startingAt}
        </span>
        <p className="mt-1 text-3xl font-bold tracking-tight text-frc-ink">
          {product.startingPrice}
          {product.priceSuffix ? (
            <span className="ml-1 text-base font-medium text-frc-muted">
              {product.priceSuffix}
            </span>
          ) : null}
        </p>
      </div>

      <p className="mt-5 text-sm leading-relaxed text-frc-slate">
        <span className="font-semibold">{content.bestForLabel}:</span>{" "}
        {product.bestFor}
      </p>
      <p className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-frc-muted">
        {content.includesLabel}
      </p>
      <ul className="mt-3 space-y-3">
        {product.includes.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-frc-slate">
            <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-frc-bronze" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      {product.exclusions?.map((item) => (
        <p key={item} className="mt-4 text-xs leading-relaxed text-frc-muted">
          {item}
        </p>
      ))}

      <ContactTrigger
        locale={locale}
        product={{ name: product.name, startingPrice: product.startingPrice }}
        className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-frc-ink px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-frc-slate focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-frc-bronze focus-visible:ring-offset-2"
      >
        {content.requestLabel}
        <ArrowRight aria-hidden="true" className="h-4 w-4" />
      </ContactTrigger>
    </article>
  )
}

export function AppProductsPage({ locale, content }: AppProductsPageProps) {
  const diagnosis = content.products[0]

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex-1">
        <section className="relative overflow-hidden border-b border-gray-200 bg-frc-ink text-white">
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:48px_48px]"
          />
          <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 md:grid-cols-[1.55fr_0.8fr] md:items-end md:py-28 lg:px-8">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-frc-gold">
                {content.eyebrow}
              </p>
              <h1 className="font-display mt-6 max-w-4xl text-4xl font-semibold leading-[1.03] sm:text-5xl md:text-6xl">
                {content.title}
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-relaxed text-gray-300 md:text-lg">
                {content.intro}
              </p>
            </div>
            <div className="border-l-2 border-frc-gold pl-6">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-300">
                {content.startingAt}
              </span>
              <p className="mt-2 text-4xl font-bold tracking-tight text-white">
                {content.heroPrice}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-gray-300">
                {content.heroPriceContext}
              </p>
              <ContactTrigger
                locale={locale}
                product={{ name: diagnosis.name, startingPrice: diagnosis.startingPrice }}
                className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-frc-gold px-5 py-3 text-sm font-semibold text-frc-ink transition-colors hover:bg-[#d3b674] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-frc-ink"
              >
                {content.heroCta}
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </ContactTrigger>
            </div>
          </div>
        </section>

        <section aria-labelledby="app-catalog-title" className="bg-[#f7f5ef] py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-frc-bronze">
              {content.catalogEyebrow}
            </p>
            <h2 id="app-catalog-title" className="font-display mt-4 max-w-3xl text-4xl font-semibold leading-tight text-frc-ink md:text-5xl">
              {content.catalogTitle}
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {content.products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  locale={locale}
                  content={content}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-gray-200 bg-white py-16 md:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-[0.8fr_2.2fr] lg:px-8">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-frc-bronze">
                {content.useCasesEyebrow}
              </p>
              <Smartphone aria-hidden="true" className="mt-6 h-8 w-8 text-frc-slate" />
            </div>
            <div>
              <h2 className="font-display text-4xl font-semibold leading-tight text-frc-ink md:text-5xl">
                {content.useCasesTitle}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-frc-muted">
                {content.useCasesIntro}
              </p>
              <ul className="mt-10 grid gap-px border border-gray-200 bg-gray-200 sm:grid-cols-2 lg:grid-cols-3">
                {content.useCases.map((useCase) => (
                  <li key={useCase} className="flex min-h-24 items-center bg-white p-5 font-semibold text-frc-slate">
                    {useCase}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-frc-ink py-20 text-white md:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-frc-gold">
              {content.comparisonEyebrow}
            </p>
            <h2 className="font-display mt-4 max-w-4xl text-4xl font-semibold leading-tight md:text-5xl">
              {content.comparisonTitle}
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-gray-300">
              {content.comparisonIntro}
            </p>
            <div className="mt-12 overflow-x-auto border border-white/20">
              <table className="w-full min-w-[760px] border-collapse text-left">
                <thead>
                  <tr>
                    <th className="p-5 text-sm font-semibold text-gray-300" scope="col">
                      <span className="sr-only">{content.comparisonEyebrow}</span>
                    </th>
                    {content.comparisonHeaders.map((header) => (
                      <th key={header} className="border-l border-white/20 p-5 text-sm font-semibold text-white" scope="col">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {content.comparisonRows.map((row) => (
                    <tr key={row.label} className="border-t border-white/20">
                      <th className="p-5 text-sm font-semibold text-white" scope="row">{row.label}</th>
                      <td className="border-l border-white/20 p-5 text-sm text-gray-300">{row.diy}</td>
                      <td className="border-l border-white/20 p-5 text-sm text-gray-300">{row.managed}</td>
                      <td className="border-l border-white/20 bg-white/[0.06] p-5 text-sm font-medium text-white">{row.frc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 md:grid-cols-[0.8fr_2.2fr]">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-frc-bronze">
                {content.costEyebrow}
              </p>
              <div>
                <h2 className="font-display max-w-3xl text-4xl font-semibold leading-tight text-frc-ink md:text-5xl">
                  {content.costTitle}
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-frc-muted">
                  {content.costIntro}
                </p>
              </div>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <div className="border border-gray-200 bg-[#f7f5ef] p-7">
                <Code2 aria-hidden="true" className="h-6 w-6 text-frc-bronze" />
                <h3 className="font-display mt-5 text-2xl font-semibold text-frc-ink">
                  {content.includesLabel}
                </h3>
                <ul className="mt-5 space-y-3">
                  {content.includedCosts.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-frc-slate">
                      <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-frc-bronze" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border border-gray-200 p-7">
                <ExternalLink aria-hidden="true" className="h-6 w-6 text-frc-bronze" />
                <h3 className="font-display mt-5 text-2xl font-semibold text-frc-ink">
                  {content.externalCostsTitle}
                </h3>
                <ul className="mt-5 space-y-3">
                  {content.externalCosts.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-frc-slate">
                      <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-frc-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-6 flex items-start gap-5 border border-frc-gold bg-[#fffaf0] p-7">
              <ShieldCheck aria-hidden="true" className="h-7 w-7 shrink-0 text-frc-bronze" />
              <div>
                <h3 className="font-display text-2xl font-semibold text-frc-ink">{content.ownershipTitle}</h3>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-frc-slate">{content.ownershipText}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-gray-200 bg-[#f7f5ef] py-20 md:py-28">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-[0.8fr_2.2fr] lg:px-8">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-frc-bronze">
                {content.faqEyebrow}
              </p>
              <h2 className="font-display mt-4 text-4xl font-semibold leading-tight text-frc-ink">
                {content.faqTitle}
              </h2>
            </div>
            <div className="divide-y divide-gray-300 border-y border-gray-300">
              {content.faqs.map((faq) => (
                <details key={faq.question} className="group py-5">
                  <summary className="cursor-pointer list-none pr-8 text-base font-semibold text-frc-ink marker:hidden">
                    {faq.question}
                  </summary>
                  <p className="mt-3 max-w-3xl text-sm leading-relaxed text-frc-muted">{faq.answer}</p>
                </details>
              ))}
            </div>
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
              product={{ name: diagnosis.name, startingPrice: diagnosis.startingPrice }}
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-md bg-frc-ink px-6 py-3 font-semibold text-white transition-colors hover:bg-frc-slate focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-frc-ink focus-visible:ring-offset-2 focus-visible:ring-offset-frc-gold"
            >
              {content.ctaLabel}
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </ContactTrigger>
          </div>
        </section>
      </main>
      <Footer locale={locale} path="/apps" />
    </div>
  )
}
