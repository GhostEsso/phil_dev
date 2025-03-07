"use client"

import { useState } from "react";
import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { useLanguage } from "@/hooks/useLanguage";

export default function Projects() {
  const { translations } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: translations.projects.categories.all },
    { id: 'web', label: translations.projects.categories.web },
    { id: 'mobile', label: translations.projects.categories.mobile },
    { id: 'design', label: translations.projects.categories.design },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-[#0B1121] transition-colors duration-300">
      <Navbar />
      <div className="pt-32 pb-16 max-w-7xl mx-auto px-8 md:px-16">
        <div className="space-y-16">
          {/* Main title */}
          <h1 className="text-8xl md:text-[10rem] font-bold text-gray-900/10 dark:text-white/10">
            {translations.projects.title}
          </h1>

          {/* Header */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
              {translations.projects.subtitle}
            </h2>
          </div>

          {/* Categories */}
          <div className="flex gap-4 flex-wrap">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-primary-developer text-white'
                    : 'bg-gray-100 dark:bg-[#1a2333] text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-[#2a3343]'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Foodie Project */}
            <div className="group relative bg-gray-100 dark:bg-[#1a2333] rounded-lg overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src="/projects/foodie.png"
                  alt="Foodie Project"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {translations.projects.items.foodie.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {translations.projects.items.foodie.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {translations.projects.items.foodie.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-200 dark:bg-[#2a3343] text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href="https://foodie-app.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary-developer hover:text-primary-developer/80 transition-colors"
                  >
                    {translations.projects.viewProject}
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://github.com/yourusername/foodie"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary-developer hover:text-primary-developer/80 transition-colors"
                  >
                    {translations.projects.viewCode}
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Portfolio Project */}
            <div className="group relative bg-gray-100 dark:bg-[#1a2333] rounded-lg overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src="/projects/portfolio.png"
                  alt="Portfolio Project"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {translations.projects.items.portfolio.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {translations.projects.items.portfolio.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {translations.projects.items.portfolio.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-200 dark:bg-[#2a3343] text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href="https://your-portfolio.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary-developer hover:text-primary-developer/80 transition-colors"
                  >
                    {translations.projects.viewProject}
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://github.com/yourusername/portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary-developer hover:text-primary-developer/80 transition-colors"
                  >
                    {translations.projects.viewCode}
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
} 