import type { Metadata } from "next"
import Link from "next/link"
import { Footer } from "@/components/Footer"
import { pageMetadata } from "@/lib/seo"
import { JsonLd, contactPageSchema } from "@/lib/schema"

export const metadata: Metadata = pageMetadata({
  locale: "pt",
  path: "/impressum",
  title: "Dados Legais e Contato",
  description:
    "Dados legais da FRC Consultores Associados LTDA: CNPJ 22.052.463/0001-30, NIRE 26.2.0224315-1, sede em Recife-PE, contato e política de privacidade LGPD.",
})

export default function Impressum() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <JsonLd data={contactPageSchema("pt")} />
      <main className="flex-1">
        <section className="w-full bg-white pb-16 pt-12 md:py-32">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            {/* Legal Data Section */}
            <h1 className="font-display mb-6 text-4xl font-semibold text-[#2f4858] md:mb-8">
              Dados Legais / Contato
            </h1>

            <div className="mb-12 space-y-2 text-frc-muted">
              <p className="font-semibold text-[#2f4858]">
                FRC Consultores Associados LTDA
              </p>
              <p>Desenvolvimento e licenciamento de programas de computador</p>
              <p>CNPJ: 22.052.463/0001-30</p>
              <p>NIRE: 26.2.0224315-1 (JUCEPE)</p>
              <p>Fundada em 16/03/2015 · Sociedade Empresária Limitada</p>
              <p className="pt-4">
                Rua Irene Ramos Gomes de Mattos, 97 — Caixa Postal 881
              </p>
              <p>Pina, Recife - PE, CEP 51.011-530</p>
              <p>Brasil</p>
              <p className="pt-4">Email: contato@frcconsultores.com.br</p>
              <p>Telefone: +55 (47) 99692-0935</p>
              <p className="pt-4">
                Sócia-administradora: Maria de Fátima Resende Cavalcanti (Recife-PE)
              </p>
              <p>
                Sócio: Marcelo Hugo Resende Tiburtius Cavalcanti (Joinville-SC) —
                responsável por desenvolvimento de software, aplicativos móveis e
                consultoria em TI
              </p>
            </div>

            {/* Privacy Notice Section */}
            <div className="mt-12 space-y-4 md:mt-16">
              <h2 className="text-2xl font-bold text-[#2f4858]">
                Política de Privacidade
              </h2>
              <p className="text-frc-muted">
                Tratamos dados pessoais de acordo com a LGPD (Lei nº 13.709/2018),
                inclusive no site e nos aplicativos FRC Software.
              </p>
              <p>
                <Link
                  href="/pt/privacy"
                  className="font-medium text-frc-bronze underline decoration-1 underline-offset-4 hover:text-frc-ink"
                >
                  Ler a Política de Privacidade completa →
                </Link>
              </p>
            </div>

            {/* Footer note */}
            <div className="mt-12 border-t border-gray-200 pt-8 md:mt-16">
              <p className="text-sm text-frc-muted">
                © 2026 FRC Consultores Associados LTDA. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer locale="pt" path="/impressum" />
    </div>
  )
}
