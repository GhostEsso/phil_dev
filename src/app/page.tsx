"use client"

import Image from 'next/image'
import Link from 'next/link'
import { ThemeSwitch } from '@/components/theme-switch'
import { InstagramIcon, TwitterIcon, LinkedInIcon } from '@/components/social-icons'
import { HighlightedText } from '@/components/highlighted-text'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8fafc] dark:bg-[#0f172a] transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-md z-50 py-4 md:py-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 gap-4 md:gap-0">
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">Essohanam Tambana</h1>
          <div className="flex gap-4 md:gap-8 text-sm md:text-base overflow-x-auto">
            <Link href="#about" className="text-gray-600 dark:text-gray-300 hover:text-primary-developer dark:hover:text-primary-developer transition-colors whitespace-nowrap">About</Link>
            <Link href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-primary-developer dark:hover:text-primary-developer transition-colors whitespace-nowrap">Projects</Link>
            <Link href="#experience" className="text-gray-600 dark:text-gray-300 hover:text-primary-developer dark:hover:text-primary-developer transition-colors whitespace-nowrap">Experience</Link>
            <Link href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-primary-developer dark:hover:text-primary-developer transition-colors whitespace-nowrap">Contact</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="https://instagram.com" target="_blank" className="text-gray-600 dark:text-gray-300 hover:text-primary-developer dark:hover:text-primary-developer transition-colors">
              <InstagramIcon className="w-5 h-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="https://twitter.com" target="_blank" className="text-gray-600 dark:text-gray-300 hover:text-primary-developer dark:hover:text-primary-developer transition-colors">
              <TwitterIcon className="w-5 h-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="https://linkedin.com" target="_blank" className="text-gray-600 dark:text-gray-300 hover:text-primary-developer dark:hover:text-primary-developer transition-colors">
              <LinkedInIcon className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <div className="w-px h-4 bg-gray-300 dark:bg-gray-700" />
            <ThemeSwitch />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-52 md:pt-60 pb-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col">
            <HighlightedText 
              text="Developer."
              color="bg-primary-developer"
              delay={0}
            />
            <HighlightedText 
              text="Human."
              color="bg-primary-human"
              delay={0.2}
            />
            <HighlightedText 
              text="Programmer."
              color="bg-primary-programmer"
              delay={0.4}
            />
            <HighlightedText 
              text="Visionary."
              color="bg-primary-visionary"
              delay={0.6}
            />
          </div>
          <div className="hidden md:block relative md:pl-12">
            <div className="relative w-full" style={{ aspectRatio: '3/3' }}>
              <Image
                src="/phil.jpeg"
                alt="That's me"
                fill
                className="object-cover grayscale"
              />
              <p className="absolute bottom-4 left-4 bg-black/80 px-3 py-1 rounded text-white">
                That&apos;s me
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-12 text-gray-900 dark:text-gray-100">
            Favourite<br />Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Bookstore CMS */}
            <div className="group relative bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-1">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/bookstore.png"
                  alt="Bookstore CMS"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Bookstore CMS</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Une application de gestion de bibliothèque construite avec React et Redux.
                  Permet aux utilisateurs de suivre leur progression de lecture.
                </p>
                <div className="flex gap-3">
                  <Link 
                    href="https://github.com/GhostEsso/bookstore-react"
                    target="_blank"
                    className="text-primary-developer hover:underline"
                  >
                    GitHub
                  </Link>
                  <Link 
                    href="https://book-jjbt.onrender.com"
                    target="_blank"
                    className="text-primary-developer hover:underline"
                  >
                    Live Demo
                  </Link>
                </div>
              </div>
            </div>

            {/* Space Travelers */}
            <div className="group relative bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-1">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/space.png"
                  alt="Space Travelers"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Space Travelers</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Application web permettant aux utilisateurs de réserver des voyages spatiaux.
                  Intégration avec l&apos;API SpaceX.
                </p>
                <div className="flex gap-3">
                  <Link 
                    href="https://github.com/GhostEsso/SpaceTravelersHub"
                    target="_blank"
                    className="text-primary-developer hover:underline"
                  >
                    GitHub
                  </Link>
                  <Link 
                    href="https://space-travelers-qg24.onrender.com"
                    target="_blank"
                    className="text-primary-developer hover:underline"
                  >
                    Live Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 text-right">
            <Link 
              href="/projects"
              className="inline-flex items-center gap-2 text-primary-developer hover:underline text-lg"
            >
              View all projects
              <span className="text-xl">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Code Section */}
      <section className="py-32 px-4 bg-[#0f172a] text-white relative">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-start mb-40">
            <h2 className="text-7xl md:text-[12rem] font-bold text-gray-700/30 absolute top-20 left-0">
              Latest<br />Code
            </h2>
            <div className="flex-1" />
            <Link 
              href="https://github.com/GhostEsso"
              target="_blank"
              className="bg-white text-black px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-100 transition-colors relative z-10"
            >
              <span>View GitHub</span>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L4.5 4C4.22386 4 4 3.77614 4 3.5C4 3.22386 4.22386 3 4.5 3L11.5 3C11.7761 3 12 3.22386 12 3.5L12 10.5C12 10.7761 11.7761 11 11.5 11C11.2239 11 11 10.7761 11 10.5V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 mt-32">
            {/* Math Magicians */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">math-magicians</h3>
              <p className="text-gray-400">
                &quot;Math magicians&quot; is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to make simple calculations and read a random math-related quote.
              </p>
              <Link 
                href="https://github.com/GhostEsso/Math-Magicians"
                target="_blank"
                className="inline-flex items-center text-white hover:text-gray-300 transition-colors"
              >
                View Repository →
              </Link>
            </div>

            {/* Space Travelers */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">space-travellers-hub</h3>
              <p className="text-gray-400">
                Working with the real live data from the SpaceX API. Building a web application for a company that provides commercial and scientific space travel services.
              </p>
              <Link 
                href="https://github.com/GhostEsso/SpaceTravelersHub"
                target="_blank"
                className="inline-flex items-center text-white hover:text-gray-300 transition-colors"
              >
                View Repository →
              </Link>
            </div>

            {/* Track Covid */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">track_covid</h3>
              <p className="text-gray-400">
                This is a COVID-Tracker reading stats from an API and giving realtime stats on cases around Haiti. Built using Flutter.
              </p>
              <Link 
                href="https://github.com/GhostEsso/track_covid"
                target="_blank"
                className="inline-flex items-center text-white hover:text-gray-300 transition-colors"
              >
                View Repository →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
