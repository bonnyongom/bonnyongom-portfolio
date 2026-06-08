import { projectHighlights } from "@/lib/portfolio-data"

export function HighlightsSection() {
  return (
    <section id="highlights" aria-label="Project highlights" className="scroll-mt-16 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 bg-background/80 px-6 py-5 backdrop-blur lg:hidden">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">Highlights</h2>
      </div>
      <h3 className="mb-5 hidden text-[11px] font-bold uppercase tracking-widest text-primary lg:block">
        Project Highlights
      </h3>
      <ul className="grid gap-4 sm:grid-cols-2">
        {projectHighlights.map(({ value, label }) => (
          <li
            key={label}
            className="rounded-xl border border-border/60 bg-card/40 p-5 transition-colors hover:border-primary/40"
          >
            <span className="block text-2xl font-bold tracking-tight text-primary">{value}</span>
            <span className="mt-1 block text-sm leading-snug text-foreground">{label}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
