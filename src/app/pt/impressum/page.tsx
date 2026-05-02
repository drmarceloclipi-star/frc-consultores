export default function Impressum() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-1">
        <section className="w-full bg-white py-20 md:py-32">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            {/* Imprint Section */}
            <h1 className="mb-8 text-4xl font-bold text-[#2f4858]">
              Aviso Legal / Contato
            </h1>

            <div className="mb-12 space-y-4 text-[#6b8393]">
              <p className="font-semibold">Matthias Lübken</p>
              <p>Desenvolvimento de Software e Consultoria de TI</p>
              <p>Nikolausstr. 31, 53129 Bonn</p>
              <p>Alemanha</p>
              <p>USt-IdNr: DE460540613</p>
              <p>Email: info (at) tavon (dot) ai</p>
            </div>

            {/* Privacy Notice Section */}
            <div className="mt-16 space-y-6">
              <h2 className="text-2xl font-bold text-[#2f4858]">Aviso de Privacidade</h2>

              <p className="text-[#6b8393]">
                Processamos dados pessoais de acordo com o Regulamento Geral de Proteção de Dados da UE (RGPD) e a Lei Federal Alemã de Proteção de Dados (BDSG).
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 font-bold text-[#2f4858]">1. Controlador</h3>
                  <p className="text-[#6b8393]">
                    O controlador responsável pelo processamento de dados é o fornecedor nomeado no aviso legal acima.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 font-bold text-[#2f4858]">2. Propósito do processamento de dados</h3>
                  <p className="text-[#6b8393]">
                    Se você fornecer seu endereço de email neste site, usaremos apenas para contatá-lo ou fornecer informações que você solicitou.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 font-bold text-[#2f4858]">3. Base legal</h3>
                  <p className="text-[#6b8393]">
                    O processamento é realizado com base no seu consentimento de acordo com o Art. 6(1)(a) RGPD.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 font-bold text-[#2f4858]">4. Armazenamento de dados</h3>
                  <p className="text-[#6b8393]">
                    Seu endereço de email é armazenado apenas pelo tempo necessário para o objetivo declarado ou até que você retire seu consentimento.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 font-bold text-[#2f4858]">5. Divulgação de dados</h3>
                  <p className="text-[#6b8393]">
                    Não compartilhamos seus dados pessoais com terceiros a menos que isso seja exigido por lei ou você tenha concordado explicitamente.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 font-bold text-[#2f4858]">6. Seus direitos</h3>
                  <p className="text-[#6b8393]">
                    Você tem o direito de solicitar acesso aos seus dados pessoais, retificação, exclusão, restrição do processamento, portabilidade de dados e retirar seu consentimento a qualquer momento com efeito futuro.
                  </p>
                  <p className="mt-2 text-[#6b8393]">
                    Para exercer esses direitos, entre em contato pelo endereço de email mostrado no aviso legal.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 font-bold text-[#2f4858]">7. Retirada de consentimento</h3>
                  <p className="text-[#6b8393]">
                    Você pode retirar seu consentimento para o processamento do seu endereço de email a qualquer momento. Isso não afeta a legalidade do processamento realizado antes de sua retirada.
                  </p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-16 border-t border-gray-200 pt-8">
              <p className="text-sm text-[#6b8393]">
                © 2026 Tavon. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
