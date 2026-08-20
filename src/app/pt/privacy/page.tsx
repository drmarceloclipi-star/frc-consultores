import type { Metadata } from "next"
import Link from "next/link"
import { Footer } from "@/components/Footer"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  locale: "pt",
  path: "/privacy",
  title: "Política de Privacidade",
  description:
    "Política de privacidade da FRC Consultores Associados LTDA (LGPD): site institucional, aplicativos locais FRC Software e políticas próprias de Entrela e Triagemia.",
})

export default function Privacy() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-1">
        <section className="w-full bg-white pb-16 pt-12 md:py-32">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h1 className="font-display mb-6 text-4xl font-semibold text-[#2f4858] md:mb-8">
              Política de Privacidade
            </h1>

            <p className="mb-8 text-frc-muted">
              Tratamos dados pessoais de acordo com a Lei Geral de Proteção de Dados
              Pessoais — LGPD (Lei nº 13.709/2018). Esta página descreve o tratamento
              no site frcconsultores.com.br e nos aplicativos móveis locais da marca{" "}
              <strong className="font-semibold text-[#2f4858]">FRC Software</strong>,
              operada pela FRC Consultores Associados LTDA. Entrela e Triagemia possuem
              escopos e políticas próprios, indicados nesta página.
            </p>

            <div className="mb-10 space-y-2 rounded-lg border border-gray-200 bg-[#F8F9FA] p-4 text-sm text-frc-muted">
              <p className="font-semibold text-[#2f4858]">
                FRC Consultores Associados LTDA
              </p>
              <p>CNPJ: 22.052.463/0001-30</p>
              <p>NIRE: 26.2.0224315-1 (JUCEPE)</p>
              <p>
                Rua Irene Ramos Gomes de Mattos, 97 — Caixa Postal 881 · Pina, Recife -
                PE, CEP 51.011-530 · Brasil
              </p>
              <p>Email: contato@frcconsultores.com.br</p>
              <p>Telefone: +55 (47) 99692-0935</p>
              <p>
                Dados societários completos:{" "}
                <Link
                  href="/pt/impressum"
                  className="font-medium text-frc-bronze underline decoration-1 underline-offset-4 hover:text-frc-ink"
                >
                  Dados Legais / Contato
                </Link>
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="mb-2 text-xl font-bold text-[#2f4858]">1. Controlador</h2>
                <p className="text-frc-muted">
                  Para os tratamentos realizados no site frcconsultores.com.br e nos
                  aplicativos móveis locais da marca FRC Software descritos nas seções 2
                  e 3, a controladora é a FRC Consultores Associados LTDA, identificada
                  acima. Os papéis e compartilhamentos de Entrela e Triagemia estão
                  descritos nas políticas próprias de cada produto.
                </p>
              </div>

              <div>
                <h2 className="mb-2 text-xl font-bold text-[#2f4858]">
                  2. Site — finalidade do tratamento
                </h2>
                <p className="text-frc-muted">
                  Se você fornecer seu endereço de e-mail ou outras informações de
                  contato neste site (por exemplo, pelo formulário de contato), esses
                  dados serão usados apenas para contatá-lo ou fornecer as informações
                  que você solicitou.
                </p>
              </div>

              <div>
                <h2 className="mb-2 text-xl font-bold text-[#2f4858]">
                  3. Aplicativos FRC Software — dados locais
                </h2>
                <p className="text-frc-muted">
                  Os aplicativos móveis FRC Software (iOS e Android) são locais por
                  padrão:
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-frc-muted">
                  <li>
                    Respostas do diagnóstico de pacotes e o rascunho da recomendação
                    ficam armazenados apenas neste dispositivo.
                  </li>
                  <li>
                    Não há envio automático dessas informações a servidores da FRC, a
                    serviços de analytics ou a terceiros.
                  </li>
                  <li>
                    Contato por e-mail só ocorre se você escolher abrir o fluxo de
                    contato no aparelho (compositor de e-mail / mailto).
                  </li>
                  <li>
                    Você pode apagar o rascunho local a qualquer momento nas telas de
                    Privacidade ou Diagnóstico do aplicativo.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-2 text-xl font-bold text-[#2f4858]">
                  4. Entrela — política própria
                </h2>
                <p className="text-frc-muted">
                  O Entrela é um produto digital desenvolvido e operado pela
                  FRC Consultores Associados LTDA. Diferentemente dos aplicativos FRC
                  Software descritos acima, o Entrela utiliza serviços de backend para
                  autenticação, armazenamento e tratamento de dados da conta e dados de
                  saúde. Esse tratamento é regido pela{" "}
                  <a
                    href="https://ladoalado.app/privacidade"
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-frc-bronze underline decoration-1 underline-offset-4 hover:text-frc-ink"
                  >
                    Política de Privacidade do Entrela
                  </a>{" "}
                  e pelos{" "}
                  <a
                    href="https://ladoalado.app/termos"
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-frc-bronze underline decoration-1 underline-offset-4 hover:text-frc-ink"
                  >
                    Termos de Uso do Entrela
                  </a>
                  .
                </p>
              </div>

              <div>
                <h2 className="mb-2 text-xl font-bold text-[#2f4858]">
                  5. Triagemia — política própria
                </h2>
                <p className="text-frc-muted">
                  A Triagemia é um produto digital desenvolvido, licenciado e operado
                  pela FRC Consultores Associados LTDA. Seu tratamento de dados possui
                  escopo próprio e não é descrito nesta política corporativa. Consulte a{" "}
                  <a
                    href="https://triagemia.com.br/privacidade"
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-frc-bronze underline decoration-1 underline-offset-4 hover:text-frc-ink"
                  >
                    Política de Privacidade da Triagemia
                  </a>{" "}
                  e os{" "}
                  <a
                    href="https://triagemia.com.br/termos"
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-frc-bronze underline decoration-1 underline-offset-4 hover:text-frc-ink"
                  >
                    Termos de Uso da Triagemia
                  </a>
                  .
                </p>
              </div>

              <div>
                <h2 className="mb-2 text-xl font-bold text-[#2f4858]">6. Base legal</h2>
                <p className="text-frc-muted">
                  Quando tratamos dados pessoais enviados por você (por exemplo,
                  e-mail pelo site ou por mensagem que você opta por enviar), o
                  tratamento é realizado com base no seu consentimento, conforme o Art.
                  7º, inciso I, da LGPD. Dados que permanecem apenas no seu dispositivo
                  nos aplicativos FRC Software não são transmitidos à controladora.
                </p>
              </div>

              <div>
                <h2 className="mb-2 text-xl font-bold text-[#2f4858]">
                  7. Armazenamento de dados
                </h2>
                <p className="text-frc-muted">
                  Dados recebidos pela FRC (por exemplo, mensagens de contato) são
                  armazenados apenas pelo tempo necessário para a finalidade declarada
                  ou até que você revogue seu consentimento. Rascunhos nos aplicativos
                  permanecem no dispositivo até você apagá-los ou desinstalar o app.
                </p>
              </div>

              <div>
                <h2 className="mb-2 text-xl font-bold text-[#2f4858]">
                  8. Compartilhamento de dados
                </h2>
                <p className="text-frc-muted">
                  No site institucional e nos aplicativos móveis locais da marca FRC
                  Software, não compartilhamos seus dados pessoais com terceiros, salvo
                  obrigação legal ou consentimento explícito. Os compartilhamentos de
                  Entrela e Triagemia estão descritos nas políticas próprias de cada
                  produto.
                </p>
              </div>

              <div>
                <h2 className="mb-2 text-xl font-bold text-[#2f4858]">9. Seus direitos</h2>
                <p className="text-frc-muted">
                  Nos termos do Art. 18 da LGPD, você pode solicitar confirmação de
                  tratamento, acesso, correção, anonimização, portabilidade e eliminação
                  dos seus dados, além de revogar o consentimento a qualquer momento.
                </p>
                <p className="mt-2 text-frc-muted">
                  Para exercer esses direitos em relação a dados sob controle da FRC,
                  entre em contato pelo e-mail indicado acima. Para dados apenas locais
                  no aplicativo, use a exclusão no próprio app.
                </p>
              </div>

              <div>
                <h2 className="mb-2 text-xl font-bold text-[#2f4858]">
                  10. Revogação do consentimento
                </h2>
                <p className="text-frc-muted">
                  Você pode revogar seu consentimento a qualquer momento. Isso não
                  afeta a licitude do tratamento realizado antes da revogação.
                </p>
              </div>
            </div>

            <div className="mt-12 border-t border-gray-200 pt-8 md:mt-16">
              <p className="text-sm text-frc-muted">
                © 2026 FRC Consultores Associados LTDA. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer locale="pt" path="/privacy" />
    </div>
  )
}
