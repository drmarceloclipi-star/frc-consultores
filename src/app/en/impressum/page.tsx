import type { Metadata } from "next"
import Link from "next/link"
import { Footer } from "@/components/Footer"
import { pageMetadata } from "@/lib/seo"
import { JsonLd, contactPageSchema } from "@/lib/schema"

export const metadata: Metadata = pageMetadata({
  locale: "en",
  path: "/impressum",
  title: "Legal Data and Contact",
  description:
    "Legal data of FRC Consultores Associados LTDA: CNPJ 22.052.463/0001-30, NIRE 26.2.0224315-1, headquartered in Recife, Brazil, contact and LGPD privacy policy.",
})

export default function Impressum() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <JsonLd data={contactPageSchema("en")} />
      <main className="flex-1">
        <section className="w-full bg-white pb-16 pt-12 md:py-32">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            {/* Legal Data Section */}
            <h1 className="font-display mb-6 text-4xl font-semibold text-[#2f4858] md:mb-8">
              Legal Notice / Contact
            </h1>

            <div className="mb-12 space-y-2 text-frc-muted">
              <p className="font-semibold text-[#2f4858]">
                FRC Consultores Associados LTDA
              </p>
              <p>Computer software development and licensing</p>
              <p>Tax ID (CNPJ): 22.052.463/0001-30</p>
              <p>Company registry (NIRE): 26.2.0224315-1 (JUCEPE)</p>
              <p>Founded 03/16/2015 · Limited liability company</p>
              <p className="pt-4">
                Rua Irene Ramos Gomes de Mattos, 97 — P.O. Box 881
              </p>
              <p>Pina, Recife - PE, 51.011-530</p>
              <p>Brazil</p>
              <p className="pt-4">Email: contato@frcconsultores.com.br</p>
              <p>Phone: +55 (47) 99692-0935</p>
              <p className="pt-4">
                Managing partner: Maria de Fátima Resende Cavalcanti (Recife, Brazil)
              </p>
              <p>
                Partner: Marcelo Hugo Resende Tiburtius Cavalcanti (Joinville, Brazil)
                — head of software development, mobile apps and IT consulting
              </p>
            </div>

            {/* Privacy Notice Section */}
            <div className="mt-12 space-y-4 md:mt-16">
              <h2 className="text-2xl font-bold text-[#2f4858]">Privacy Notice</h2>
              <p className="text-frc-muted">
                We process personal data in accordance with the LGPD (Law No.
                13,709/2018), including on this website and in the FRC Software apps.
              </p>
              <p>
                <Link
                  href="/en/privacy"
                  className="font-medium text-frc-bronze underline decoration-1 underline-offset-4 hover:text-frc-ink"
                >
                  Read the full Privacy Policy →
                </Link>
              </p>
            </div>

            {/* Footer note */}
            <div className="mt-12 border-t border-gray-200 pt-8 md:mt-16">
              <p className="text-sm text-frc-muted">
                © 2026 FRC Consultores Associados LTDA. All rights reserved.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer locale="en" path="/impressum" />
    </div>
  )
}
