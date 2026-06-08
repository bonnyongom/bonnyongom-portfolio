import { experiences } from "@/lib/portfolio-data"

export function ExperienceSection() {
  return (
    <section id="experience" aria-label="Work experience" className="scroll-mt-16 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 bg-background/80 px-6 py-5 backdrop-blur lg:hidden">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">Experience</h2>
      </div>
      <ol className="group/list space-y-10">
        {experiences.map((exp) => (
          <li key={exp.role}>
            <div className="group relative grid gap-4 rounded-lg transition-all sm:grid-cols-8 sm:gap-6 lg:p-6 lg:hover:bg-card/60 lg:hover:shadow-sm">
              <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2">
                {exp.period}
              </p>
              <div className="sm:col-span-6">
                <h3 className="font-semibold text-foreground">
                  {exp.role}
                  <span className="block text-sm font-normal text-primary">
                    {exp.company} · {exp.location}
                  </span>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{exp.summary}</p>
                <ul className="mt-3 space-y-1.5">
                  {exp.points.map((point) => (
                    <li
                      key={point}
                      className="relative pl-5 text-sm leading-relaxed text-muted-foreground before:absolute before:left-0 before:top-2 before:size-1.5 before:rounded-full before:bg-primary/70"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <li key={tag}>
                      <span className="inline-flex rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                        {tag}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
