import Image from "next/image"
import { Lock } from "@/components/icons"
import { projects } from "@/lib/portfolio-data"

function Detail({ label, children }: { label: string; children: string }) {
  return (
    <div>
      <span className="text-[11px] font-bold uppercase tracking-widest text-primary">{label}</span>
      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{children}</p>
    </div>
  )
}

export function ProjectsSection() {
  return (
    <section id="projects" aria-label="Selected projects" className="scroll-mt-16 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 bg-background/80 px-6 py-5 backdrop-blur lg:hidden">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">Projects</h2>
      </div>
      <ul className="space-y-6">
        {projects.map((project) => (
          <li key={project.name}>
            <article className="group overflow-hidden rounded-xl border border-border/60 bg-card/40 transition-all hover:border-primary/40 hover:bg-card/70">
              <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-border/60 bg-secondary">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={`${project.name} interface preview`}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-5 sm:p-6">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground">
                    {project.name}
                    {project.private && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
                        <Lock className="size-3" aria-hidden="true" />
                        Private
                      </span>
                    )}
                  </h3>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary">
                    <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
                    {project.status}
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{project.description}</p>

                <div className="mt-4 grid gap-4 sm:grid-cols-3">
                  <Detail label="Problem">{project.problem}</Detail>
                  <Detail label="Solution">{project.solution}</Detail>
                  <Detail label="Outcome">{project.outcome}</Detail>
                </div>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li key={tag}>
                      <span className="inline-flex rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                        {tag}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  )
}
