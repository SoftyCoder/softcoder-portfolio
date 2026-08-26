import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })
const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'SoftCoder — Developer & BTech @ IIT Madras',
  description:
    'Portfolio of SoftCoder — developer and BTech student at IIT Madras. Vibecoded web apps, gaming & community, motion graphics, and competitive programming.',
  generator: 'v0.app',
  openGraph: {
    title: 'SoftCoder — Developer & BTech @ IIT Madras',
    description:
      'Portfolio of SoftCoder — developer and BTech student at IIT Madras. Vibecoded web apps, gaming & community, motion graphics, and competitive programming.',
    url: 'https://softcoder.dev',
    siteName: 'SoftCoder',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SoftCoder — Developer & BTech @ IIT Madras',
    description:
      'Portfolio of SoftCoder — developer and BTech student at IIT Madras. Vibecoded web apps, gaming & community, motion graphics, and competitive programming.',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#09090b' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="antialiased font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
