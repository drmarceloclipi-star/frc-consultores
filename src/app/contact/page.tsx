"use client"

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-1">
        <section className="w-full bg-white py-20 md:py-32">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 flex flex-col items-center text-center">
              <h1 className="mb-6 text-4xl font-bold text-[#2f4858] md:text-5xl">
                Get in Touch
              </h1>

              <p className="mx-auto max-w-2xl text-base font-normal text-[#6b8393] leading-relaxed md:text-lg">
                We&apos;d love to hear from you. Let&apos;s discuss how we can help transform your business operations with AI agents.
              </p>
            </div>

            <div className="mx-auto max-w-2xl">
              <div className="rounded-lg border border-gray-200 p-8">
                <p className="text-center text-[#6b8393]">
                  Contact form coming soon. For inquiries, please reach out directly or use the other navigation options to explore our services.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
