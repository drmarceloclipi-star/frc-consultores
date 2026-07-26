/*
 * THESIS: Every project is visitable proof, not a logo or an unsupported promise.
 * OWN-WORLD: White dossier paper, deep slate ink, gold notation and functional labels.
 * STORY: Visitors scan four products, recognize breadth and open the public evidence.
 * FIRST VIEWPORT: Dark field, editorial title and a promise bounded by verifiable facts.
 * FORM: Sequential numbered dossiers, structural candidate 5, seed 0910df44.
 */
import type { Metadata } from "next"
import { CasesPage } from "@/components/CasesPage"
import { JsonLd, breadcrumbSchema } from "@/lib/schema"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  locale: "en",
  path: "/cases",
  title: "Case Studies in Apps, AI and Digital Products",
  description:
    "Explore public FRC projects: Levanta Mão, Jourmingo, Entrela and Medário.",
})

const content = {
  eyebrow: "Selected case studies",
  title: "Real software, available to explore.",
  intro:
    "Four products in distinct contexts — live interaction, private AI, digital health and professional discovery. No invented metrics: every case links to public evidence.",
  visitLabel: "Visit project",
  proofLabel: "About the evidence",
  proofText:
    "Descriptions on this page are limited to capabilities presented publicly by each product. Commercial results, testimonials and metrics are not published without specific authorization.",
  cases: [
    {
      index: "01",
      name: "Levanta Mão",
      category: "Live interaction",
      title: "Questions, polls and participation without an app install.",
      description:
        "A platform that makes presentations participatory. Audiences join from the browser; presenters organize questions, run several poll formats and use on-device AI capabilities.",
      capabilities: ["Web", "Real time", "Polls", "On-device AI"],
      url: "https://www.levantamao.com.br/",
      domain: "levantamao.com.br",
    },
    {
      index: "02",
      name: "Jourmingo",
      category: "Personal AI",
      title: "Text, documents, images and voice with local operation.",
      description:
        "A personal AI designed to accompany its user even without an internet connection. One experience brings together conversation, document reading, image understanding and voice on the device.",
      capabilities: ["iOS", "Local AI", "Offline", "Privacy"],
      url: "https://jourmingo.web.app/",
      domain: "jourmingo.web.app",
    },
    {
      index: "03",
      name: "Entrela",
      category: "Digital health",
      title: "Follow-up between people and health professionals.",
      description:
        "A digital experience for answering well-being questionnaires, following information over time and supporting communication with the responsible professional.",
      capabilities: ["Web", "iOS", "Android", "Health data"],
      url: "https://ladoalado.app/login",
      domain: "ladoalado.app",
    },
    {
      index: "04",
      name: "Medário",
      category: "Health discovery",
      title: "Finding doctors in Joinville through verifiable criteria.",
      description:
        "A medical directory that helps people find professionals by specialty, insurance, neighborhood and availability, bringing together information such as CRM and RQE in a guided search.",
      capabilities: ["Web", "Search", "Directory", "CRM and RQE"],
      url: "https://medario.com.br/",
      domain: "medario.com.br",
    },
  ],
  ctaTitle: "Your project can become the next case — when it is ready.",
  ctaDescription:
    "We begin by understanding the problem, its limits and the smallest delivery capable of producing real use.",
  ctaLabel: "Present a project",
} as const

export default function Cases() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/en" },
          { name: "Case studies", path: "/en/cases" },
        ])}
      />
      <CasesPage locale="en" content={content} />
    </>
  )
}
