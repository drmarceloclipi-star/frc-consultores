import type { Metadata } from "next"

export const BASE_URL = "https://frcconsultores.com.br"

export function pageMetadata({
  locale,
  path,
  title,
  description,
}: {
  locale: "pt" | "en"
  path: "" | "/about" | "/cases" | "/impressum" | "/services"
  title: string
  description: string
}): Metadata {
  const url = `${BASE_URL}/${locale}${path}`
  const socialImage = {
    url: `${BASE_URL}/${locale}/opengraph-image`,
    width: 1200,
    height: 630,
    alt:
      locale === "pt"
        ? "FRC Consultores — Desenvolvimento de Software Sob Medida"
        : "FRC Consultores — Custom Software Development",
  }

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
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage],
    },
  }
}
