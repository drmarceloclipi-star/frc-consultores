import Link from "next/link"
import type { Metadata } from "next"
import { Footer } from "@/components/Footer"
import { pageMetadata } from "@/lib/seo"
import { JsonLd, breadcrumbSchema } from "@/lib/schema"

export const metadata: Metadata = pageMetadata({
  locale: "pt",
  path: "/about",
  title: "Sobre Nós — Empresa de Software desde 2015",
  description:
    "Conheça a FRC Consultores Associados: história, atividades registradas (CNAEs de software, consultoria em TI e dados) e forma de trabalhar.",
})

const activities = [
  {
    code: "62.03-1-00",
    title: "Software Não-Customizável",
    description:
      "Desenvolvimento e licenciamento de programas de computador não-customizáveis — nossa atividade principal, incluindo aplicativos próprios publicados nas lojas Apple e Google.",
  },
  {
    code: "62.02-3-00",
    title: "Software Customizável",
    description:
      "Desenvolvimento e licenciamento de programas de computador customizáveis, adaptados aos processos de cada cliente.",
  },
  {
    code: "62.04-0-00",
    title: "Consultoria em TI",
    description:
      "Consultoria em tecnologia da informação: arquitetura, seleção de tecnologias e apoio à transformação digital.",
  },
  {
    code: "63.11-9-00",
    title: "Dados e Hospedagem",
    description:
      "Tratamento de dados, provedores de serviços de aplicação e serviços de hospedagem na internet.",
  },
]

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Início", path: "/pt" },
          { name: "Sobre", path: "/pt/about" },
        ])}
      />
      <main className="flex-1">
        <section className="w-full bg-white py-20 md:py-32">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-20 flex flex-col items-center text-center">
              <h1 className="font-display mb-6 text-4xl font-semibold text-[#2f4858] md:text-5xl">
                Sobre a <span className="text-frc-bronze">FRC Consultores</span>
              </h1>

              <p className="mx-auto max-w-2xl text-base font-normal text-frc-muted leading-relaxed md:text-lg">
                A FRC Consultores Associados LTDA é uma empresa brasileira fundada em
                2015, em Recife-PE, com origem em consultoria e engenharia. Em 2026,
                expandiu seu objeto social para o desenvolvimento e licenciamento de
                programas de computador, consultoria em tecnologia da informação e
                serviços de hospedagem e tratamento de dados — hoje sua atividade
                principal, conduzida a partir de Joinville-SC.
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
                  JOINVILLE · SC
                </p>
                <h2 className="mb-3 text-xl font-bold text-[#2f4858]">
                  Desenvolvimento
                </h2>
                <p className="text-sm text-frc-muted leading-relaxed">
                  A operação de software é liderada pelo sócio Marcelo Hugo Resende
                  Tiburtius Cavalcanti, que vive e trabalha em Joinville-SC: é dele a
                  condução do desenvolvimento de software, aplicativos móveis e
                  consultoria em TI.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white p-8">
                <p className="mb-2 font-mono text-xs tracking-wider text-frc-bronze">
                  RECIFE · PE
                </p>
                <h2 className="mb-3 text-xl font-bold text-[#2f4858]">
                  Sede e Administração
                </h2>
                <p className="text-sm text-frc-muted leading-relaxed">
                  A sede legal e a administração da sociedade ficam em Recife-PE, sob
                  responsabilidade da sócia-administradora Maria de Fátima Resende
                  Cavalcanti.
                </p>
              </div>
            </div>

            {/* Company facts */}
            <div className="mt-16 rounded-lg border border-gray-200 bg-[#fafbfc] p-8">
              <h2 className="mb-6 text-2xl font-bold text-[#2f4858]">A Empresa</h2>
              <dl className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 text-sm">
                <div>
                  <dt className="font-semibold text-[#2f4858]">Razão Social</dt>
                  <dd className="text-frc-muted">FRC Consultores Associados LTDA</dd>
                </div>
                <div>
                  <dt className="font-semibold text-[#2f4858]">CNPJ</dt>
                  <dd className="text-frc-muted">22.052.463/0001-30</dd>
                </div>
                <div>
                  <dt className="font-semibold text-[#2f4858]">Fundação</dt>
                  <dd className="text-frc-muted">16 de março de 2015</dd>
                </div>
                <div>
                  <dt className="font-semibold text-[#2f4858]">Divisão de Software</dt>
                  <dd className="text-frc-muted">desde julho de 2026</dd>
                </div>
                <div>
                  <dt className="font-semibold text-[#2f4858]">Sede</dt>
                  <dd className="text-frc-muted">Recife, Pernambuco, Brasil</dd>
                </div>
                <div>
                  <dt className="font-semibold text-[#2f4858]">Desenvolvimento</dt>
                  <dd className="text-frc-muted">Joinville, Santa Catarina, Brasil</dd>
                </div>
              </dl>
              <p className="mt-6 text-sm text-frc-muted">
                Dados cadastrais completos na página de{" "}
                <Link
                  href="/pt/impressum"
                  className="font-medium text-frc-bronze underline decoration-1 underline-offset-4 hover:text-frc-ink"
                >
                  Dados Legais
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full bg-[#3a4d5c] py-20 md:py-32">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Vamos conversar sobre o seu projeto
            </h2>
            <p className="mb-8 text-base text-gray-100">
              Do aplicativo à infraestrutura, ajudamos a tirar sua ideia do papel.
            </p>
            <Link
              href="/pt/impressum"
              className="inline-block bg-frc-gold text-frc-ink px-8 py-3 rounded font-semibold hover:bg-[#d3b674] transition"
            >
              Canais de Contato
            </Link>
          </div>
        </section>
      </main>
      <Footer locale="pt" path="/about" />
    </div>
  )
}
