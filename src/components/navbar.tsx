"use client"

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { ThemeSwitch } from './theme-switch'
import { GitHubIcon, TwitterIcon, LinkedInIcon } from './social-icons'
import { useLanguage } from '@/hooks/useLanguage'

export function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, translations, toggleLanguage } = useLanguage()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-[#0B1121]/80 backdrop-blur-md z-50 py-4 border-b border-gray-200 dark:border-gray-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          {/* Left: Logo & Name */}
          <div className="flex items-center gap-4 shrink-0">
            <Link href="/" className="relative w-10 h-10 overflow-hidden rounded-full border-2 border-primary-developer shadow-sm hover:scale-105 transition-transform">
              <Image
                src="/phil.jpeg"
                alt="Logo"
                fill
                className="object-cover grayscale"
              />
            </Link>
            <div className="flex flex-col">
              <Link href="/" className="text-sm md:text-base font-black text-gray-900 dark:text-white hover:text-primary-developer dark:hover:text-primary-developer transition-colors leading-none tracking-tight">
                Essohanam Tambana
              </Link>
              <p className="text-[10px] md:text-xs text-gray-500 dark:text-gray-400 mt-1 font-medium">{translations.nav.subtitle}</p>
            </div>
          </div>

          {/* Middle: Navigation Links (Desktop) */}
          <div className="hidden md:flex items-center justify-center gap-8 lg:gap-12 absolute left-1/2 -translate-x-1/2">
            {[
              { href: '/about', label: translations.nav.about },
              { href: '/projects', label: translations.nav.projects },
              { href: '/experience', label: translations.nav.experience },
              { href: '/contact', label: translations.nav.contact }
            ].map((link) => (
              <Link 
                key={link.href}
                href={link.href}
                className={`text-sm lg:text-base font-bold transition-all duration-200 hover:text-primary-developer relative group ${
                  pathname === link.href ? 'text-primary-developer' : 'text-gray-600 dark:text-gray-400'
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary-developer transition-all duration-300 ${
                  pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            ))}
          </div>
          
          {/* Right: Socials & Tools */}
          <div className="flex items-center gap-3 md:gap-4">
            <div className="hidden sm:flex items-center gap-3">
              <Link href="https://github.com/GhostEsso" target="_blank" className="text-gray-600 dark:text-gray-400 hover:text-primary-developer dark:hover:text-primary-developer transition-colors p-1">
                <GitHubIcon className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://x.com/TambanaEssohana" target="_blank" className="text-gray-600 dark:text-gray-400 hover:text-primary-developer dark:hover:text-primary-developer transition-colors p-1">
                <TwitterIcon className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://www.linkedin.com/in/essohanam-tambana/" target="_blank" className="text-gray-600 dark:text-gray-400 hover:text-primary-developer dark:hover:text-primary-developer transition-colors p-1">
                <LinkedInIcon className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
            
            <div className="w-px h-6 bg-gray-200 dark:bg-gray-800 mx-1 hidden sm:block" />
            
            <button
              onClick={toggleLanguage}
              className="w-8 h-8 flex items-center justify-center text-xs font-bold border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 rounded-md hover:border-primary-developer hover:text-primary-developer transition-all"
            >
              {language === 'en' ? 'FR' : 'EN'}
            </button>
            
            <ThemeSwitch />

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 text-gray-600 dark:text-gray-400 hover:text-primary-developer transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 top-[81px] bg-white dark:bg-[#0B1121] z-50 p-6 animate-in slide-in-from-top duration-300">
            <div className="flex flex-col gap-6 text-center">
              {[
                { href: '/about', label: translations.nav.about },
                { href: '/projects', label: translations.nav.projects },
                { href: '/experience', label: translations.nav.experience },
                { href: '/contact', label: translations.nav.contact }
              ].map((link) => (
                <Link 
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-xl font-bold ${pathname === link.href ? 'text-primary-developer' : 'text-gray-600 dark:text-gray-400'}`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-6 flex justify-center gap-8 border-t border-gray-100 dark:border-gray-800">
                 <Link href="https://github.com/GhostEsso" target="_blank" className="text-gray-600 dark:text-gray-400 hover:text-primary-developer"><GitHubIcon className="w-6 h-6" /></Link>
                 <Link href="https://x.com/TambanaEssohana" target="_blank" className="text-gray-600 dark:text-gray-400 hover:text-primary-developer"><TwitterIcon className="w-6 h-6" /></Link>
                 <Link href="https://www.linkedin.com/in/essohanam-tambana/" target="_blank" className="text-gray-600 dark:text-gray-400 hover:text-primary-developer"><LinkedInIcon className="w-6 h-6" /></Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}