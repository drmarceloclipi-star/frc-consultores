import { HeroSection } from "@/components/HeroSection"
import { SolutionsSection } from "@/components/SolutionsSection"
import { ComparisonSection } from "@/components/ComparisonSection"
import { FeaturesSection } from "@/components/FeaturesSection"
import { CTASection } from "@/components/CTASection"
import { Footer } from "@/components/Footer"
import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  locale: "en",
  path: "",
  title: "Custom Software Development",
  description:
    "Software development and licensing, mobile apps, web systems, IT consulting and hosting. Headquartered in Recife, built in Joinville, Brazil.",
})

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <HeroSection locale="en" />
        <SolutionsSection locale="en" />
        <ComparisonSection locale="en" />
        <FeaturesSection locale="en" />
        <CTASection locale="en" />
      </main>
      <Footer locale="en" />
    </div>
  )
}
