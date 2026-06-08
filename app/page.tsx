import { Sidebar } from "@/components/sidebar"
import { About } from "@/components/about"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { HighlightsSection } from "@/components/highlights-section"
import { SkillsSection } from "@/components/skills-section"
import { CredentialsSection } from "@/components/credentials-section"
import { ContactSection } from "@/components/contact-section"
import { profile } from "@/lib/portfolio-data"

export default function Page() {
  return (
    <div className="mx-auto min-h-screen max-w-6xl px-6 font-sans md:px-12 lg:px-24">
      <div className="lg:flex lg:justify-between lg:gap-12">
        <Sidebar />
        <main id="content" className="pt-16 lg:w-[56%] lg:py-24">
          <div className="space-y-20 lg:space-y-28">
            <About />
            <ExperienceSection />
            <ProjectsSection />
            <HighlightsSection />
            <SkillsSection />
            <CredentialsSection />
            <ContactSection />
          </div>
          <footer className="mt-20 border-t border-border/60 pt-8 pb-16">
            <p className="text-sm font-semibold leading-relaxed text-foreground">
              Software Engineer | Web Applications | Automation | Digital Systems
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Registered Freelancer in Germany
            </p>
            <p className="mt-4 text-xs text-muted-foreground">
              Designed and built by {profile.name} © {new Date().getFullYear()}
            </p>
          </footer>
        </main>
      </div>
    </div>
  )
}
