import { Footer } from "@/components/Footer"

export default function Impressum() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-1">
        <section className="w-full bg-white py-20 md:py-32">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            {/* Legal Data Section */}
            <h1 className="font-display mb-8 text-4xl font-semibold text-[#2f4858]">
              Dados Legais / Contato
            </h1>

            <div className="mb-12 space-y-2 text-[#6b8393]">
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
            <div className="mt-16 space-y-6">
              <h2 className="text-2xl font-bold text-[#2f4858]">
                Política de Privacidade
              </h2>

              <p className="text-[#6b8393]">
                Tratamos dados pessoais de acordo com a Lei Geral de Proteção de Dados
                Pessoais — LGPD (Lei nº 13.709/2018).
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 font-bold text-[#2f4858]">1. Controlador</h3>
                  <p className="text-[#6b8393]">
                    A controladora responsável pelo tratamento de dados é a FRC
                    Consultores Associados LTDA, identificada acima.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 font-bold text-[#2f4858]">
                    2. Finalidade do tratamento
                  </h3>
                  <p className="text-[#6b8393]">
                    Se você fornecer seu endereço de e-mail neste site, ele será usado
                    apenas para contatá-lo ou fornecer as informações que você
                    solicitou.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 font-bold text-[#2f4858]">3. Base legal</h3>
                  <p className="text-[#6b8393]">
                    O tratamento é realizado com base no seu consentimento, conforme o
                    Art. 7º, inciso I, da LGPD.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 font-bold text-[#2f4858]">
                    4. Armazenamento de dados
                  </h3>
                  <p className="text-[#6b8393]">
                    Seus dados são armazenados apenas pelo tempo necessário para a
                    finalidade declarada ou até que você revogue seu consentimento.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 font-bold text-[#2f4858]">
                    5. Compartilhamento de dados
                  </h3>
                  <p className="text-[#6b8393]">
                    Não compartilhamos seus dados pessoais com terceiros, salvo
                    obrigação legal ou consentimento explícito.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 font-bold text-[#2f4858]">6. Seus direitos</h3>
                  <p className="text-[#6b8393]">
                    Nos termos do Art. 18 da LGPD, você pode solicitar confirmação de
                    tratamento, acesso, correção, anonimização, portabilidade e
                    eliminação dos seus dados, além de revogar o consentimento a
                    qualquer momento.
                  </p>
                  <p className="mt-2 text-[#6b8393]">
                    Para exercer esses direitos, entre em contato pelo e-mail indicado
                    acima.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 font-bold text-[#2f4858]">
                    7. Revogação do consentimento
                  </h3>
                  <p className="text-[#6b8393]">
                    Você pode revogar seu consentimento a qualquer momento. Isso não
                    afeta a licitude do tratamento realizado antes da revogação.
                  </p>
                </div>
              </div>
            </div>

            {/* Footer note */}
            <div className="mt-16 border-t border-gray-200 pt-8">
              <p className="text-sm text-[#6b8393]">
                © 2026 FRC Consultores Associados LTDA. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer locale="pt" />
    </div>
  )
}
