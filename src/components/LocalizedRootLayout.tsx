import { Geist, Source_Serif_4 } from "next/font/google"
import type { ReactNode } from "react"
import { JsonLd, organizationSchema, websiteSchema } from "@/lib/schema"
import type { Locale } from "@/lib/translations"
import { Header } from "./Header"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const displaySerif = Source_Serif_4({
  variable: "--font-display-serif",
  subsets: ["latin"],
  preload: false,
})

interface LocalizedRootLayoutProps {
  children: ReactNode
  locale: Locale
}

export function LocalizedRootLayout({
  children,
  locale,
}: LocalizedRootLayoutProps) {
  return (
    <html
      lang={locale === "pt" ? "pt-BR" : "en"}
      className={`${geistSans.variable} ${displaySerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        <Header locale={locale} />
        {children}
      </body>
    </html>
  )
}
