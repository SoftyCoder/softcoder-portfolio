import { GitBranch } from 'lucide-react'
import { Hero } from '@/components/hero'
import { Projects } from '@/components/projects'

export default function Page() {
  return (
    <main className="relative min-h-screen">
      {/* Nav */}
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a
            href="#"
            className="flex items-center gap-2 font-mono text-sm font-semibold tracking-tight"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-accent text-accent-foreground">
              {'</>'}
            </span>
            SoftCoder
          </a>
          <nav className="flex items-center gap-6 text-sm text-muted-foreground">
            <a
              href="#projects"
              className="hidden transition-colors hover:text-foreground sm:inline"
            >
              Projects
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
            >
              <GitBranch className="h-4 w-4" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </nav>
        </div>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
      </header>

      <Hero />
      <Projects />

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-muted-foreground sm:flex-row">
          <p>
            <span className="text-foreground">SoftCoder</span> — BTech @ IIT
            Madras
          </p>
          <p className="font-mono text-xs">
            {`built with react · tailwind · shadcn`}
          </p>
        </div>
      </footer>
    </main>
  )
}
