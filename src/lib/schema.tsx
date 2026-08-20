import { BASE_URL } from "./seo"

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BASE_URL}/#organization`,
  name: "FRC",
  legalName: "FRC Consultores Associados LTDA",
  alternateName: "FRC Consultores Associados",
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
  name: "FRC",
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
      ? "Dados Legais / Contato — FRC"
      : "Legal Data / Contact — FRC",
    inLanguage: isPt ? "pt-BR" : "en",
    isPartOf: { "@id": `${BASE_URL}/#website` },
    mainEntity: { "@id": `${BASE_URL}/#organization` },
  }
}

export function entrelaCaseSchema(locale: "pt" | "en") {
  const isPt = locale === "pt"
  const entrelaUrl = "https://ladoalado.app/"
  const brandId = `${entrelaUrl}#brand`

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${BASE_URL}/#organization`,
        name: "FRC",
        legalName: "FRC Consultores Associados LTDA",
        url: BASE_URL,
        brand: { "@id": brandId },
      },
      {
        "@type": "Brand",
        "@id": brandId,
        name: "Entrela",
        url: entrelaUrl,
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${entrelaUrl}#softwareapplication`,
        name: "Entrela",
        url: entrelaUrl,
        applicationCategory: "HealthApplication",
        operatingSystem: ["Web", "iOS", "Android"],
        description: isPt
          ? "Produto digital desenvolvido e operado pela FRC Consultores Associados LTDA para apoiar o acompanhamento entre pessoas e profissionais de saúde."
          : "A digital product developed and operated by FRC Consultores Associados LTDA to support follow-up between people and healthcare professionals.",
        creator: { "@id": `${BASE_URL}/#organization` },
        publisher: { "@id": `${BASE_URL}/#organization` },
      },
    ],
  }
}

export function appProductCatalogSchema(
  locale: "pt" | "en",
  products: readonly {
    id: string
    name: string
    summary: string
    priceValue: number
    recurring?: boolean
  }[]
) {
  const isPt = locale === "pt"
  return {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    "@id": `${BASE_URL}/${locale}/apps#catalog`,
    name: isPt
      ? "Produtos para aplicativos iOS e Android"
      : "iOS and Android app products",
    url: `${BASE_URL}/${locale}/apps`,
    itemListElement: products.map((product) => ({
      "@type": "Offer",
      url: `${BASE_URL}/${locale}/apps#${product.id}`,
      priceCurrency: "BRL",
      priceSpecification: {
        "@type": product.recurring
          ? "UnitPriceSpecification"
          : "PriceSpecification",
        minPrice: product.priceValue,
        priceCurrency: "BRL",
        ...(product.recurring
          ? {
              billingDuration: "P1M",
            }
          : {}),
      },
      itemOffered: {
        "@type": "Service",
        name: product.name,
        description: product.summary,
        provider: { "@id": `${BASE_URL}/#organization` },
        areaServed: "BR",
      },
    })),
  }
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  )
}
