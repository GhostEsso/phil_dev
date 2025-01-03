"use client"

import Link from 'next/link'
import { InstagramIcon, TwitterIcon, LinkedInIcon } from './social-icons'

export function Footer() {
  return (
    <footer className="py-8 px-4 bg-white dark:bg-[#0B1121] text-gray-900 dark:text-white border-t border-gray-200 dark:border-gray-800/30 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-8 md:px-16 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 dark:text-gray-400">© Essohanam Tambana. All Rights Reserved.</p>
        <div className="flex items-center gap-6">
          <p className="text-gray-500 dark:text-gray-400">Developed by Essohanam Tambana</p>
          <div className="flex items-center gap-4">
            <Link 
              href="https://instagram.com"
              target="_blank"
              className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <InstagramIcon className="w-5 h-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link 
              href="https://x.com/TambanaEssohana"
              target="_blank"
              className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <TwitterIcon className="w-5 h-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link 
              href="https://www.linkedin.com/in/essohanam-tambana/"
              target="_blank"
              className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <LinkedInIcon className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
} 