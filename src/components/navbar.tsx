"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ThemeSwitch } from './theme-switch'
import { InstagramIcon, TwitterIcon, LinkedInIcon } from './social-icons'

export function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-[#0B1121]/80 backdrop-blur-md z-50 py-4 md:py-8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 gap-4 md:gap-0">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white hover:text-primary-developer dark:hover:text-primary-developer transition-colors">
            Essohanam Tambana
          </Link>
          <p className="text-sm text-gray-600 dark:text-gray-400">Full-Stack Developer</p>
        </div>
        <div className="flex gap-4 md:gap-8 text-sm md:text-base">
          <Link 
            href="/about"
            className={`text-gray-600 dark:text-gray-300 hover:text-primary-developer dark:hover:text-primary-developer transition-colors ${
              pathname === '/about' ? 'text-primary-developer dark:text-primary-developer' : ''
            }`}
          >
            About
          </Link>
          <Link 
            href="/projects"
            className={`text-gray-600 dark:text-gray-300 hover:text-primary-developer dark:hover:text-primary-developer transition-colors ${
              pathname === '/projects' ? 'text-primary-developer dark:text-primary-developer' : ''
            }`}
          >
            Projects
          </Link>
          <Link 
            href="/experience"
            className={`text-gray-600 dark:text-gray-300 hover:text-primary-developer dark:hover:text-primary-developer transition-colors ${
              pathname === '/experience' ? 'text-primary-developer dark:text-primary-developer' : ''
            }`}
          >
            Experience
          </Link>
          <Link 
            href="/contact"
            className={`text-gray-600 dark:text-gray-300 hover:text-primary-developer dark:hover:text-primary-developer transition-colors ${
              pathname === '/contact' ? 'text-primary-developer dark:text-primary-developer' : ''
            }`}
          >
            Contact
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link href="https://instagram.com" target="_blank" className="text-gray-600 dark:text-gray-300 hover:text-primary-developer dark:hover:text-primary-developer transition-colors">
            <InstagramIcon className="w-5 h-5" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link href="https://x.com/TambanaEssohana" target="_blank" className="text-gray-600 dark:text-gray-300 hover:text-primary-developer dark:hover:text-primary-developer transition-colors">
            <TwitterIcon className="w-5 h-5" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link href="https://www.linkedin.com/in/essohanam-tambana/" target="_blank" className="text-gray-600 dark:text-gray-300 hover:text-primary-developer dark:hover:text-primary-developer transition-colors">
            <LinkedInIcon className="w-5 h-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <div className="w-px h-4 bg-gray-300 dark:bg-gray-700" />
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  )
} 