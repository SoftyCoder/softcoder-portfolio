'use client'

import {
  Gamepad2,
  LayoutDashboard,
  Film,
  Binary,
  Users,
  Cpu,
  Wrench,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Reveal } from '@/components/reveal'

interface BentoCardProps {
  className?: string
  children: React.ReactNode
}

function BentoCard({ className, children }: BentoCardProps) {
  return (
    <div
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card/70 p-6 backdrop-blur transition-colors duration-300 hover:border-accent/50',
        className,
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
      {children}
    </div>
  )
}

export function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <div className="flex flex-col gap-3">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            {'// selected work'}
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            The Projects
          </h2>
          <p className="max-w-xl text-pretty text-muted-foreground">
            A bento of the things I build and break — spanning communities,
            interfaces, motion, and pure logic.
          </p>
        </div>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2">
        {/* Gaming & Community — large */}
        <Reveal className="md:col-span-2 md:row-span-1">
          <BentoCard className="h-full">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary text-accent">
                <Gamepad2 className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">Gaming &amp; Community</h3>
            </div>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Managing the <span className="text-foreground">Chaos Realm</span>{' '}
              server, dialing in PC game optimization, and building custom mods.
              I keep players engaged and framerates high.
            </p>
            <div className="mt-auto flex flex-wrap gap-2 pt-6">
              {[
                { icon: Users, label: 'Chaos Realm' },
                { icon: Cpu, label: 'Optimization' },
                { icon: Wrench, label: 'Modding' },
              ].map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/60 px-3 py-1 font-mono text-xs text-muted-foreground"
                >
                  <Icon className="h-3.5 w-3.5" />
                  {label}
                </span>
              ))}
            </div>
          </BentoCard>
        </Reveal>

        {/* Vibecoded Web Apps — tall */}
        <Reveal delay={80} className="md:col-span-1 md:row-span-2">
          <BentoCard className="h-full">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary text-accent">
                <LayoutDashboard className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">Vibecoded Web Apps</h3>
            </div>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Sleek, AI-assisted frontend interfaces and web platforms. Clean
              component systems, buttery interactions, and shipping fast without
              cutting corners.
            </p>

            {/* mini stacked window mock */}
            <div className="relative mt-8 flex-1">
              <div className="absolute inset-x-2 top-6 h-40 rounded-xl border border-border bg-background/60" />
              <div className="absolute inset-x-0 top-0 rounded-xl border border-border bg-secondary/70 p-3 backdrop-blur">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
                  <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
                  <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
                </div>
                <div className="mt-3 space-y-2 font-mono text-[10px] leading-relaxed">
                  <p className="text-muted-foreground">
                    <span className="text-accent">const</span> ui ={' '}
                    <span className="text-chart-2">craft</span>()
                  </p>
                  <div className="h-1.5 w-3/4 rounded bg-muted" />
                  <div className="h-1.5 w-1/2 rounded bg-muted" />
                  <div className="h-1.5 w-2/3 rounded bg-accent/30" />
                </div>
              </div>
            </div>
          </BentoCard>
        </Reveal>

        {/* Motion Graphics */}
        <Reveal delay={120} className="md:col-span-1 md:row-span-1">
          <BentoCard className="h-full">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary text-accent">
                <Film className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">Motion Graphics</h3>
            </div>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Custom typography animations and video editing — including the{' '}
              <span className="text-foreground">Tensors</span> promo video.
            </p>
            <div className="mt-auto flex items-end gap-1 pt-6" aria-hidden>
              {[8, 16, 10, 22, 14, 28, 18, 24, 12].map((h, i) => (
                <span
                  key={i}
                  className="w-2 rounded-sm bg-gradient-to-t from-accent/30 to-accent transition-all duration-300 group-hover:from-chart-2/40 group-hover:to-chart-2"
                  style={{ height: `${h * 3}px` }}
                />
              ))}
            </div>
          </BentoCard>
        </Reveal>

        {/* Algorithms & Logic — stat focused */}
        <Reveal delay={160} className="md:col-span-1 md:row-span-1">
          <BentoCard className="h-full">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary text-accent">
                <Binary className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">Algorithms &amp; Logic</h3>
            </div>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Competitive programming and relentless problem-solving on LeetCode
              and beyond.
            </p>
            <div className="mt-auto grid grid-cols-2 gap-3 pt-6">
              <div className="rounded-lg border border-border bg-secondary/50 p-3">
                <p className="font-mono text-2xl font-semibold text-accent">
                  450+
                </p>
                <p className="text-xs text-muted-foreground">Problems solved</p>
              </div>
              <div className="rounded-lg border border-border bg-secondary/50 p-3">
                <p className="font-mono text-2xl font-semibold text-accent">
                  1800
                </p>
                <p className="text-xs text-muted-foreground">Peak rating</p>
              </div>
            </div>
          </BentoCard>
        </Reveal>
      </div>
    </section>
  )
}
