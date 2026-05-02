"use client"

interface TeamMember {
  id: string
  name: string
  role: string
  description: string
  linkedinUrl: string
}

const teamMembers: TeamMember[] = [
  {
    id: "ml",
    name: "Matthias Lübken",
    role: "",
    description:
      "Com anos de experiência construindo e escalando ferramentas de desenvolvimento, Matthias ajuda equipes a adotar agentes de IA efetivamente. Ele entende os desafios de implementar novas tecnologias em ambientes comerciais reais e o guia através dos passos práticos para o sucesso.",
    linkedinUrl: "#",
  },
  {
    id: "ip",
    name: "Ivan Pedrazas",
    role: "",
    description:
      "Ivan combina profundidade técnica com perspectiva comercial prática. Ele ajuda organizações a construir soluções robustas de agentes de IA que funcionam em produção e treina equipes para mantê-las e evoluí-las ao longo do tempo.",
    linkedinUrl: "#",
  },
  {
    id: "ag",
    name: "Dra. Anna Maria Gajda",
    role: "Consultoria",
    description:
      "Anna traz expertise profunda em transformar processos complexos em fluxos de trabalho simplificados. Ela trabalha perto de equipes para identificar onde agentes de IA podem fazer o maior impacto e garante uma adoção suave e bem-sucedida em toda a organização.",
    linkedinUrl: "#",
  },
]

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-1">
        {/* Header */}
        <section className="w-full bg-white py-20 md:py-32">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-20 flex flex-col items-center text-center">
              <h1 className="mb-6 text-4xl font-bold text-[#2f4858] md:text-5xl">
                Os <span className="text-[#c9a961]">Sussurradores de Agentes</span>
              </h1>

              <p className="mx-auto max-w-2xl text-base font-normal text-[#6b8393] leading-relaxed md:text-lg">
                Agentes de IA estão transformando como empresas trabalham. Nós estamos
                profundamente neste espaço, aprendendo o que funciona e o que não.
                Agora estamos aqui para ajudá-lo a navegar essa transformação com confiança.
              </p>
            </div>

            {/* Team Members Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="bg-white border border-gray-200 rounded-lg p-8 flex flex-col items-center text-center"
                >
                  {/* Avatar Circle */}
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#2f4858] to-[#6b8393] flex items-center justify-center text-white text-3xl font-bold mb-6">
                    {member.id.toUpperCase()}
                  </div>

                  {/* Name */}
                  <h3 className="text-xl font-bold text-[#2f4858] mb-2">
                    {member.name}
                  </h3>

                  {/* Role */}
                  {member.role && (
                    <p className="text-sm font-semibold text-[#c9a961] mb-4">
                      {member.role}
                    </p>
                  )}

                  {/* Description */}
                  <p className="text-sm text-[#6b8393] leading-relaxed mb-6 flex-grow">
                    {member.description}
                  </p>

                  {/* LinkedIn Link */}
                  <a
                    href={member.linkedinUrl}
                    className="inline-flex items-center gap-2 text-[#c9a961] font-semibold hover:underline"
                  >
                    <span>🔗</span>
                    Conecte no LinkedIn
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full bg-[#3a4d5c] py-20 md:py-32">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Vamos Conversar Sobre Seus Desafios
            </h2>
            <p className="mb-8 text-base text-gray-100">
              Quer você esteja apenas começando a explorar agentes de IA ou pronto para
              implementá-los, estamos aqui para ajudar.
            </p>
            <button className="bg-[#c9a961] text-[#2f4858] px-8 py-3 rounded font-semibold hover:bg-[#b0925a] transition">
              Entre em Contato
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}
