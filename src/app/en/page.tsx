import { HeroSection } from "@/components/HeroSection"
import { SolutionsSection } from "@/components/SolutionsSection"
import { ComparisonSection } from "@/components/ComparisonSection"
import { FeaturesSection } from "@/components/FeaturesSection"
import { CTASection } from "@/components/CTASection"
import { Footer } from "@/components/Footer"
import { Reveal } from "@/components/Reveal"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <HeroSection locale="en" />
        <Reveal>
          <SolutionsSection locale="en" />
        </Reveal>
        <Reveal>
          <ComparisonSection locale="en" />
        </Reveal>
        <Reveal>
          <FeaturesSection locale="en" />
        </Reveal>
        <CTASection locale="en" />
      </main>
      <Footer locale="en" />
    </div>
  )
}
