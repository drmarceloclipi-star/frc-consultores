"use client"

import { useState } from "react"
import { ContactFormModal } from "@/components/ContactFormModal"

export default function Academy() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedTopic, setSelectedTopic] = useState<string>("")

  const handleOpenModal = (topic: string) => {
    setSelectedTopic(topic)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedTopic("")
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-1">
        {/* Header */}
        <section className="w-full bg-white py-20 md:py-32">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 flex flex-col items-center text-center">
              <h1 className="mb-6 text-4xl font-bold text-[#2f4858] md:text-5xl">
                Tavon <span className="text-[#c9a961]">Academia</span>
              </h1>

              <p className="mx-auto max-w-2xl text-base font-normal text-[#6b8393] leading-relaxed md:text-lg">
                Aprenda a aproveitar o poder dos agentes de IA. De webinars introdutórios gratuitos
                a workshops práticos, ajudaremos você e sua equipe a dominar plataformas de agentes de IA.
              </p>
            </div>
          </div>
        </section>

        {/* Free Webinar Section */}
        <section className="w-full bg-white py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-lg bg-[#3a4d5c] p-8 md:p-12 text-white">
              {/* FREE Badge */}
              <div className="mb-6">
                <span className="inline-block bg-[#c9a961] text-[#2f4858] px-3 py-1 rounded-full text-sm font-bold">
                  GRATUITO
                </span>
              </div>

              {/* Title */}
              <h2 className="mb-4 text-2xl md:text-3xl font-bold">
                Apresentando Claude Cowork: Usando Agentes Locais para Executar Trabalho
              </h2>

              {/* Description */}
              <p className="mb-8 text-base leading-relaxed opacity-90">
                Agentes estão em todos os lugares. Todos estão falando sobre o que agentes poderiam fazer. Mas como você na verdade implementa um agente hoje para executar trabalho real?
              </p>

              {/* Two Column Content */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
                {/* What You'll Learn */}
                <div>
                  <h3 className="text-lg font-bold mb-4">O que Você Aprenderá</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <span className="text-[#c9a961] mt-1">•</span>
                      <span>Por que nova arquitetura de agentes os torna diferentes de chatbots</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#c9a961] mt-1">•</span>
                      <span>Exemplos reais de fluxos de trabalho multi-etapa executados autonomamente</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#c9a961] mt-1">•</span>
                      <span>Como começar pequeno, experimentar rápido e escalar o que funciona</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#c9a961] mt-1">•</span>
                      <span>Seus primeiros passos práticos com Claude Cowork</span>
                    </li>
                  </ul>
                </div>

                {/* Details */}
                <div>
                  <h3 className="text-lg font-bold mb-4">Detalhes</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm opacity-75">Duração:</p>
                      <p className="font-semibold">45 minutos + Perguntas e Respostas</p>
                    </div>
                    <div>
                      <p className="text-sm opacity-75">Formato:</p>
                      <p className="font-semibold">Sessão online ao vivo</p>
                    </div>
                    <div>
                      <p className="text-sm opacity-75">Hospedado por:</p>
                      <p className="font-semibold">Matthias Lübken</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quote */}
              <p className="mb-8 text-sm italic opacity-75">
                Sem hype. Sem roteiros teóricos. Apenas o que realmente funciona.
              </p>

              {/* Dates Section */}
              <div className="bg-[#2f4858] rounded p-6 mb-8">
                <h3 className="text-lg font-bold mb-4">Datas</h3>
                <p className="mb-6 opacity-90">
                  Estamos planejando as próximas sessões ao vivo. Solicite mais informações e avisaremos assim que as datas forem anunciadas.
                </p>
                <button onClick={() => handleOpenModal("Webinar Claude Cowork")} className="border-2 border-[#c9a961] text-[#c9a961] px-6 py-2 rounded font-semibold hover:bg-[#c9a961] hover:text-[#2f4858] transition cursor-pointer">
                  Solicitar Mais Informações
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Workshops Section */}
        <section className="w-full bg-white py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl md:text-4xl font-bold text-[#2f4858]">
                Workshops
              </h2>
              <p className="text-base text-[#6b8393]">
                Workshops práticos e práticos projetados para ajudar todos a aproveitar agentes de IA no seu trabalho diário.
              </p>
            </div>

            {/* Claude for Everyone Workshop */}
            <div className="mb-12 border-l-4 border-l-[#c9a961] p-8 bg-white rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-[#2f4858] mb-4">
                Claude para Todos
              </h3>
              <p className="text-[#6b8393] mb-8">
                Depois que engenheiros usam Claude para desenvolvimento, é hora de aproveitá-lo para o resto dos usuários profissionais. Uma série de workshops práticos que ensina aos profissionais do conhecimento como usar Claude Cowork para tarefas diárias.
              </p>

              {/* What You'll Learn Grid */}
              <div className="mb-8">
                <h4 className="text-lg font-bold text-[#2f4858] mb-4">O que Você Aprenderá</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="font-bold text-[#c9a961] mb-1">1. Fundamentos: De Chat para Cowork</p>
                    <p className="text-sm text-[#6b8393]">Configure Claude Cowork, entenda o loop de tarefas principais e complete sua primeira tarefa real</p>
                  </div>
                  <div>
                    <p className="font-bold text-[#c9a961] mb-1">3. Documentos e Análise de Dados</p>
                    <p className="text-sm text-[#6b8393]">Produza apresentações, relatórios, planilhas e execute análises em escala usando subagentes</p>
                  </div>
                  <div>
                    <p className="font-bold text-[#c9a961] mb-1">2. Coordenação e Comunicação</p>
                    <p className="text-sm text-[#6b8393]">Conecte email, calendário e outras ferramentas para construir fluxos de trabalho de coordenação</p>
                  </div>
                  <div>
                    <p className="font-bold text-[#c9a961] mb-1">4. Automação, Fluxos de Trabalho e Tornando Sustentável</p>
                    <p className="text-sm text-[#6b8393]">Configure tarefas agendadas, escreva prompts multi-etapas e planeje implementação em equipe</p>
                  </div>
                </div>
              </div>

              {/* Format and Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-bold text-[#2f4858] mb-3">Formato</h4>
                  <ul className="text-sm text-[#6b8393] space-y-1">
                    <li>• 4 Sessões Online ao Vivo</li>
                    <li>• 1,5 horas cada · 18:00 – 19:30 CET</li>
                    <li>• Interativo com Perguntas e Respostas</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-[#2f4858] mb-3">Detalhes</h4>
                  <p className="text-sm text-[#6b8393]">Formato: 4 sessões online ao vivo · 1,5 horas cada</p>
                  <p className="text-sm text-[#6b8393]">Datas: A ser anunciado</p>
                </div>
              </div>

              <button onClick={() => handleOpenModal("Workshop Claude para Todos")} className="border-2 border-[#c9a961] text-[#c9a961] px-6 py-2 rounded font-semibold hover:bg-[#c9a961] hover:text-white transition cursor-pointer">
                Solicitar Mais Informações
              </button>
            </div>

            {/* Workshop Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Online Workshops Card */}
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-[#2f4858] mb-4">
                  Workshops Online
                </h3>
                <p className="text-sm text-[#6b8393] mb-6">
                  Sessões de treinamento práticas onde você aprenderá a usar plataformas de agentes de IA como Claude Cowork, construir automações simples e aplicar as melhores práticas.
                </p>

                <div className="mb-6 space-y-2">
                  <p className="text-sm text-[#6b8393]">✓ Sessões ao vivo interativas</p>
                  <p className="text-sm text-[#6b8393]">✓ Exercícios práticos e exemplos</p>
                  <p className="text-sm text-[#6b8393]">✓ Certificado de conclusão</p>
                </div>

                <div className="mb-6">
                  <p className="text-sm font-bold text-[#2f4858] mb-2">Próxima Turma</p>
                  <p className="text-sm text-[#6b8393]">Datas a ser anunciadas</p>
                </div>

                <button onClick={() => handleOpenModal("Workshops Online")} className="w-full border-2 border-[#c9a961] text-[#c9a961] px-4 py-2 rounded font-semibold hover:bg-[#c9a961] hover:text-white transition cursor-pointer">
                  Solicitar Mais Informações
                </button>
              </div>

              {/* On-Site Workshops Card */}
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-[#2f4858] mb-4">
                  Workshops Presenciais
                </h3>
                <p className="text-sm text-[#6b8393] mb-6">
                  Treinamento imersivo presencial personalizado para suas necessidades. Vamos até você e trabalhamos com seus casos de uso e ferramentas específicas.
                </p>

                <div className="mb-6 space-y-2">
                  <p className="text-sm text-[#6b8393]">✓ Troque com outros colegas</p>
                  <p className="text-sm text-[#6b8393]">✓ Formato intensivo de 1 dia</p>
                </div>

                <div className="mb-6">
                  <p className="text-sm font-bold text-[#2f4858] mb-2">Locais</p>
                  <p className="text-sm text-[#6b8393]">Colônia • Berlim • Londres</p>
                  <p className="text-sm text-[#6b8393]">(Datas a definir)</p>
                </div>

                <button onClick={() => handleOpenModal("Workshops Presenciais")} className="w-full border-2 border-[#c9a961] text-[#c9a961] px-4 py-2 rounded font-semibold hover:bg-[#c9a961] hover:text-white transition cursor-pointer">
                  Solicitar Mais Informações
                </button>
              </div>

              {/* Custom Training Card */}
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-[#2f4858] mb-4">
                  Treinamento Personalizado
                </h3>
                <p className="text-sm text-[#6b8393] mb-6">
                  Precisa de algo específico? Criamos programas de treinamento personalizados para sua organização, cobrindo exatamente o que sua equipe precisa saber.
                </p>

                <div className="mb-6 space-y-2">
                  <p className="text-sm text-[#6b8393]">✓ Currículo totalmente personalizado</p>
                  <p className="text-sm text-[#6b8393]">✓ Seu cronograma e formato</p>
                  <p className="text-sm text-[#6b8393]">✓ Opções de suporte contínuo</p>
                </div>

                <div className="mb-6">
                  <p className="text-sm font-bold text-[#2f4858] mb-2">Perfeito Para</p>
                  <p className="text-sm text-[#6b8393]">Workshops executivos, treinamento específico de departamento ou programas em toda empresa</p>
                </div>

                <button onClick={() => handleOpenModal("Treinamento Personalizado")} className="w-full border-2 border-[#c9a961] text-[#c9a961] px-4 py-2 rounded font-semibold hover:bg-[#c9a961] hover:text-white transition cursor-pointer">
                  Entre em Contato
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full bg-white py-16 md:py-24">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="mb-4 text-3xl font-bold text-[#2f4858]">
              Perguntas Sobre Treinamento?
            </h2>
            <p className="mb-8 text-base text-[#6b8393]">
              Somos felizes em discutir qual opção de treinamento é melhor para sua equipe e organização.
            </p>
            <button onClick={() => handleOpenModal("Investigação de Treinamento")} className="bg-[#c9a961] text-[#2f4858] px-8 py-3 rounded font-semibold hover:bg-[#b0925a] transition cursor-pointer">
              Entre em Contato
            </button>
          </div>
        </section>

        <ContactFormModal isOpen={isModalOpen} onClose={handleCloseModal} solutionType={selectedTopic} locale="pt" />
      </main>
    </div>
  )
}
