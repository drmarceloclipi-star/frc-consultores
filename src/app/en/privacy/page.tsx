import type { Metadata } from "next"
import Link from "next/link"
import { Footer } from "@/components/Footer"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  locale: "en",
  path: "/privacy",
  title: "Privacy Policy",
  description:
    "Privacy policy of FRC Consultores Associados LTDA (LGPD): how we handle data on this website and in the FRC Software mobile apps.",
})

export default function Privacy() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-1">
        <section className="w-full bg-white pb-16 pt-12 md:py-32">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h1 className="font-display mb-6 text-4xl font-semibold text-[#2f4858] md:mb-8">
              Privacy Policy
            </h1>

            <p className="mb-8 text-frc-muted">
              We process personal data in accordance with the Brazilian General Data
              Protection Law — LGPD (Law No. 13,709/2018). This page describes processing
              on frcconsultores.com.br and in the mobile apps under the{" "}
              <strong className="font-semibold text-[#2f4858]">FRC Software</strong>{" "}
              brand, operated by FRC Consultores Associados LTDA.
            </p>

            <div className="mb-10 space-y-2 rounded-lg border border-gray-200 bg-[#F8F9FA] p-4 text-sm text-frc-muted">
              <p className="font-semibold text-[#2f4858]">
                FRC Consultores Associados LTDA
              </p>
              <p>Tax ID (CNPJ): 22.052.463/0001-30</p>
              <p>Company registry (NIRE): 26.2.0224315-1 (JUCEPE)</p>
              <p>
                Rua Irene Ramos Gomes de Mattos, 97 — P.O. Box 881 · Pina, Recife - PE,
                51.011-530 · Brazil
              </p>
              <p>Email: contato@frcconsultores.com.br</p>
              <p>Phone: +55 (47) 99692-0935</p>
              <p>
                Full legal notice:{" "}
                <Link
                  href="/en/impressum"
                  className="font-medium text-frc-bronze underline decoration-1 underline-offset-4 hover:text-frc-ink"
                >
                  Legal Notice / Contact
                </Link>
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="mb-2 text-xl font-bold text-[#2f4858]">1. Controller</h2>
                <p className="text-frc-muted">
                  The controller responsible for data processing is FRC Consultores
                  Associados LTDA, identified above.
                </p>
              </div>

              <div>
                <h2 className="mb-2 text-xl font-bold text-[#2f4858]">
                  2. Website — purpose of processing
                </h2>
                <p className="text-frc-muted">
                  If you provide your email address or other contact details on this
                  website (for example via the contact form), that information is used
                  only to contact you or provide the information you requested.
                </p>
              </div>

              <div>
                <h2 className="mb-2 text-xl font-bold text-[#2f4858]">
                  3. FRC Software apps — on-device data
                </h2>
                <p className="text-frc-muted">
                  The FRC Software mobile apps (iOS and Android) are local-first by
                  default:
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-frc-muted">
                  <li>
                    Package diagnosis answers and recommendation drafts are stored only
                    on this device.
                  </li>
                  <li>
                    Those answers are not automatically transmitted to FRC servers,
                    analytics services, or third parties.
                  </li>
                  <li>
                    Email contact happens only if you choose to open the in-app contact
                    flow (system mail composer / mailto).
                  </li>
                  <li>
                    You can delete the local draft at any time from the Privacy or
                    Diagnosis screens in the app.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-2 text-xl font-bold text-[#2f4858]">4. Legal basis</h2>
                <p className="text-frc-muted">
                  When we process personal data you send us (for example an email via
                  the website or a message you choose to send), processing is based on
                  your consent under Art. 7, item I, of the LGPD. Data that remains only
                  on your device in the FRC Software apps is not transmitted to the
                  controller.
                </p>
              </div>

              <div>
                <h2 className="mb-2 text-xl font-bold text-[#2f4858]">5. Data storage</h2>
                <p className="text-frc-muted">
                  Data received by FRC (for example contact messages) is stored only for
                  as long as necessary for the stated purpose or until you withdraw your
                  consent. App drafts remain on the device until you delete them or
                  uninstall the app.
                </p>
              </div>

              <div>
                <h2 className="mb-2 text-xl font-bold text-[#2f4858]">6. Data disclosure</h2>
                <p className="text-frc-muted">
                  We do not share your personal data with third parties unless required
                  by law or with your explicit consent.
                </p>
              </div>

              <div>
                <h2 className="mb-2 text-xl font-bold text-[#2f4858]">7. Your rights</h2>
                <p className="text-frc-muted">
                  Under Art. 18 of the LGPD, you may request confirmation of processing,
                  access, rectification, anonymization, portability and deletion of your
                  data, and withdraw your consent at any time.
                </p>
                <p className="mt-2 text-frc-muted">
                  To exercise these rights for data under FRC&apos;s control, contact us
                  at the email address above. For data that exists only locally in the
                  app, use in-app deletion.
                </p>
              </div>

              <div>
                <h2 className="mb-2 text-xl font-bold text-[#2f4858]">
                  8. Withdrawal of consent
                </h2>
                <p className="text-frc-muted">
                  You may withdraw your consent at any time. This does not affect the
                  lawfulness of processing carried out before the withdrawal.
                </p>
              </div>
            </div>

            <div className="mt-12 border-t border-gray-200 pt-8 md:mt-16">
              <p className="text-sm text-frc-muted">
                © 2026 FRC Consultores Associados LTDA. All rights reserved.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer locale="en" path="/privacy" />
    </div>
  )
}
