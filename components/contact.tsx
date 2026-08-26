'use client'

import { Mail, ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

export function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <div className="flex flex-col gap-3">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            {'// get in touch'}
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Let&apos;s Talk
          </h2>
          <p className="max-w-xl text-pretty text-muted-foreground">
            Got a project idea, collaboration, or just want to say hi? I&apos;m
            always open to connecting with fellow developers, designers, and
            creators.
          </p>
        </div>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Reveal delay={80}>
          <a
            href="mailto:your.email@example.com"
            className="group relative flex flex-col items-center gap-4 overflow-hidden rounded-2xl border border-border bg-card/70 p-8 backdrop-blur transition-all duration-300 hover:border-accent/50"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-secondary text-accent transition-transform duration-300 group-hover:scale-110">
              <Mail className="h-6 w-6" />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold">Email</h3>
              <p className="mt-1 font-mono text-sm text-muted-foreground">
                your.email@example.com
              </p>
            </div>
            <ArrowUpRight className="absolute right-4 top-4 h-4 w-4 text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
          </a>
        </Reveal>

        <Reveal delay={160}>
          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noreferrer noopener"
            className="group relative flex flex-col items-center gap-4 overflow-hidden rounded-2xl border border-border bg-card/70 p-8 backdrop-blur transition-all duration-300 hover:border-accent/50"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-secondary text-accent transition-transform duration-300 group-hover:scale-110">
              <LinkedinIcon className="h-6 w-6" />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold">LinkedIn</h3>
              <p className="mt-1 font-mono text-sm text-muted-foreground">
                /in/your-profile
              </p>
            </div>
            <ArrowUpRight className="absolute right-4 top-4 h-4 w-4 text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
          </a>
        </Reveal>

        <Reveal delay={240}>
          <a
            href="https://github.com/SoftyCoder"
            target="_blank"
            rel="noreferrer noopener"
            className="group relative flex flex-col items-center gap-4 overflow-hidden rounded-2xl border border-border bg-card/70 p-8 backdrop-blur transition-all duration-300 hover:border-accent/50"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-secondary text-accent transition-transform duration-300 group-hover:scale-110">
              <GithubIcon className="h-6 w-6" />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold">GitHub</h3>
              <p className="mt-1 font-mono text-sm text-muted-foreground">
                @SoftyCoder
              </p>
            </div>
            <ArrowUpRight className="absolute right-4 top-4 h-4 w-4 text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
