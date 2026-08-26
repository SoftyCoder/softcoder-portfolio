'use client'

import { ArrowUpRight, GitBranch, Terminal } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/reveal'

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 pt-20">
      {/* Animated background layers */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        {/* Panning grid */}
        <div
          className="absolute inset-0 animate-grid-pan opacity-[0.18]"
          style={{
            backgroundImage:
              'linear-gradient(to right, color-mix(in oklch, var(--foreground) 60%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklch, var(--foreground) 60%, transparent) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            maskImage:
              'radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 75%)',
          }}
        />
        {/* Drifting gradient mesh */}
        <div className="absolute left-1/2 top-1/3 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 animate-mesh rounded-full bg-[radial-gradient(circle_at_center,var(--color-accent),transparent_62%)] opacity-25 blur-3xl" />
        <div className="absolute right-[12%] top-[18%] h-[26rem] w-[26rem] animate-mesh rounded-full bg-[radial-gradient(circle_at_center,var(--color-chart-2),transparent_60%)] opacity-20 blur-3xl [animation-delay:-6s]" />
        {/* Bottom fade into page */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />
      </div>

      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 font-mono text-xs tracking-wide text-muted-foreground backdrop-blur">
            <Terminal className="h-3.5 w-3.5 text-accent" />
            available for collaborations
          </span>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-8 text-balance text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            Hi, I&apos;m{' '}
            <span className="bg-gradient-to-r from-accent via-accent to-chart-2 bg-clip-text text-transparent">
              SoftCoder
            </span>
            <br />I build for the web &amp; the game.
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Developer and BTech student at{' '}
            <span className="text-foreground">IIT Madras</span>. I ship
            AI-assisted web apps, wrangle communities, craft motion graphics,
            and grind algorithms — where high-end SaaS meets gaming culture.
          </p>
        </Reveal>

        <Reveal
          delay={240}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Button
            size="lg"
            nativeButton={false}
            render={<a href="#projects" />}
            className="group relative h-11 overflow-hidden px-6 text-sm shadow-[0_0_0_1px_var(--color-accent),0_0_28px_-4px_var(--color-accent)] transition-shadow hover:shadow-[0_0_0_1px_var(--color-accent),0_0_40px_0px_var(--color-accent)]"
          >
            View Projects
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            nativeButton={false}
            render={
              <a
                href="https://github.com/SoftyCoder"
                target="_blank"
                rel="noreferrer noopener"
              />
            }
            className="h-11 border-border bg-card/40 px-6 text-sm backdrop-blur hover:border-accent/60 hover:bg-card/60"
          >
            <GitBranch className="h-4 w-4" />
            GitHub
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
