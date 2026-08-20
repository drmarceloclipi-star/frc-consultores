/*
 * THESIS: Every project is visitable proof, not a logo or an unsupported promise.
 * OWN-WORLD: White dossier paper, deep slate ink, gold notation and functional labels.
 * STORY: Visitors scan seven products, recognize breadth and open the public evidence.
 * FIRST VIEWPORT: Dark field, editorial title and a promise bounded by verifiable facts.
 * FORM: Sequential numbered dossiers, structural candidate 5, seed 0910df44.
 */
import type { Metadata } from "next"
import { CasesPage } from "@/components/CasesPage"
import { JsonLd, breadcrumbSchema, productCasesSchema } from "@/lib/schema"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  locale: "en",
  path: "/cases",
  title: "Case Studies in Apps, AI and Digital Products",
  description:
    "Explore public FRC projects: Levanta Mão, Jourmingo, Entrela, Medário, Triagemia, BedSight Flow and Precepte.",
})

const content = {
  eyebrow: "Selected case studies",
  title: "Real software, available to explore.",
  intro:
    "Seven products in distinct contexts — live interaction, private AI, digital health, professional discovery, psychiatric triage, hospital flow and medical residency. No invented metrics: every case links to public evidence.",
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
        "Entrela is a digital product developed and operated by FRC Consultores Associados LTDA. It organizes well-being questionnaires and other information over time to support communication with the linked healthcare professional.",
      capabilities: ["Web", "iOS", "Android", "Health data"],
      url: "https://ladoalado.app/",
      domain: "ladoalado.app",
      links: [
        {
          label: "Entrela Privacy Policy",
          url: "https://ladoalado.app/en/privacy",
        },
        {
          label: "Entrela Terms of Use",
          url: "https://ladoalado.app/en/terms",
        },
      ],
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
    {
      index: "05",
      name: "Triagemia",
      category: "Psychiatric triage",
      title: "Structured collection and AI-assisted clinical summaries.",
      description:
        "Triagemia is a free digital product developed, licensed, and operated by FRC Consultores Associados LTDA. It supports mental health professionals with structured collection and AI-assisted clinical summaries, without providing a diagnosis.",
      capabilities: ["Web", "iOS", "Android", "Mental health"],
      url: "https://triagemia.com.br/en/",
      domain: "triagemia.com.br",
      links: [
        {
          label: "Triagemia Privacy Policy",
          url: "https://triagemia.com.br/en/privacidade",
        },
        {
          label: "Triagemia Terms of Use",
          url: "https://triagemia.com.br/en/termos",
        },
      ],
    },
    {
      index: "06",
      name: "BedSight Flow",
      category: "Hospital flow",
      title: "Visual management for hospital bed routines.",
      description:
        "An operational governance system for hospital flow based on Lean Healthcare, using Kamishibai, Kanban and Huddle to organize bed routines.",
      capabilities: ["Web", "Bed management", "Lean Healthcare", "Real time"],
      url: "https://lean-841e5.web.app/",
      domain: "lean-841e5.web.app",
    },
    {
      index: "07",
      name: "Precepte",
      category: "Medical residency",
      title: "Academic and operational management for residency programs.",
      description:
        "A platform for medical residency programs that centralizes attendance, assessments, schedules, communication and institutional oversight.",
      capabilities: ["Web", "iOS", "Android", "Medical residency"],
      url: "https://precepta-72265.web.app/",
      domain: "precepta-72265.web.app",
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
      <JsonLd data={productCasesSchema("en")} />
      <CasesPage locale="en" content={content} />
    </>
  )
}
