import type { Metadata } from "next"
import { Geist, Geist_Mono, Fraunces } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz"],
})

export const metadata: Metadata = {
  title: "FRC Consultores Associados — Desenvolvimento de Software",
  description:
    "FRC Consultores Associados LTDA (CNPJ 22.052.463/0001-30): desenvolvimento e licenciamento de software, aplicativos móveis, consultoria em TI e hospedagem. Sede em Recife-PE, desenvolvimento em Joinville-SC. Empresa desde 2015, software desde 2026.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  )
}
