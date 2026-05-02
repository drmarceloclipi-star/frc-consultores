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
        <HeroSection locale="en" />
        <SolutionsSection locale="en" />
        <ComparisonSection locale="en" />
        <FeaturesSection locale="en" />
        <CaseStudiesSection locale="en" />
        <CTASection locale="en" />
      </main>
      <Footer locale="en" />
    </div>
  )
}
