import { HeroSection } from "@/components/HeroSection"
import { SolutionsSection } from "@/components/SolutionsSection"
import { ComparisonSection } from "@/components/ComparisonSection"
import { FeaturesSection } from "@/components/FeaturesSection"
import { CTASection } from "@/components/CTASection"
import { Footer } from "@/components/Footer"
import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  locale: "pt",
  path: "",
  title: "Desenvolvimento de Software Sob Medida",
  description:
    "Desenvolvimento e licenciamento de software, aplicativos móveis, sistemas web, consultoria em TI e hospedagem. Sede em Recife-PE, desenvolvimento em Joinville-SC.",
})

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <HeroSection locale="pt" />
        <SolutionsSection locale="pt" />
        <ComparisonSection locale="pt" />
        <FeaturesSection locale="pt" />
        <CTASection locale="pt" />
      </main>
      <Footer locale="pt" />
    </div>
  )
}
