import type { Metadata } from "next"
import { AppProductsPage } from "@/components/AppProductsPage"
import { getAppProductsContent } from "@/lib/app-products"
import {
  JsonLd,
  appProductCatalogSchema,
  breadcrumbSchema,
} from "@/lib/schema"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  locale: "pt",
  path: "/apps",
  title: "Criação de Apps iOS e Android com Preços Claros",
  description:
    "Pacotes para diagnóstico, MVP, desenvolvimento, publicação e evolução de aplicativos iOS e Android a partir de R$ 4.900.",
})

const content = getAppProductsContent("pt")

export default function Apps() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Início", path: "/pt" },
          { name: "Apps", path: "/pt/apps" },
        ])}
      />
      <JsonLd data={appProductCatalogSchema("pt", content.products)} />
      <AppProductsPage locale="pt" content={content} />
    </>
  )
}
