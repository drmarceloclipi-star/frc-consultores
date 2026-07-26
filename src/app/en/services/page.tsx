/*
 * THESIS: The full delivery cycle reads as an operating index, not a card catalog.
 * OWN-WORLD: Pale technical paper, deep slate ink, gold notation and the existing editorial type.
 * STORY: Visitors identify the delivery, understand the process and start a conversation.
 * FIRST VIEWPORT: Wide title to the right; section marker left; offer understood before scrolling.
 * FORM: Banded service index, structural candidate 5, seed 0910df44.
 */
import type { Metadata } from "next"
import { ServicesPage } from "@/components/ServicesPage"
import { JsonLd, breadcrumbSchema } from "@/lib/schema"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  locale: "en",
  path: "/services",
  title: "Custom Software, App Development and IT Consulting",
  description:
    "Web and mobile development, architecture, publishing, hosting and continuous evolution by FRC.",
})

const content = {
  eyebrow: "Services",
  title: "From the problem to production software.",
  intro:
    "We build, publish and operate digital products. Each discipline can stand alone or form one complete cycle, with explained technical decisions and frequent deliveries.",
  services: [
    {
      index: "01",
      title: "Custom products and software",
      summary:
        "We turn processes and opportunities into usable systems, keeping scope, architecture and evolution tied to the business problem.",
      deliverables: [
        "Product discovery and definition",
        "Web systems and platforms",
        "APIs, integrations and automation",
        "Architecture designed to evolve",
      ],
    },
    {
      index: "02",
      title: "Mobile applications",
      summary:
        "We create iOS and Android experiences and handle the technical work required through app-store distribution.",
      deliverables: [
        "Native and cross-platform apps",
        "On-device capability integrations",
        "App Store and Google Play preparation",
        "Post-launch monitoring",
      ],
    },
    {
      index: "03",
      title: "Consulting and modernization",
      summary:
        "We assess systems, risks and alternatives to support a concrete decision before replacing technology or starting a rebuild.",
      deliverables: [
        "System assessment and architecture",
        "Code, security and performance review",
        "Technology and vendor selection",
        "Incremental modernization plan",
      ],
    },
    {
      index: "04",
      title: "Operations, hosting and data",
      summary:
        "We keep applications available, observable and ready for improvement after the first release.",
      deliverables: [
        "Hosting and environment setup",
        "Deployment and delivery automation",
        "Monitoring and maintenance",
        "Data processing and integration",
      ],
    },
  ],
  processEyebrow: "How we work",
  processTitle: "A short path from understanding to active use.",
  steps: [
    {
      index: "01",
      title: "Understand",
      description: "Problem, users, constraints and the expected outcome.",
    },
    {
      index: "02",
      title: "Frame",
      description: "Initial scope, risks, architecture and acceptance criteria.",
    },
    {
      index: "03",
      title: "Build",
      description: "Short cycles, working software and direct communication.",
    },
    {
      index: "04",
      title: "Release",
      description: "Environments, stores, domain, security and observability.",
    },
    {
      index: "05",
      title: "Evolve",
      description: "Usage learning translated into prioritized improvements.",
    },
  ],
  ctaTitle: "Which part of the cycle is holding your project back?",
  ctaDescription:
    "Share the context. The first conversation organizes the problem and identifies a useful next step.",
  ctaLabel: "Talk to FRC",
} as const

export default function Services() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/en" },
          { name: "Services", path: "/en/services" },
        ])}
      />
      <ServicesPage locale="en" content={content} />
    </>
  )
}
