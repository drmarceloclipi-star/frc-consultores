/*
 * THESIS: Cada projeto é uma prova visitável, não um logotipo ou uma promessa.
 * OWN-WORLD: Dossiê branco, tinta azul-petróleo, marcações douradas e etiquetas funcionais.
 * STORY: O visitante percorre quatro produtos, reconhece amplitude e visita a evidência pública.
 * FIRST VIEWPORT: Fundo escuro, título editorial e promessa limitada ao que pode ser verificado.
 * FORM: Dossiês numerados em sequência, candidato estrutural 5, seed 0910df44.
 */
import type { Metadata } from "next"
import { CasesPage } from "@/components/CasesPage"
import { JsonLd, breadcrumbSchema } from "@/lib/schema"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  locale: "pt",
  path: "/cases",
  title: "Cases de Aplicativos, IA e Produtos Digitais",
  description:
    "Conheça projetos públicos da FRC: Levanta Mão, Jourmingo, Entrela e Medário.",
})

const content = {
  eyebrow: "Cases selecionados",
  title: "Software real, disponível para conhecer.",
  intro:
    "Quatro produtos com contextos distintos — interação ao vivo, IA privada, saúde digital e descoberta de profissionais. Sem métricas inventadas: cada case leva à sua evidência pública.",
  visitLabel: "Visitar projeto",
  proofLabel: "Sobre as evidências",
  proofText:
    "As descrições desta página se limitam às capacidades apresentadas publicamente por cada produto. Resultados comerciais, depoimentos e métricas não são publicados sem autorização específica.",
  cases: [
    {
      index: "01",
      name: "Levanta Mão",
      category: "Interação ao vivo",
      title: "Perguntas, enquetes e participação sem instalar aplicativo.",
      description:
        "Uma plataforma para tornar apresentações participativas. A plateia entra pelo navegador; quem apresenta organiza perguntas, conduz enquetes em diferentes formatos e usa recursos de IA no aparelho.",
      capabilities: ["Web", "Tempo real", "Enquetes", "IA no aparelho"],
      url: "https://www.levantamao.com.br/",
      domain: "levantamao.com.br",
    },
    {
      index: "02",
      name: "Jourmingo",
      category: "IA pessoal",
      title: "Texto, documentos, imagens e voz com operação local.",
      description:
        "Uma IA pessoal desenhada para acompanhar o usuário inclusive sem internet. A experiência reúne conversa, leitura de documentos, compreensão de imagens e voz com processamento no aparelho.",
      capabilities: ["iOS", "IA local", "Offline", "Privacidade"],
      url: "https://jourmingo.web.app/",
      domain: "jourmingo.web.app",
    },
    {
      index: "03",
      name: "Entrela",
      category: "Saúde digital",
      title: "Acompanhamento entre pessoas e profissionais de saúde.",
      description:
        "Uma experiência digital para responder questionários de bem-estar, acompanhar informações ao longo do tempo e apoiar a comunicação com o profissional responsável.",
      capabilities: ["Web", "iOS", "Android", "Dados de saúde"],
      url: "https://ladoalado.app/login",
      domain: "ladoalado.app",
    },
    {
      index: "04",
      name: "Medário",
      category: "Descoberta em saúde",
      title: "Busca de médicos em Joinville com critérios verificáveis.",
      description:
        "Um catálogo médico que ajuda a encontrar profissionais por especialidade, convênio, bairro e disponibilidade, reunindo informações como CRM e RQE em uma busca orientada.",
      capabilities: ["Web", "Busca", "Catálogo", "CRM e RQE"],
      url: "https://medario.com.br/",
      domain: "medario.com.br",
    },
  ],
  ctaTitle: "Seu projeto pode ser o próximo case — quando estiver pronto.",
  ctaDescription:
    "Começamos entendendo o problema, os limites e a menor entrega capaz de gerar uso real.",
  ctaLabel: "Apresentar um projeto",
} as const

export default function Cases() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Início", path: "/pt" },
          { name: "Cases", path: "/pt/cases" },
        ])}
      />
      <CasesPage locale="pt" content={content} />
    </>
  )
}
