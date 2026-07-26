import Link from "next/link"
import type { Metadata } from "next"
import { Footer } from "@/components/Footer"
import { pageMetadata } from "@/lib/seo"
import { JsonLd, breadcrumbSchema } from "@/lib/schema"

export const metadata: Metadata = pageMetadata({
  locale: "en",
  path: "/about",
  title: "About Us — Software Company since 2015",
  description:
    "Learn about FRC: history, registered activities (software, IT consulting and data CNAEs) and how we work.",
})

const activities = [
  {
    code: "62.03-1-00",
    title: "Non-Customizable Software",
    description:
      "Development and licensing of non-customizable computer software — our primary activity, including our own apps published on the Apple and Google stores.",
  },
  {
    code: "62.02-3-00",
    title: "Customizable Software",
    description:
      "Development and licensing of customizable computer software, tailored to each client's processes.",
  },
  {
    code: "62.04-0-00",
    title: "IT Consulting",
    description:
      "Information technology consulting: architecture, technology selection and digital transformation support.",
  },
  {
    code: "63.11-9-00",
    title: "Data and Hosting",
    description:
      "Data processing, application service providers and internet hosting services.",
  },
]

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/en" },
          { name: "About", path: "/en/about" },
        ])}
      />
      <main className="flex-1">
        <section className="w-full bg-white py-20 md:py-32">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-20 flex flex-col items-center text-center">
              <h1 className="font-display mb-6 text-4xl font-semibold text-[#2f4858] md:text-5xl">
                About <span className="text-frc-bronze">FRC</span>
              </h1>

              <p className="mx-auto max-w-2xl text-base font-normal text-frc-muted leading-relaxed md:text-lg">
                FRC is a Brazilian company founded in 2015 in Recife, Brazil, with
                roots in consulting and engineering. In 2026 it
                expanded its corporate purpose into software development and licensing,
                information technology consulting, and hosting and data processing
                services — now its primary activity, run from Joinville, Brazil.
              </p>
            </div>

            {/* Activities Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {activities.map((activity) => (
                <div
                  key={activity.code}
                  className="frc-card bg-white border border-gray-200 rounded-lg p-8 overflow-hidden"
                >
                  <p className="mb-2 font-mono text-xs tracking-wider text-frc-bronze">
                    CNAE {activity.code}
                  </p>
                  <h2 className="mb-3 text-xl font-bold text-[#2f4858]">
                    {activity.title}
                  </h2>
                  <p className="text-sm text-frc-muted leading-relaxed">
                    {activity.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Where we are */}
            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="rounded-lg border border-gray-200 bg-white p-8">
                <p className="mb-2 font-mono text-xs tracking-wider text-frc-bronze">
                  JOINVILLE · BRAZIL
                </p>
                <h2 className="mb-3 text-xl font-bold text-[#2f4858]">Development</h2>
                <p className="text-sm text-frc-muted leading-relaxed">
                  The software operation is led by partner Marcelo Hugo Resende
                  Tiburtius Cavalcanti, who lives and works in Joinville, Brazil,
                  heading software development, mobile apps and IT consulting.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white p-8">
                <p className="mb-2 font-mono text-xs tracking-wider text-frc-bronze">
                  RECIFE · BRAZIL
                </p>
                <h2 className="mb-3 text-xl font-bold text-[#2f4858]">
                  Headquarters and Administration
                </h2>
                <p className="text-sm text-frc-muted leading-relaxed">
                  The registered office and company administration are in Recife,
                  Brazil, under managing partner Maria de Fátima Resende Cavalcanti.
                </p>
              </div>
            </div>

            {/* Company facts */}
            <div className="mt-16 rounded-lg border border-gray-200 bg-[#fafbfc] p-8">
              <h2 className="mb-6 text-2xl font-bold text-[#2f4858]">The Company</h2>
              <dl className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 text-sm">
                <div>
                  <dt className="font-semibold text-[#2f4858]">Legal Name</dt>
                  <dd className="text-frc-muted">FRC Consultores Associados LTDA</dd>
                </div>
                <div>
                  <dt className="font-semibold text-[#2f4858]">Tax ID (CNPJ)</dt>
                  <dd className="text-frc-muted">22.052.463/0001-30</dd>
                </div>
                <div>
                  <dt className="font-semibold text-[#2f4858]">Founded</dt>
                  <dd className="text-frc-muted">March 16, 2015</dd>
                </div>
                <div>
                  <dt className="font-semibold text-[#2f4858]">Software Division</dt>
                  <dd className="text-frc-muted">since July 2026</dd>
                </div>
                <div>
                  <dt className="font-semibold text-[#2f4858]">Headquarters</dt>
                  <dd className="text-frc-muted">Recife, Pernambuco, Brazil</dd>
                </div>
                <div>
                  <dt className="font-semibold text-[#2f4858]">Development</dt>
                  <dd className="text-frc-muted">Joinville, Santa Catarina, Brazil</dd>
                </div>
              </dl>
              <p className="mt-6 text-sm text-frc-muted">
                Full registration details on the{" "}
                <Link
                  href="/en/impressum"
                  className="font-medium text-frc-bronze underline decoration-1 underline-offset-4 hover:text-frc-ink"
                >
                  Legal Notice
                </Link>{" "}
                page.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full bg-[#3a4d5c] py-20 md:py-32">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Let&apos;s talk about your project
            </h2>
            <p className="mb-8 text-base text-gray-100">
              From the app to the infrastructure, we help bring your idea to life.
            </p>
            <Link
              href="/en/impressum"
              className="inline-block bg-frc-gold text-frc-ink px-8 py-3 rounded font-semibold hover:bg-[#d3b674] transition"
            >
              Contact Channels
            </Link>
          </div>
        </section>
      </main>
      <Footer locale="en" path="/about" />
    </div>
  )
}
