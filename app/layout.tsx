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
        <Header />
        {children}
      </body>
    </html>
  )
}
