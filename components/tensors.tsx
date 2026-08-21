'use client'

import Image from 'next/image'
import {
  ArrowUpRight,
  Building2,
  Gamepad2,
  Users,
  Sparkles,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function Tensors() {
  return (
    <section
      id="tensors"
      className="relative mx-auto max-w-6xl px-6 py-24"
      // warm terracotta accent for the Tensors collaboration
      style={{ ['--brand' as string]: '#d98569' }}
    >
      <Reveal>
        <div className="flex flex-col gap-3">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--brand)]">
            {'// currently building with'}
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Tensors
          </h2>
          <p className="max-w-xl text-pretty text-muted-foreground">
            A student-run tech consultancy born out of IIT Madras. Tensors takes
            on real client briefs, ships software end-to-end, and reinvests into
            social impact and mentorship — and I&apos;m proud to be part of the
            team.
          </p>
        </div>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-5">
        {/* Consultancy card */}
        <Reveal className="lg:col-span-2">
          <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card/70 p-6 backdrop-blur transition-colors duration-300 hover:border-[color-mix(in_oklch,var(--brand)_50%,transparent)]">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary text-[var(--brand)]">
                <Building2 className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">The Consultancy</h3>
                <p className="font-mono text-xs text-muted-foreground">
                  IIT Madras · student-run
                </p>
              </div>
            </div>

            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Started as an NGO and grew into a full-fledged consultancy run
              entirely by students — designing and building products for
              innovators and NGOs alike.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-lg border border-border bg-secondary/50 p-3">
                <div className="flex items-center gap-1.5 text-[var(--brand)]">
                  <Users className="h-4 w-4" />
                  <p className="font-mono text-sm font-semibold">End-to-end</p>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  Design &amp; build
                </p>
              </div>
              <div className="rounded-lg border border-border bg-secondary/50 p-3">
                <div className="flex items-center gap-1.5 text-[var(--brand)]">
                  <Sparkles className="h-4 w-4" />
                  <p className="font-mono text-sm font-semibold">Impact</p>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  Social good
                </p>
              </div>
            </div>

            <a
              href="https://tensors.in"
              target="_blank"
              rel="noreferrer noopener"
              className="mt-auto inline-flex items-center gap-1.5 pt-6 font-mono text-sm text-[var(--brand)] transition-opacity hover:opacity-80"
            >
              tensors.in
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>

        {/* Tenspark game promo */}
        <Reveal delay={80} className="lg:col-span-3">
          <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card/70 backdrop-blur transition-colors duration-300 hover:border-[color-mix(in_oklch,var(--brand)_50%,transparent)]">
            {/* promo art */}
            <div className="relative h-52 w-full overflow-hidden sm:h-64">
              <Image
                src="/tenspark-promo.png"
                alt="Tenspark — a cooperative puzzle-platformer game key art"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent"
              />
              <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-[color-mix(in_oklch,var(--brand)_40%,transparent)] bg-background/70 px-3 py-1 font-mono text-xs text-[var(--brand)] backdrop-blur">
                <Gamepad2 className="h-3.5 w-3.5" />
                Made by Tensors
              </span>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-xl font-semibold">Tenspark</h3>
              <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
                A chaotic co-op puzzle-platformer built in Godot. Team up, grab
                the keys, and figure out how to get everyone to the door — no one
                clears the level alone.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {['Godot', 'Co-op', 'Puzzle', 'Browser-playable'].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-secondary/60 px-3 py-1 font-mono text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>

              <a
                href="https://tenspark.tensors.in"
                target="_blank"
                rel="noreferrer noopener"
                className="mt-3.5 inline-flex w-fit items-center gap-2 rounded-lg bg-[var(--brand)] px-4 py-2.5 pt-2.5 text-xs font-semibold text-background transition-opacity hover:opacity-90"
              >
                <Gamepad2 className="h-4 w-4" />
                Play Tenspark
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
