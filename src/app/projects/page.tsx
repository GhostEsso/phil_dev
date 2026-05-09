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
      id: "kabaFulfillment",
      title: translations.projects.list.kabaFulfillment.title,
      description: translations.projects.list.kabaFulfillment.description,
      image: "/kaba-fulfillment.png",
      tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
      demo: "https://kabafulfillment.com/"
    },
    {
      id: "awesomeBooks",
      title: translations.projects.list.awesomeBooks.title,
      description: translations.projects.list.awesomeBooks.description,
      image: "/awesome.png",
      tech: ['JavaScript', 'HTML', 'CSS'],
      github: "https://github.com/GhostEsso/Awesome-books-with-ES6",
      demo: "https://ghostesso.github.io/Awesome-Books/"
    },
    {
      id: "vision",
      title: translations.projects.list.vision.title,
      description: translations.projects.list.vision.description,
      image: "/visio.png",
      tech: ['React', 'MapBox', 'Tailwind CSS', 'TypeScript'],
      github: "https://github.com/GhostEsso/carte-visualisation",
      demo: "https://carte-visualisation.vercel.app/"
    },
    {
      id: "mathMagician",
      title: translations.projects.list.mathMagician.title,
      description: translations.projects.list.mathMagician.description,
      image: "/math.png",
      tech: ['React', 'JavaScript', 'CSS'],
      github: "https://github.com/GhostEsso/Math-Magicians",
      demo: "https://math-magician-htg1.onrender.com/"
    },
    {
      id: "spaceTravelers",
      title: translations.projects.list.spaceTravelers.title,
      description: translations.projects.list.spaceTravelers.description,
      image: "/space.png",
      tech: ['React', 'Redux', 'API SpaceX'],
      github: "https://github.com/GhostEsso/Space-Travelers",
      demo: "https://space-travelers-qg24.onrender.com/"
    },
    {
      id: "ahoefa",
      title: translations.projects.list.ahoefa.title,
      description: translations.projects.list.ahoefa.description,
      image: "/ahoefa.png",
      tech: ['Next.js', 'React', 'Ruby on Rails'],
      github: "https://github.com/GhostEsso/ahoefa-frontend",
      demo: "https://ahoefa.onrender.com/"
    },
    {
      id: "ecommerce",
      title: translations.projects.list.ecommerce.title,
      description: translations.projects.list.ecommerce.description,
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
          {projects.map((project, index) => (
            <ScrollAnimation key={project.id} delay={0.2 + (index * 0.1)}>
              <div className="group h-full relative bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col">
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 600px"
                  />
                </div>
                <div className="p-4 sm:p-6 flex flex-col flex-grow">
                  <div className="flex-grow">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((t) => (
                        <span key={t} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-3 mt-auto">
                    {project.github && (
                      <Link
                        href={project.github}
                        target="_blank"
                        className="text-primary-developer hover:underline text-sm"
                      >
                        {translations.projects.github}
                      </Link>
                    )}
                    <Link
                      href={project.demo}
                      target="_blank"
                      className="text-primary-developer hover:underline text-sm"
                    >
                      {translations.projects.demo}
                    </Link>
                    {project.admin && (
                      <Link 
                        href={project.admin}
                        target="_blank"
                        className="text-primary-developer hover:underline text-sm"
                      >
                        {translations.projects.admin}
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  )
}