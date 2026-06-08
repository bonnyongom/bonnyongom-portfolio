import { Mail, Phone, Code2, Globe, ArrowUpRight, MapPin } from "@/components/icons"
import { profile, availability } from "@/lib/portfolio-data"

const links = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail, external: false },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
    icon: Phone,
    external: false,
  },
  { label: "GitHub", value: "github.com/bonnyongom", href: profile.github, icon: Code2, external: true },
  { label: "Portfolio", value: "bonnyongom.com", href: profile.portfolio, icon: Globe, external: true },
]

export function ContactSection() {
  return (
    <section id="contact" aria-label="Contact" className="scroll-mt-16 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 bg-background/80 px-6 py-5 backdrop-blur lg:hidden">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">Contact</h2>
      </div>

      <div className="rounded-xl border border-border/60 bg-card/40 p-6 sm:p-8">
        <h3 className="text-balance text-xl font-bold text-foreground sm:text-2xl">
          Interested in working together?
        </h3>
        <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
          {"Let's discuss your next project. I'm available for remote, hybrid, and on-site opportunities."}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Mail className="size-4" aria-hidden="true" />
            Send an Email
          </a>
          <a
            href={profile.cvEnglish}
            download
            className="inline-flex items-center gap-2 rounded-md border border-border bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground transition-colors hover:border-primary/50 hover:text-primary"
          >
            Download CV (EN)
          </a>
          <a
            href={profile.cvGerman}
            download
            className="inline-flex items-center gap-2 rounded-md border border-border bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground transition-colors hover:border-primary/50 hover:text-primary"
          >
            Lebenslauf (DE)
          </a>
        </div>

        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {links.map(({ label, value, href, icon: Icon, external }) => (
            <li key={label}>
              <a
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                className="group flex items-center gap-3 rounded-lg border border-border/60 bg-background/40 px-4 py-3 transition-colors hover:border-primary/40"
              >
                <Icon className="size-5 shrink-0 text-primary" aria-hidden="true" />
                <span className="min-w-0 flex-1">
                  <span className="block text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
                    {label}
                  </span>
                  <span className="block truncate text-sm text-foreground">{value}</span>
                </span>
                {external && (
                  <ArrowUpRight
                    className="size-4 text-muted-foreground transition-colors group-hover:text-primary"
                    aria-hidden="true"
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-6 grid gap-4 border-t border-border/60 pt-6 sm:grid-cols-2">
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-primary">Availability</h4>
            <ul className="mt-2 flex flex-wrap gap-2">
              {availability.modes.map((mode) => (
                <li key={mode}>
                  <span className="inline-flex rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                    {mode}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-primary">Location</h4>
            <p className="mt-2 flex items-center gap-2 text-sm text-foreground">
              <MapPin className="size-4 text-primary" aria-hidden="true" />
              {availability.location}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
