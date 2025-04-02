"use client"

import Image from 'next/image';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { useLanguage } from "@/hooks/useLanguage";
import Link from "next/link";
import { ScrollAnimation } from "@/components/scroll-animation";

export default function Projects() {
  const { translations } = useLanguage();

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
      description: "Une application web privée qui permet aux résidents d'un même immeuble de partager et de vendre leurs plats faits maison. Cette plateforme favorise le partage culinaire et crée des liens sociaux entre voisins. Construite avec Ruby on Rails.",
      image: "/foody.png",
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
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
    },
    {
      title: "Ventou Store",
      description: "Une plateforme e-commerce complète avec un panneau d'administration permettant de gérer les produits, les catégories et les commandes. Construite avec Next.js, Prisma et Tailwind CSS.",
      image: "/ventou.png",
      tech: ['Next.js', 'Prisma', 'Tailwind CSS', 'TypeScript'],
      github: "https://github.com/GhostEsso/ecommerce-store",
      demo: "https://ecommerce-store-five-kohl.vercel.app/",
      admin: "https://ecommerce-admin-six-beige.vercel.app/sign-in"
    }
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-[#0B1121] transition-colors duration-300">
      <Navbar />
      <div className="pt-24 sm:pt-32 pb-16 max-w-7xl mx-auto px-4">
        {/* Main title */}
        <ScrollAnimation>
          <h1 className="text-5xl sm:text-8xl md:text-[12rem] font-bold text-gray-900/10 dark:text-white/10">
            {translations.projects.title}
          </h1>
        </ScrollAnimation>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative z-10 mt-16 md:mt-32">
          {/* Awesome Books */}
          <ScrollAnimation delay={0.2}>
            <div className="group h-full relative bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col">
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                <Image
                  src="/awesome.png"
                  alt="Awesome Books"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 600px"
                />
              </div>
              <div className="p-4 sm:p-6 flex flex-col flex-grow">
                <div className="flex-grow">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Awesome Books
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    Une application web permettant de gérer une collection de livres avec JavaScript.
                  </p>
                </div>
                <div className="flex gap-3 mt-auto">
                  <Link 
                    href="https://github.com/GhostEsso/Awesome-books-with-ES6"
                    target="_blank"
                    className="text-primary-developer hover:underline text-sm"
                  >
                    GitHub
                  </Link>
                  <Link 
                    href="https://ghostesso.github.io/Awesome-Books/"
                    target="_blank"
                    className="text-primary-developer hover:underline text-sm"
                  >
                    Live Demo
                  </Link>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Foodie */}
          <ScrollAnimation delay={0.3}>
            <div className="group h-full relative bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col">
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                <Image
                  src="/foody.png"
                  alt="Foodie"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 600px"
                />
              </div>
              <div className="p-4 sm:p-6 flex flex-col flex-grow">
                <div className="flex-grow">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Foodie
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    Une application web privée qui permet aux résidents d'un même immeuble de partager et de vendre leurs plats faits maison. Cette plateforme favorise le partage culinaire et crée des liens sociaux entre voisins. Construite avec Ruby on Rails.
                  </p>
                </div>
                <div className="flex gap-3 mt-auto">
                  <Link 
                    href="https://github.com/GhostEsso/foodie"
                    target="_blank"
                    className="text-primary-developer hover:underline text-sm"
                  >
                    GitHub
                  </Link>
                  <Link 
                    href="https://foodie-rails.onrender.com"
                    target="_blank"
                    className="text-primary-developer hover:underline text-sm"
                  >
                    Live Demo
                  </Link>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Math Magician */}
          <ScrollAnimation delay={0.4}>
            <div className="group h-full relative bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col">
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                <Image
                  src="/math.png"
                  alt="Math Magician"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 600px"
                />
              </div>
              <div className="p-4 sm:p-6 flex flex-col flex-grow">
                <div className="flex-grow">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Math Magician
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    Une calculatrice interactive construite avec React, permettant d'effectuer des opérations mathématiques de base.
                  </p>
                </div>
                <div className="flex gap-3 mt-auto">
                  <Link 
                    href="https://github.com/GhostEsso/Math-Magicians"
                    target="_blank"
                    className="text-primary-developer hover:underline text-sm"
                  >
                    GitHub
                  </Link>
                  <Link 
                    href="https://math-magician-htg1.onrender.com/"
                    target="_blank"
                    className="text-primary-developer hover:underline text-sm"
                  >
                    Live Demo
                  </Link>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Space Travelers */}
          <ScrollAnimation delay={0.5}>
            <div className="group h-full relative bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col">
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                <Image
                  src="/space.png"
                  alt="Space Travelers"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 600px"
                />
              </div>
              <div className="p-4 sm:p-6 flex flex-col flex-grow">
                <div className="flex-grow">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Space Travelers
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    Application web permettant de réserver des voyages spatiaux et de gérer les missions spatiales.
                  </p>
                </div>
                <div className="flex gap-3 mt-auto">
                  <Link 
                    href="https://github.com/GhostEsso/Space-Travelers"
                    target="_blank"
                    className="text-primary-developer hover:underline text-sm"
                  >
                    GitHub
                  </Link>
                  <Link 
                    href="https://space-travelers-qg24.onrender.com/"
                    target="_blank"
                    className="text-primary-developer hover:underline text-sm"
                  >
                    Live Demo
                  </Link>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Ahoefa */}
          <ScrollAnimation delay={0.6}>
            <div className="group h-full relative bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col">
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                <Image
                  src="/ahoefa.png"
                  alt="Ahoefa"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 600px"
                />
              </div>
              <div className="p-4 sm:p-6 flex flex-col flex-grow">
                <div className="flex-grow">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Ahoefa
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    Une application web pour la réservation et la gestion de biens immobiliers. Construite avec Ruby on Rails.
                  </p>
                </div>
                <div className="flex gap-3 mt-auto">
                  <Link 
                    href="https://github.com/GhostEsso/ahoefa_rails"
                    target="_blank"
                    className="text-primary-developer hover:underline text-sm"
                  >
                    GitHub
                  </Link>
                  <Link 
                    href="https://ahoefa.onrender.com/"
                    target="_blank"
                    className="text-primary-developer hover:underline text-sm"
                  >
                    Live Demo
                  </Link>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Ventou Store */}
          <ScrollAnimation delay={0.7}>
            <div className="group h-full relative bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col">
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                <Image
                  src="/ventou.png"
                  alt="Ventou Store"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 600px"
                />
              </div>
              <div className="p-4 sm:p-6 flex flex-col flex-grow">
                <div className="flex-grow">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Ventou Store
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    Une plateforme e-commerce complète avec un panneau d'administration permettant de gérer les produits, les catégories et les commandes. Construite avec Next.js, Prisma et Tailwind CSS.
                  </p>
                </div>
                <div className="flex gap-3 mt-auto">
                  <Link 
                    href="https://github.com/GhostEsso/ecommerce-store"
                    target="_blank"
                    className="text-primary-developer hover:underline text-sm"
                  >
                    GitHub
                  </Link>
                  <Link 
                    href="https://ecommerce-store-five-kohl.vercel.app/"
                    target="_blank"
                    className="text-primary-developer hover:underline text-sm"
                  >
                    Live Demo
                  </Link>
                  <Link 
                    href="https://ecommerce-admin-six-beige.vercel.app/sign-in"
                    target="_blank"
                    className="text-primary-developer hover:underline text-sm"
                  >
                    Admin
                  </Link>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
      <Footer />
    </main>
  )
} 