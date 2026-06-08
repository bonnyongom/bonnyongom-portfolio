"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Code2, Mail, Phone, Globe, MapPin, FolderGit2, Download } from "@/components/icons"
import { profile } from "@/lib/portfolio-data"

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "highlights", label: "Highlights" },
  { id: "skills", label: "Skills" },
  { id: "credentials", label: "Credentials" },
  { id: "contact", label: "Contact" },
]

export function Sidebar() {
  const [active, setActive] = useState("about")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: "-40% 0px -55% 0px" },
    )
    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[44%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        <div className="mb-6 size-24 overflow-hidden rounded-full border-2 border-primary/60 shadow-lg sm:size-28">
          <Image
            src={profile.photo || "/placeholder.svg"}
            alt={`Portrait of ${profile.name}`}
            width={112}
            height={112}
            className="size-full object-cover"
            priority
          />
        </div>
        <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {profile.name}
        </h1>
        <h2 className="mt-3 text-balance text-base font-medium leading-snug text-foreground sm:text-lg">
          {profile.heroHeadline}
        </h2>
        <p className="mt-4 max-w-sm text-pretty leading-relaxed text-muted-foreground">{profile.tagline}</p>

        <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="size-4 text-primary" aria-hidden="true" />
          {profile.location}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <FolderGit2 className="size-4" aria-hidden="true" />
            View Projects
          </a>
          <a
            href={profile.cvEnglish}
            download
            className="inline-flex items-center gap-2 rounded-md border border-border bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground transition-colors hover:border-primary/50 hover:text-primary"
          >
            <Download className="size-4" aria-hidden="true" />
            Download CV
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground transition-colors hover:border-primary/50 hover:text-primary"
          >
            <Mail className="size-4" aria-hidden="true" />
            Contact Me
          </a>
        </div>

        <nav className="mt-12 hidden lg:block" aria-label="In-page navigation">
          <ul className="space-y-3">
            {sections.map(({ id, label }) => {
              const isActive = active === id
              return (
                <li key={id}>
                  <a href={`#${id}`} className="group flex items-center py-1">
                    <span
                      className={`mr-4 h-px transition-all ${
                        isActive
                          ? "w-16 bg-primary"
                          : "w-8 bg-muted-foreground/40 group-hover:w-16 group-hover:bg-foreground"
                      }`}
                    />
                    <span
                      className={`text-xs font-bold uppercase tracking-widest transition-colors ${
                        isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                      }`}
                    >
                      {label}
                    </span>
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>

      <ul className="mt-10 flex items-center gap-5" aria-label="Contact links">
        <li>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <span className="sr-only">GitHub</span>
            <Code2 className="size-6" aria-hidden="true" />
          </a>
        </li>
        <li>
          <a
            href={profile.portfolio}
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <span className="sr-only">Portfolio</span>
            <Globe className="size-6" aria-hidden="true" />
          </a>
        </li>
        <li>
          <a
            href={`mailto:${profile.email}`}
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <span className="sr-only">Email</span>
            <Mail className="size-6" aria-hidden="true" />
          </a>
        </li>
        <li>
          <a
            href={`tel:${profile.phone.replace(/\s/g, "")}`}
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <span className="sr-only">Phone</span>
            <Phone className="size-6" aria-hidden="true" />
          </a>
        </li>
      </ul>
    </header>
  )
}
