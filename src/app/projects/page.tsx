"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export default function Projects() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0B1121] transition-colors duration-300">
      <Navbar />
      <div className="pt-32 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main title */}
        <h1 className="text-6xl sm:text-8xl lg:text-[12rem] font-bold text-gray-900/10 dark:text-white/10 mb-16 sm:mb-24">
          Projects
        </h1>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Math Magicians */}
          <div className="group relative bg-gray-100 dark:bg-gray-800/50 rounded-lg overflow-hidden">
            <div className="relative h-64 md:h-80">
              <Image
                src="/projects/math.png"
                alt="Math Magicians"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              />
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex gap-4">
                  <Link
                    href="https://math-magicians-jjbt.onrender.com"
                    target="_blank"
                    className="bg-primary-developer text-white px-4 py-2 rounded-lg hover:bg-primary-developer/90 transition-colors"
                  >
                    Live Demo
                  </Link>
                  <Link
                    href="https://github.com/GhostEsso/Math-Magicians"
                    target="_blank"
                    className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Source Code
                  </Link>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Math Magicians</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                A Single Page App (SPA) calculator built with React. Features a calculator and a random math-related quote generator.
                Built with React, JavaScript, and CSS.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-sm bg-primary-developer/10 text-primary-developer px-3 py-1 rounded-full">React</span>
                <span className="text-sm bg-primary-developer/10 text-primary-developer px-3 py-1 rounded-full">JavaScript</span>
                <span className="text-sm bg-primary-developer/10 text-primary-developer px-3 py-1 rounded-full">CSS</span>
              </div>
            </div>
          </div>

          {/* Bookstore React */}
          <div className="group relative bg-gray-100 dark:bg-gray-800/50 rounded-lg overflow-hidden">
            <div className="relative h-64 md:h-80">
              <Image
                src="/projects/bookstore.png"
                alt="Bookstore React"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              />
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex gap-4">
                  <Link
                    href="https://book-jjbt.onrender.com"
                    target="_blank"
                    className="bg-primary-developer text-white px-4 py-2 rounded-lg hover:bg-primary-developer/90 transition-colors"
                  >
                    Live Demo
                  </Link>
                  <Link
                    href="https://github.com/GhostEsso/bookstore-react"
                    target="_blank"
                    className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Source Code
                  </Link>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Bookstore React</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                A modern bookstore application built with React and Redux. Users can add books, track reading progress, and manage their book collection.
                Features a clean UI and seamless state management.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-sm bg-primary-developer/10 text-primary-developer px-3 py-1 rounded-full">React</span>
                <span className="text-sm bg-primary-developer/10 text-primary-developer px-3 py-1 rounded-full">Redux</span>
                <span className="text-sm bg-primary-developer/10 text-primary-developer px-3 py-1 rounded-full">API</span>
              </div>
            </div>
          </div>

          {/* Space Travelers */}
          <div className="group relative bg-gray-100 dark:bg-gray-800/50 rounded-lg overflow-hidden">
            <div className="relative h-64 md:h-80">
              <Image
                src="/projects/space.png"
                alt="Space Travelers"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              />
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex gap-4">
                  <Link
                    href="https://space-travelers-qg24.onrender.com"
                    target="_blank"
                    className="bg-primary-developer text-white px-4 py-2 rounded-lg hover:bg-primary-developer/90 transition-colors"
                  >
                    Live Demo
                  </Link>
                  <Link
                    href="https://github.com/GhostEsso/SpaceTravelersHub"
                    target="_blank"
                    className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Source Code
                  </Link>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Space Travelers Hub</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                A web application for a company that provides commercial and scientific space travel services. Users can book rockets and join space missions.
                Built with React and SpaceX API integration.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-sm bg-primary-developer/10 text-primary-developer px-3 py-1 rounded-full">React</span>
                <span className="text-sm bg-primary-developer/10 text-primary-developer px-3 py-1 rounded-full">Redux</span>
                <span className="text-sm bg-primary-developer/10 text-primary-developer px-3 py-1 rounded-full">SpaceX API</span>
              </div>
            </div>
          </div>

          {/* Foodie */}
          <div className="group relative bg-gray-100 dark:bg-gray-800/50 rounded-lg overflow-hidden">
            <div className="relative h-64 md:h-80">
              <Image
                src="/projects/foodie.png"
                alt="Foodie"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              />
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex gap-4">
                  <Link
                    href="https://github.com/GhostEsso/foodie"
                    target="_blank"
                    className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Source Code
                  </Link>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Foodie</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                A food sharing application that connects neighbors to share homemade meals. Features user authentication, real-time updates,
                and a modern UI. Built with Next.js and Firebase.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-sm bg-primary-developer/10 text-primary-developer px-3 py-1 rounded-full">Next.js</span>
                <span className="text-sm bg-primary-developer/10 text-primary-developer px-3 py-1 rounded-full">Firebase</span>
                <span className="text-sm bg-primary-developer/10 text-primary-developer px-3 py-1 rounded-full">Tailwind</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
} 