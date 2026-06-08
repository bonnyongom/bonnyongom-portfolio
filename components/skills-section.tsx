import { skillGroups } from "@/lib/portfolio-data"

export function SkillsSection() {
  return (
    <section id="skills" aria-label="Technical skills" className="scroll-mt-16 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 bg-background/80 px-6 py-5 backdrop-blur lg:hidden">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">Skills</h2>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.label} className="rounded-lg border border-border/60 bg-card/40 p-5">
            <h3 className="text-xs font-bold uppercase tracking-widest text-primary">{group.label}</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item}>
                  <span className="inline-flex rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
