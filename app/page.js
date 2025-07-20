import HeroSection from "@/components/HeroSection"
import SocialsSection from "@/components/SocialsSection"
import SkillsSection from "@/components/SkillsSection"
import ProjectsSection from "@/components/ProjectsSection"
import WhatIDoSection from "@/components/WhatIDoSection"
import ExperienceSection from "@/components/ExperienceSection"
import ArticlesSection from "@/components/ArticlesSection"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <SocialsSection />
      <SkillsSection />
      <ProjectsSection />
      <WhatIDoSection />
      <ExperienceSection />
      <ArticlesSection />
      <Footer />
    </div>
  )
}
