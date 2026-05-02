import { HeroSection } from "@/components/HeroSection"
import { SolutionsSection } from "@/components/SolutionsSection"
import { ComparisonSection } from "@/components/ComparisonSection"
import { FeaturesSection } from "@/components/FeaturesSection"
import { CaseStudiesSection } from "@/components/CaseStudiesSection"
import { CTASection } from "@/components/CTASection"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <HeroSection locale="pt" />
        <SolutionsSection locale="pt" />
        <ComparisonSection locale="pt" />
        <FeaturesSection locale="pt" />
        <CaseStudiesSection locale="pt" />
        <CTASection locale="pt" />
      </main>
      <Footer locale="pt" />
    </div>
  )
}
