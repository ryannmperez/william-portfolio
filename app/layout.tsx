import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'William René Bryant - Performance & Design Portfolio',
  description: 'Multidisciplinary artist specializing in performance, scenic design, and digital art.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        {/* Dynamic animated background orbs */}
        <div className="dynamic-bg" aria-hidden="true">
          <div className="dynamic-bg-orb-3" />
          <div className="dynamic-bg-orb-4" />
        </div>
        <Header />
        <div className="relative z-[1]">
          {children}
        </div>
      </body>
    </html>
  )
}
