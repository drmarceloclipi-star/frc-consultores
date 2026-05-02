export default function Impressum() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-1">
        <section className="w-full bg-white py-20 md:py-32">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            {/* Imprint Section */}
            <h1 className="mb-8 text-4xl font-bold text-[#2f4858]">
              Imprint / Contact
            </h1>

            <div className="mb-12 space-y-4 text-[#6b8393]">
              <p className="font-semibold">Matthias Lübken</p>
              <p>Softwareentwicklung und IT-Beratung</p>
              <p>Nikolausstr. 31, 53129 Bonn</p>
              <p>Germany</p>
              <p>USt-IdNr: DE460540613</p>
              <p>Email: info (at) tavon (dot) ai</p>
            </div>

            {/* Privacy Notice Section */}
            <div className="mt-16 space-y-6">
              <h2 className="text-2xl font-bold text-[#2f4858]">Privacy Notice</h2>

              <p className="text-[#6b8393]">
                We process personal data in accordance with the EU General Data Protection Regulation (GDPR) and the German Federal Data Protection Act (BDSG).
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 font-bold text-[#2f4858]">1. Controller</h3>
                  <p className="text-[#6b8393]">
                    The controller responsible for data processing is the provider named in the imprint above.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 font-bold text-[#2f4858]">2. Purpose of data processing</h3>
                  <p className="text-[#6b8393]">
                    If you provide your email address on this website, we will use it solely to contact you or to provide information you requested.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 font-bold text-[#2f4858]">3. Legal basis</h3>
                  <p className="text-[#6b8393]">
                    Processing is carried out based on your consent pursuant to Art. 6(1)(a) GDPR.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 font-bold text-[#2f4858]">4. Data storage</h3>
                  <p className="text-[#6b8393]">
                    Your email address is stored only as long as necessary for the stated purpose or until you withdraw your consent.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 font-bold text-[#2f4858]">5. Data disclosure</h3>
                  <p className="text-[#6b8393]">
                    We do not share your personal data with third parties unless this is required by law or you have explicitly agreed.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 font-bold text-[#2f4858]">6. Your rights</h3>
                  <p className="text-[#6b8393]">
                    You have the right to request access to your personal data, rectification, deletion, restriction of processing, data portability, and to withdraw your consent at any time with effect for the future.
                  </p>
                  <p className="mt-2 text-[#6b8393]">
                    To exercise these rights, please contact the email address shown in the imprint.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 font-bold text-[#2f4858]">7. Withdrawal of consent</h3>
                  <p className="text-[#6b8393]">
                    You may withdraw your consent to the processing of your email address at any time. This does not affect the lawfulness of processing carried out before your withdrawal.
                  </p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-16 border-t border-gray-200 pt-8">
              <p className="text-sm text-[#6b8393]">
                © 2026 Tavon. All rights reserved.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
