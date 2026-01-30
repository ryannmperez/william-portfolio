'use client'

import { useState } from 'react'

const navLinks = [
  { href: '#home', label: 'HOME' },
  { href: '#performance', label: 'PERFORMANCE' },
  { href: '#design', label: 'DESIGN' },
  { href: '#visuals', label: 'VISUALS' },
  { href: '#about', label: 'ABOUT' },
  { href: '#contact', label: 'CONTACT' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 w-full bg-dark-primary/90 backdrop-blur-md py-6 z-[1000] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Desktop Navigation */}
        <ul className="hidden md:flex justify-center gap-12 list-none">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="text-text-secondary text-base tracking-wider transition-colors duration-300 hover:text-accent-orange"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex justify-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-text-secondary p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="md:hidden mt-4 flex flex-col items-center gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className="text-text-secondary text-base tracking-wider transition-colors duration-300 hover:text-accent-orange"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  )
}
