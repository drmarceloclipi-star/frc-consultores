import { HeroSection } from "@/components/HeroSection"
import { SolutionsSection } from "@/components/SolutionsSection"
import { ComparisonSection } from "@/components/ComparisonSection"
import { FeaturesSection } from "@/components/FeaturesSection"
import { CTASection } from "@/components/CTASection"
import { Footer } from "@/components/Footer"
import { Reveal } from "@/components/Reveal"
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
        <Reveal>
          <SolutionsSection locale="pt" />
        </Reveal>
        <Reveal>
          <ComparisonSection locale="pt" />
        </Reveal>
        <Reveal>
          <FeaturesSection locale="pt" />
        </Reveal>
        <CTASection locale="pt" />
      </main>
      <Footer locale="pt" />
    </div>
  )
}
