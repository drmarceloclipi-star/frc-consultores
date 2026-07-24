import { BASE_URL } from "./seo"

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BASE_URL}/#organization`,
  name: "FRC Consultores Associados LTDA",
  legalName: "FRC Consultores Associados LTDA",
  alternateName: "FRC Consultores",
  url: BASE_URL,
  description:
    "Desenvolvimento e licenciamento de programas de computador, aplicativos móveis, consultoria em TI e hospedagem de dados.",
  foundingDate: "2015-03-16",
  identifier: {
    "@type": "PropertyValue",
    propertyID: "CNPJ",
    value: "22.052.463/0001-30",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Irene Ramos Gomes de Mattos, 97",
    addressLocality: "Recife",
    addressRegion: "PE",
    postalCode: "51011-530",
    addressCountry: "BR",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "contato@frcconsultores.com.br",
    telephone: "+55-47-99692-0935",
    areaServed: "BR",
    availableLanguage: ["Portuguese", "English"],
  },
  founder: [
    { "@type": "Person", name: "Maria de Fátima Resende Cavalcanti" },
    { "@type": "Person", name: "Marcelo Hugo Resende Tiburtius Cavalcanti" },
  ],
}

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  url: BASE_URL,
  name: "FRC Consultores Associados",
  publisher: { "@id": `${BASE_URL}/#organization` },
  inLanguage: ["pt-BR", "en"],
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${BASE_URL}${item.path}`,
    })),
  }
}

export function contactPageSchema(locale: "pt" | "en") {
  const isPt = locale === "pt"
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${BASE_URL}/${locale}/impressum#webpage`,
    url: `${BASE_URL}/${locale}/impressum`,
    name: isPt
      ? "Dados Legais / Contato — FRC Consultores"
      : "Legal Data / Contact — FRC Consultores",
    inLanguage: isPt ? "pt-BR" : "en",
    isPartOf: { "@id": `${BASE_URL}/#website` },
    mainEntity: { "@id": `${BASE_URL}/#organization` },
  }
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
