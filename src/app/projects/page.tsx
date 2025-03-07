"use client"

import { useState } from "react";
import Image from 'next/image';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
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

  const projects = [
    {
      title: "Awesome Books",
      description: "Une application web permettant de gérer une collection de livres avec JavaScript.",
      image: "/awesome.png",
      tech: ['JavaScript', 'HTML', 'CSS'],
      github: "https://github.com/GhostEsso/Awesome-books-with-ES6",
      demo: "https://ghostesso.github.io/Awesome-Books/"
    },
    {
      title: "Foodie",
      description: translations.projects.items.foodie.description,
      image: "/foody.png",
      tech: translations.projects.items.foodie.tech,
      github: "https://github.com/GhostEsso/foodie",
      demo: "https://foodie-rails.onrender.com"
    },
    {
      title: "Math Magician",
      description: "Une calculatrice interactive construite avec React, permettant d'effectuer des opérations mathématiques de base.",
      image: "/math.png",
      tech: ['React', 'JavaScript', 'CSS'],
      github: "https://github.com/GhostEsso/Math-Magicians",
      demo: "https://math-magician-htg1.onrender.com/"
    },
    {
      title: "Space Travelers",
      description: "Application web permettant de réserver des voyages spatiaux et de gérer les missions spatiales.",
      image: "/space.png",
      tech: ['React', 'Redux', 'API SpaceX'],
      github: "https://github.com/GhostEsso/Space-Travelers",
      demo: "https://space-travelers-qg24.onrender.com/"
    },
    {
      title: "Ahoefa",
      description: "Une application web pour la réservation et la gestion de biens immobiliers. Construite avec Ruby on Rails.",
      image: "/ahoefa.png",
      tech: ['Next.js', 'React', 'Ruby on Rails'],
      github: "https://github.com/GhostEsso/ahoefa-frontend",
      demo: "https://ahoefa.onrender.com/"
    }
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
            {projects.map((project, index) => (
              <div key={index} className="group relative bg-gray-100 dark:bg-[#1a2333] rounded-lg overflow-hidden">
                <div className="relative aspect-w-16 aspect-h-9 h-48 sm:h-56 md:h-64">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-200 dark:bg-[#2a3343] text-gray-700 dark:text-gray-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary-developer hover:text-primary-developer/80 transition-colors"
                    >
                      GitHub
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary-developer hover:text-primary-developer/80 transition-colors"
                    >
                      Live Demo
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
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
} 