import { profile, coreTechStack, currentFocus } from "@/lib/portfolio-data"

export function About() {
  return (
    <section id="about" aria-label="About me" className="scroll-mt-16 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 bg-background/80 px-6 py-5 backdrop-blur lg:hidden">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">About</h2>
      </div>
      <p className="mb-6 text-pretty text-lg leading-relaxed text-foreground">{profile.heroIntro}</p>

      <div className="mb-8">
        <h3 className="mb-3 text-[11px] font-bold uppercase tracking-widest text-primary">Core Technology Stack</h3>
        <ul className="flex flex-wrap gap-2">
          {coreTechStack.map((tech) => (
            <li key={tech}>
              <span className="inline-flex rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                {tech}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-4">
        {profile.about.map((paragraph, i) => (
          <p key={i} className="text-pretty leading-relaxed text-muted-foreground">
            {paragraph}
          </p>
        ))}
      </div>

      <blockquote className="mt-6 border-l-2 border-primary pl-4 text-pretty leading-relaxed text-foreground">
        {profile.valueStatement}
      </blockquote>

      <div className="mt-10">
        <h3 className="mb-4 text-[11px] font-bold uppercase tracking-widest text-primary">Current Focus</h3>
        <ul className="grid gap-3 sm:grid-cols-2">
          {currentFocus.map((item) => (
            <li
              key={item}
              className="rounded-lg border border-border/60 bg-card/40 px-4 py-3 text-sm font-medium leading-snug text-foreground transition-colors hover:border-primary/40"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
