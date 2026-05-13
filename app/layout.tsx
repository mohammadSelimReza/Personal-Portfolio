import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Selim Reza — Backend Developer | Python · Django · FastAPI',
  description:
    'Portfolio of Selim Reza, a Backend Developer with 2 years of production experience in Python, Django, FastAPI, PostgreSQL, and REST API design. Awarded "Best Backend Developer of the Quarter" at Join Venture AI.',
  generator: 'Next.js',
  keywords: [
    'Backend Developer',
    'Python Developer',
    'Django Developer',
    'REST API',
    'FastAPI',
    'PostgreSQL',
    'Selim Reza',
    'Docker',
    'AWS',
    'Celery',
    'Redis',
  ],
  openGraph: {
    title: 'Selim Reza — Backend Developer',
    description:
      'Backend Developer with 2 years of production experience in Python, Django, FastAPI, and scalable API design.',
    url: 'https://portfolio.selimreza.dev',
    siteName: 'Selim Reza Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Selim Reza — Backend Developer',
    description:
      'Backend Developer with 2 years of production experience in Python, Django, FastAPI, and scalable API design.',
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
