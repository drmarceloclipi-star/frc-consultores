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
  locale: "en",
  path: "/apps",
  title: "iOS and Android App Development with Clear Pricing",
  description:
    "Packages for diagnosis, MVP, development, publishing and ongoing iOS and Android app care, starting at BRL 4,900.",
})

const content = getAppProductsContent("en")

export default function Apps() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/en" },
          { name: "Apps", path: "/en/apps" },
        ])}
      />
      <JsonLd data={appProductCatalogSchema("en", content.products)} />
      <AppProductsPage locale="en" content={content} />
    </>
  )
}
