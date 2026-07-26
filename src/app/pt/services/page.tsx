/*
 * THESIS: O ciclo completo aparece como índice operacional, não como catálogo de cards.
 * OWN-WORLD: Papel técnico claro, tinta azul-petróleo, marcações douradas e tipografia editorial existente.
 * STORY: O visitante identifica a entrega, entende o processo e inicia uma conversa.
 * FIRST VIEWPORT: Título amplo à direita; etiqueta de seção à esquerda; oferta legível sem rolagem.
 * FORM: Índice de serviço em faixas, candidato estrutural 5, seed 0910df44.
 */
import type { Metadata } from "next"
import { ServicesPage } from "@/components/ServicesPage"
import { JsonLd, breadcrumbSchema } from "@/lib/schema"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  locale: "pt",
  path: "/services",
  title: "Serviços de Software Sob Medida, Apps e Consultoria",
  description:
    "Desenvolvimento de aplicativos e sistemas web, arquitetura, publicação, hospedagem e evolução contínua pela FRC.",
})

const content = {
  eyebrow: "Serviços",
  title: "Do problema ao software em produção.",
  intro:
    "Construímos, publicamos e operamos produtos digitais. Cada frente pode ser contratada isoladamente ou como um ciclo completo, com decisões técnicas explicadas e entregas frequentes.",
  services: [
    {
      index: "01",
      title: "Produtos e software sob medida",
      summary:
        "Transformamos processos e oportunidades em sistemas utilizáveis, mantendo escopo, arquitetura e evolução ligados ao problema de negócio.",
      deliverables: [
        "Descoberta e definição do produto",
        "Sistemas web e plataformas",
        "APIs, integrações e automações",
        "Arquitetura preparada para evoluir",
      ],
    },
    {
      index: "02",
      title: "Aplicativos móveis",
      summary:
        "Criamos experiências para iOS e Android e acompanhamos o trabalho técnico necessário até a distribuição nas lojas.",
      deliverables: [
        "Aplicativos nativos e multiplataforma",
        "Integrações com recursos do aparelho",
        "Preparação para App Store e Google Play",
        "Monitoramento após o lançamento",
      ],
    },
    {
      index: "03",
      title: "Consultoria e modernização",
      summary:
        "Avaliamos sistemas, riscos e alternativas para orientar uma decisão concreta — antes de trocar tecnologia ou iniciar uma reconstrução.",
      deliverables: [
        "Diagnóstico e arquitetura de sistemas",
        "Revisão de código, segurança e desempenho",
        "Seleção de tecnologias e fornecedores",
        "Plano incremental de modernização",
      ],
    },
    {
      index: "04",
      title: "Operação, hospedagem e dados",
      summary:
        "Mantemos aplicações disponíveis, observáveis e prontas para receber melhorias depois da primeira entrega.",
      deliverables: [
        "Hospedagem e configuração de ambientes",
        "Deploy e automação de entrega",
        "Monitoramento e manutenção",
        "Tratamento e integração de dados",
      ],
    },
  ],
  processEyebrow: "Forma de trabalhar",
  processTitle: "Um caminho curto entre entender e colocar em uso.",
  steps: [
    {
      index: "01",
      title: "Entender",
      description: "Problema, usuários, restrições e resultado esperado.",
    },
    {
      index: "02",
      title: "Delimitar",
      description: "Escopo inicial, riscos, arquitetura e critérios de aceite.",
    },
    {
      index: "03",
      title: "Construir",
      description: "Ciclos curtos, software funcionando e comunicação direta.",
    },
    {
      index: "04",
      title: "Publicar",
      description: "Ambientes, lojas, domínio, segurança e observabilidade.",
    },
    {
      index: "05",
      title: "Evoluir",
      description: "Aprendizado de uso transformado em melhorias priorizadas.",
    },
  ],
  ctaTitle: "Qual parte do ciclo está travando o seu projeto?",
  ctaDescription:
    "Conte o contexto. A primeira conversa serve para organizar o problema e identificar o próximo passo útil.",
  ctaLabel: "Conversar com a FRC",
} as const

export default function Services() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Início", path: "/pt" },
          { name: "Serviços", path: "/pt/services" },
        ])}
      />
      <ServicesPage locale="pt" content={content} />
    </>
  )
}
