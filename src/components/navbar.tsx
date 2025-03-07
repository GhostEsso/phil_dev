"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { ThemeSwitch } from './theme-switch'
import { GitHubIcon, TwitterIcon, LinkedInIcon } from './social-icons'

export function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-[#0B1121] z-50 py-4 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-5xl mx-auto px-4">
        {/* Top section with name and social icons */}
        <div className="flex justify-between items-center">
          <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
            <Link href="/" className="text-lg md:text-xl font-bold text-gray-900 dark:text-white hover:text-primary-developer dark:hover:text-primary-developer transition-colors">
              Essohanam Tambana
            </Link>
            <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Full-Stack Developer</p>
          </div>
          
          <div className="flex items-center gap-2 md:gap-4">
            <Link href="https://github.com/GhostEsso" target="_blank" className="text-gray-600 dark:text-gray-300 hover:text-primary-developer dark:hover:text-primary-developer transition-colors">
              <GitHubIcon className="w-4 h-4 md:w-5 md:h-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://x.com/TambanaEssohana" target="_blank" className="text-gray-600 dark:text-gray-300 hover:text-primary-developer dark:hover:text-primary-developer transition-colors">
              <TwitterIcon className="w-4 h-4 md:w-5 md:h-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="https://www.linkedin.com/in/essohanam-tambana/" target="_blank" className="text-gray-600 dark:text-gray-300 hover:text-primary-developer dark:hover:text-primary-developer transition-colors">
              <LinkedInIcon className="w-4 h-4 md:w-5 md:h-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <div className="w-px h-4 bg-gray-300 dark:bg-gray-700" />
            <ThemeSwitch />
            {/* Menu button for mobile */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-gray-600 dark:text-gray-300 hover:text-primary-developer dark:hover:text-primary-developer transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Navigation links - Desktop */}
        <div className="hidden md:flex justify-center md:justify-start gap-4 md:gap-8 text-sm md:text-base overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
          <Link 
            href="/about"
            className={`text-gray-600 dark:text-gray-300 hover:text-primary-developer dark:hover:text-primary-developer transition-colors whitespace-nowrap ${
              pathname === '/about' ? 'text-primary-developer dark:text-primary-developer' : ''
            }`}
          >
            About
          </Link>
          <Link 
            href="/projects"
            className={`text-gray-600 dark:text-gray-300 hover:text-primary-developer dark:hover:text-primary-developer transition-colors whitespace-nowrap ${
              pathname === '/projects' ? 'text-primary-developer dark:text-primary-developer' : ''
            }`}
          >
            Projects
          </Link>
          <Link 
            href="/experience"
            className={`text-gray-600 dark:text-gray-300 hover:text-primary-developer dark:hover:text-primary-developer transition-colors whitespace-nowrap ${
              pathname === '/experience' ? 'text-primary-developer dark:text-primary-developer' : ''
            }`}
          >
            Experience
          </Link>
          <Link 
            href="/contact"
            className={`text-gray-600 dark:text-gray-300 hover:text-primary-developer dark:hover:text-primary-developer transition-colors whitespace-nowrap ${
              pathname === '/contact' ? 'text-primary-developer dark:text-primary-developer' : ''
            }`}
          >
            Contact
          </Link>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 top-[72px] bg-white dark:bg-[#0B1121] z-50">
            <div className="flex flex-col items-center justify-start pt-12 h-full space-y-8 text-lg">
              <Link 
                href="/about"
                onClick={() => setIsMenuOpen(false)}
                className={`text-gray-600 dark:text-gray-300 hover:text-primary-developer dark:hover:text-primary-developer transition-colors ${
                  pathname === '/about' ? 'text-primary-developer dark:text-primary-developer' : ''
                }`}
              >
                About
              </Link>
              <Link 
                href="/projects"
                onClick={() => setIsMenuOpen(false)}
                className={`text-gray-600 dark:text-gray-300 hover:text-primary-developer dark:hover:text-primary-developer transition-colors ${
                  pathname === '/projects' ? 'text-primary-developer dark:text-primary-developer' : ''
                }`}
              >
                Projects
              </Link>
              <Link 
                href="/experience"
                onClick={() => setIsMenuOpen(false)}
                className={`text-gray-600 dark:text-gray-300 hover:text-primary-developer dark:hover:text-primary-developer transition-colors ${
                  pathname === '/experience' ? 'text-primary-developer dark:text-primary-developer' : ''
                }`}
              >
                Experience
              </Link>
              <Link 
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className={`text-gray-600 dark:text-gray-300 hover:text-primary-developer dark:hover:text-primary-developer transition-colors ${
                  pathname === '/contact' ? 'text-primary-developer dark:text-primary-developer' : ''
                }`}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 