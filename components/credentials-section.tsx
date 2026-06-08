import { GraduationCap, Award, Languages } from "lucide-react"
import { education, certifications, languages } from "@/lib/portfolio-data"

export function CredentialsSection() {
  return (
    <section id="credentials" aria-label="Education, certifications, and languages" className="scroll-mt-16 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 bg-background/80 px-6 py-5 backdrop-blur lg:hidden">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">Credentials</h2>
      </div>

      <div className="space-y-8">
        <div>
          <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">
            <GraduationCap className="size-4" aria-hidden="true" /> Education
          </h3>
          <ul className="mt-3 space-y-3">
            {education.map((e) => (
              <li key={e.degree} className="rounded-lg border border-border/60 bg-card/40 p-4">
                <p className="font-medium text-foreground">{e.degree}</p>
                <p className="text-sm text-muted-foreground">{e.school}</p>
                {e.detail ? <p className="mt-1 text-xs text-muted-foreground">{e.detail}</p> : null}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">
            <Award className="size-4" aria-hidden="true" /> Certifications
          </h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {certifications.map((c) => (
              <li key={c}>
                <span className="inline-flex rounded-md bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground">
                  {c}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">
            <Languages className="size-4" aria-hidden="true" /> Languages
          </h3>
          <ul className="mt-3 flex flex-wrap gap-3">
            {languages.map((l) => (
              <li
                key={l.name}
                className="rounded-lg border border-border/60 bg-card/40 px-4 py-2 text-sm text-foreground"
              >
                {l.name} <span className="text-muted-foreground">— {l.level}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
