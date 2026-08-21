'use client'

import {
  Blocks,
  Code2,
  Boxes,
  Bot,
  Gamepad2,
  Layers,
  Terminal,
  type LucideIcon,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'

interface Milestone {
  when: string
  title: string
  icon: LucideIcon
  body: React.ReactNode
  tags: string[]
}

const milestones: Milestone[] = [
  {
    when: '6th grade · 2020 · covid',
    title: 'First blocks in Scratch',
    icon: Blocks,
    body: (
      <>
        Got hooked on game dev after trying{' '}
        <span className="text-foreground">Scratch</span>. Playing something I
        built myself made it click — this was fun.
      </>
    ),
    tags: ['Scratch', 'Game dev'],
  },
  {
    when: 'early days',
    title: 'HTML, CSS & Dreamweaver',
    icon: Code2,
    body: (
      <>
        Tried learning <span className="text-foreground">HTML &amp; CSS</span>{' '}
        (gave up the first time), built small sites in Adobe Dreamweaver and
        deployed them on a free WordPress-based host.
      </>
    ),
    tags: ['HTML', 'CSS', 'Dreamweaver'],
  },
  {
    when: 'minecraft era',
    title: 'Java & Minecraft mods',
    icon: Boxes,
    body: (
      <>
        Learned the basics of <span className="text-foreground">Java</span> to
        build Minecraft mods with Forge. A few working mods gave me the
        confidence to keep going.
      </>
    ),
    tags: ['Java', 'Forge', 'Modding'],
  },
  {
    when: '8th grade',
    title: 'First Discord bot',
    icon: Bot,
    body: (
      <>
        Picked up <span className="text-foreground">Python</span> to build a
        moderation bot that scanned messages against a preset word list and
        warned offending users.
      </>
    ),
    tags: ['Python', 'Discord.py'],
  },
  {
    when: 'exploring',
    title: 'Games with Pygame',
    icon: Gamepad2,
    body: (
      <>
        Built small games with <span className="text-foreground">Pygame</span>{' '}
        and started using <span className="text-foreground">Git</span>, pushing
        my early progress to GitHub.
      </>
    ),
    tags: ['Pygame', 'Git', 'GitHub'],
  },
  {
    when: 'engine hopping',
    title: 'Unity, Godot, GDevelop & Construct',
    icon: Layers,
    body: (
      <>
        Experimented across multiple game engines — sampling workflows and
        tooling without locking into a single GUI just yet.
      </>
    ),
    tags: ['Unity', 'Godot', 'GDevelop', 'Construct'],
  },
  {
    when: '11th & 12th grade',
    title: 'C++ fundamentals',
    icon: Terminal,
    body: (
      <>
        Learned the basics of <span className="text-foreground">C++</span> in
        school — a foundation for deeper systems and algorithmic work.
      </>
    ),
    tags: ['C++', 'CS foundations'],
  },
]

export function Journey() {
  return (
    <section id="journey" className="relative mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <div className="flex flex-col gap-3">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            {'// the pathway'}
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            How I got here
          </h2>
          <p className="max-w-xl text-pretty text-muted-foreground">
            A passion for game development that started in 6th grade and grew
            into a habit of building, breaking, and shipping across languages
            and engines.
          </p>
        </div>
      </Reveal>

      <ol className="relative mt-14 flex flex-col gap-8">
        {/* vertical line */}
        <span
          aria-hidden
          className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/60 via-border to-transparent md:left-[23px]"
        />

        {milestones.map((m, i) => {
          const Icon = m.icon
          return (
            <li key={m.title} className="relative">
              <Reveal delay={i * 60}>
                <div className="flex gap-5">
                  {/* node */}
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-secondary text-accent md:h-12 md:w-12">
                    <Icon className="h-5 w-5" />
                  </div>

                  {/* card */}
                  <div className="group relative flex-1 overflow-hidden rounded-2xl border border-border bg-card/70 p-5 backdrop-blur transition-colors duration-300 hover:border-accent/50">
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      style={{
                        boxShadow:
                          '0 0 30px -12px var(--color-accent)',
                        borderRadius: 'inherit',
                      }}
                    />
                    <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-accent">
                      {m.when}
                    </p>
                    <h3 className="mt-1.5 text-lg font-semibold">{m.title}</h3>
                    <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
                      {m.body}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {m.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-border bg-secondary/60 px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            </li>
          )
        })}
      </ol>
    </section>
  )
}
