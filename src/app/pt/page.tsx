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
