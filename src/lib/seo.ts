import type { Metadata } from "next"

export const BASE_URL = "https://frcconsultores.web.app"

export function pageMetadata({
  locale,
  path,
  title,
  description,
}: {
  locale: "pt" | "en"
  path: "" | "/about" | "/impressum"
  title: string
  description: string
}): Metadata {
  const url = `${BASE_URL}/${locale}${path}`
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        "pt-BR": `${BASE_URL}/pt${path}`,
        en: `${BASE_URL}/en${path}`,
        "x-default": `${BASE_URL}/pt${path}`,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "FRC Consultores",
      locale: locale === "pt" ? "pt_BR" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  }
}
