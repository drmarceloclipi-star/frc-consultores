import type { MetadataRoute } from "next"
import { BASE_URL } from "@/lib/seo"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/impressum"]
  const locales = ["pt", "en"]
  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${BASE_URL}/${locale}${route}`,
      lastModified: new Date("2026-07-02"),
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l === "pt" ? "pt-BR" : "en", `${BASE_URL}/${l}${route}`])
        ),
      },
    }))
  )
}
