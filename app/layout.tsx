import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Selim Reza — Backend Engineer | Python · Django · DevOps',
  description:
    'Portfolio of Selim Reza, a performance-driven Backend Engineer with 1.2+ years of experience specializing in Python, Django, Event-Driven Architecture, and scalable API design. Awarded "Developer of the Quarter" at Join Venture AI.',
  generator: 'Next.js',
  keywords: [
    'Backend Engineer',
    'Python Developer',
    'Django Developer',
    'REST API',
    'DevOps',
    'SRE',
    'Selim Reza',
    'FastAPI',
    'Docker',
    'AWS',
  ],
  openGraph: {
    title: 'Selim Reza — Backend Engineer',
    description:
      'Performance-driven Backend Engineer specializing in Python, Django, and scalable distributed systems.',
    url: 'https://portfolio.selimreza.dev',
    siteName: 'Selim Reza Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Selim Reza — Backend Engineer',
    description:
      'Performance-driven Backend Engineer specializing in Python, Django, and scalable distributed systems.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
