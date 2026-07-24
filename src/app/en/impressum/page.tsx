import type { Metadata } from "next"
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
        <section className="w-full bg-white py-20 md:py-32">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            {/* Legal Data Section */}
            <h1 className="font-display mb-8 text-4xl font-semibold text-[#2f4858]">
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
            <div className="mt-16 space-y-6">
              <h2 className="text-2xl font-bold text-[#2f4858]">Privacy Notice</h2>

              <p className="text-frc-muted">
                We process personal data in accordance with the Brazilian General Data
                Protection Law — LGPD (Law No. 13,709/2018).
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 font-bold text-[#2f4858]">1. Controller</h3>
                  <p className="text-frc-muted">
                    The controller responsible for data processing is FRC Consultores
                    Associados LTDA, identified above.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 font-bold text-[#2f4858]">
                    2. Purpose of data processing
                  </h3>
                  <p className="text-frc-muted">
                    If you provide your email address on this website, it will only be
                    used to contact you or provide the information you requested.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 font-bold text-[#2f4858]">3. Legal basis</h3>
                  <p className="text-frc-muted">
                    Processing is carried out on the basis of your consent, pursuant to
                    Art. 7, item I, of the LGPD.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 font-bold text-[#2f4858]">4. Data storage</h3>
                  <p className="text-frc-muted">
                    Your data is stored only for as long as necessary for the stated
                    purpose or until you withdraw your consent.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 font-bold text-[#2f4858]">5. Data disclosure</h3>
                  <p className="text-frc-muted">
                    We do not share your personal data with third parties unless
                    required by law or with your explicit consent.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 font-bold text-[#2f4858]">6. Your rights</h3>
                  <p className="text-frc-muted">
                    Under Art. 18 of the LGPD, you may request confirmation of
                    processing, access, rectification, anonymization, portability and
                    deletion of your data, and withdraw your consent at any time.
                  </p>
                  <p className="mt-2 text-frc-muted">
                    To exercise these rights, contact us at the email address shown
                    above.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 font-bold text-[#2f4858]">
                    7. Withdrawal of consent
                  </h3>
                  <p className="text-frc-muted">
                    You may withdraw your consent at any time. This does not affect the
                    lawfulness of processing carried out before the withdrawal.
                  </p>
                </div>
              </div>
            </div>

            {/* Footer note */}
            <div className="mt-16 border-t border-gray-200 pt-8">
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
