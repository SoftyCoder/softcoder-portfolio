'use client'

import {
  Code2,
  Boxes,
  Gamepad2,
  Wrench,
  type LucideIcon,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Reveal } from '@/components/reveal'

interface TechGroup {
  title: string
  icon: LucideIcon
  items: string[]
}

const groups: TechGroup[] = [
  {
    title: 'Languages',
    icon: Code2,
    items: ['Python', 'Java', 'C++', 'TypeScript', 'JavaScript', 'HTML/CSS'],
  },
  {
    title: 'Frameworks',
    icon: Boxes,
    items: ['React', 'Next.js', 'Tailwind CSS', 'Node.js', 'shadcn/ui'],
  },
  {
    title: 'Game Dev',
    icon: Gamepad2,
    items: ['Godot', 'Unity', 'GDevelop', 'Scratch', 'Pygame', 'Forge'],
  },
  {
    title: 'Tools',
    icon: Wrench,
    items: ['Git', 'GitHub', 'Discord.py', 'Vercel', 'PostCSS'],
  },
]

export function TechStack() {
  return (
    <section id="tech-stack" className="relative mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <div className="flex flex-col gap-3">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            {'// tools of the trade'}
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Tech Stack
          </h2>
          <p className="max-w-xl text-pretty text-muted-foreground">
            The languages, frameworks, engines, and tools I reach for when
            building — from quick prototypes to shipping products.
          </p>
        </div>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {groups.map((group, i) => {
          const Icon = group.icon
          return (
            <Reveal key={group.title} delay={i * 80}>
              <div
                className={cn(
                  'group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card/70 p-6 backdrop-blur transition-colors duration-300 hover:border-accent/50',
                )}
              >
                {/* glow on hover */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    boxShadow:
                      'inset 0 0 0 1px color-mix(in oklch, var(--color-accent) 55%, transparent), 0 0 34px -10px var(--color-accent)',
                    borderRadius: 'inherit',
                  }}
                />
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold">{group.title}</h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border bg-secondary/60 px-3 py-1 font-mono text-xs text-muted-foreground transition-colors duration-200 group-hover:border-accent/40 group-hover:text-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
