"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { HighlightedText } from '@/components/highlighted-text'
import { useLanguage } from '@/hooks/useLanguage'

export default function Home() {
  const { translations } = useLanguage();

  return (
    <main className="min-h-screen bg-white dark:bg-[#0B1121] transition-colors duration-300">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 sm:pt-36 md:pt-44 lg:pt-52 pb-8 sm:pb-12 md:pb-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          <div className="flex flex-col space-y-1 sm:space-y-1">
            <HighlightedText 
              text={translations.home.roles.developer}
              color="bg-primary-developer"
              delay={0}
            />
            <HighlightedText 
              text={translations.home.roles.human}
              color="bg-primary-human"
              delay={0.2}
            />
            <HighlightedText 
              text={translations.home.roles.programmer}
              color="bg-primary-programmer"
              delay={0.4}
            />
            <HighlightedText 
              text={translations.home.roles.visionary}
              color="bg-primary-visionary"
              delay={0.6}
            />
          </div>
          <div className="block relative md:pl-6 lg:pl-12 mt-8 md:mt-0">
            <div className="relative w-full max-w-md mx-auto md:max-w-none" style={{ aspectRatio: '3/2.8' }}>
              <Image
                src="/phil.jpeg"
                alt="That's me"
                fill
                className="object-cover grayscale rounded-lg shadow-xl"
                sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 600px"
                priority
              />
              <p className="absolute bottom-4 left-4 bg-black/80 px-3 py-1 rounded text-white text-sm sm:text-base">
                That&apos;s me
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 sm:py-16 md:py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-8 sm:mb-12 text-gray-900 dark:text-gray-100 whitespace-pre-line">
            {translations.home.projects.title}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {/* Foodie */}
            <div className="group relative bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                <Image
                  src="/foody.png"
                  alt="Foody"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 600px"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {translations.home.projects.foodie.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4">
                  {translations.home.projects.foodie.description}
                </p>
                <div className="flex gap-3">
                  <Link 
                    href="https://github.com/GhostEsso/foodie"
                    target="_blank"
                    className="text-primary-developer hover:underline text-sm sm:text-base"
                  >
                    GitHub
                  </Link>
                  <Link 
                    href="https://foodie-rails.onrender.com"
                    target="_blank"
                    className="text-primary-developer hover:underline text-sm sm:text-base"
                  >
                    Live Demo
                  </Link>
                </div>
              </div>
            </div>

            {/* Ahoefa */}
            <div className="group relative bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                <Image
                  src="/ahoefa.png"
                  alt="Ahoefa"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 600px"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {translations.home.projects.ahoefa.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4">
                  {translations.home.projects.ahoefa.description}
                </p>
                <div className="flex gap-3">
                  <Link 
                    href="https://github.com/GhostEsso/ahoefa_rails"
                    target="_blank"
                    className="text-primary-developer hover:underline text-sm sm:text-base"
                  >
                    GitHub
                  </Link>
                  <Link 
                    href="https://ahoefa.onrender.com"
                    target="_blank"
                    className="text-primary-developer hover:underline text-sm sm:text-base"
                  >
                    Live Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 sm:mt-12 text-right">
            <Link 
              href="/projects"
              className="inline-flex items-center gap-2 text-primary-developer hover:underline text-base sm:text-lg"
            >
              {translations.home.projects.viewAll}
              <span className="text-lg sm:text-xl">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Code Section */}
      <section className="py-16 md:py-32 px-4 bg-white dark:bg-[#0B1121] text-gray-900 dark:text-white transition-colors duration-300 overflow-x-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative mb-16 md:mb-40">
            {/* Titre en arrière-plan */}
            <div className="absolute -top-8 md:-top-16 left-0 w-full">
              <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-[12rem] font-bold text-gray-200/40 dark:text-gray-600/40 break-words">
                {translations.home.latestCode.title}
              </h2>
            </div>

            {/* Bouton GitHub */}
            <div className="flex justify-end relative z-10">
              <Link 
                href="https://github.com/GhostEsso"
                target="_blank"
                className="bg-gray-900 dark:bg-white text-white dark:text-black px-4 sm:px-6 py-2 sm:py-3 rounded-lg flex items-center gap-2 hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors text-sm sm:text-base"
              >
                <span>{translations.home.latestCode.viewGitHub}</span>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5">
                  <path d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L4.5 4C4.22386 4 4 3.77614 4 3.5C4 3.22386 4.22386 3 4.5 3L11.5 3C11.7761 3 12 3.22386 12 3.5L12 10.5C12 10.7761 11.7761 11 11.5 11C11.2239 11 11 10.7761 11 10.5V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                </svg>
              </Link>
            </div>
          </div>

          {/* Grille de projets */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative z-10 mt-16 md:mt-32">
            {/* Foodie */}
            <div className="space-y-4 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                {translations.home.latestCode.foodie.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3">
                {translations.home.latestCode.foodie.description}
              </p>
              <Link 
                href="https://github.com/GhostEsso/foodie"
                target="_blank"
                className="inline-flex items-center text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors text-sm sm:text-base"
              >
                {translations.home.latestCode.viewGitHub} →
              </Link>
            </div>

            {/* Ahoefa */}
            <div className="space-y-4 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                {translations.home.latestCode.ahoefa.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3">
                {translations.home.latestCode.ahoefa.description}
              </p>
              <Link 
                href="https://github.com/GhostEsso/ahoefa-frontend"
                target="_blank"
                className="inline-flex items-center text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors text-sm sm:text-base"
              >
                {translations.home.latestCode.viewGitHub} →
              </Link>
            </div>

            {/* Ecommerce */}
            <div className="space-y-4 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                {translations.home.latestCode.ecommerce.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3">
                {translations.home.latestCode.ecommerce.description}
              </p>
              <Link 
                href="https://github.com/GhostEsso/ecommerce-store"
                target="_blank"
                className="inline-flex items-center text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors text-sm sm:text-base"
              >
                {translations.home.latestCode.viewGitHub} →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
