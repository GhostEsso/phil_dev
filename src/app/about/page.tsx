"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useLanguage } from "@/hooks/useLanguage";
import { ScrollAnimation } from "@/components/scroll-animation";
import Image from "next/image";

export default function About() {
  const { translations } = useLanguage();

  const techIcons = [
    { src: "/tech/js.png", alt: "JavaScript" },
    { src: "/tech/ts.png", alt: "TypeScript" },
    { src: "/tech/html.png", alt: "HTML" },
    { src: "/tech/css.png", alt: "CSS" },
    { src: "/tech/ruby.png", alt: "Ruby" },
    { src: "/tech/git.png", alt: "Git" },
    { src: "/tech/react.png", alt: "React" },
    { src: "/tech/firebase.png", alt: "Firebase" },
    { src: "/tech/postgres.png", alt: "PostgreSQL" },
    { src: "/tech/mongodb.png", alt: "MongoDB" },
    { src: "/tech/ror.png", alt: "Ruby on Rails" },
    { src: "/tech/cicd.png", alt: "CI/CD" }
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-[#0B1121] transition-colors duration-300">
      <Navbar />
      <div className="pt-24 sm:pt-32 pb-16 max-w-7xl mx-auto px-4">
        {/* Main title */}
        <ScrollAnimation>
          <h1 className="text-5xl sm:text-8xl md:text-[12rem] font-bold text-gray-900/10 dark:text-white/10">
            {translations.about.title}
          </h1>
        </ScrollAnimation>

        <div className="mt-16 sm:mt-32 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Tech Icons Grid */}
          <ScrollAnimation delay={0.2}>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 md:gap-8 p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg h-full">
              {techIcons.map((icon, index) => (
                <div key={index} className="flex items-center justify-center p-6 md:p-8 bg-gray-50 dark:bg-gray-700 rounded-lg hover:scale-105 transition-transform duration-300">
                  <Image
                    src={icon.src}
                    alt={icon.alt}
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </ScrollAnimation>

          {/* Content */}
          <ScrollAnimation delay={0.4}>
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                {translations.about.subtitle}
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p className="leading-relaxed">
                  {translations.about.description}
                </p>
              </div>

              {/* Skills */}
              <div className="mt-8 space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {translations.about.skills.title}
                </h3>
                
                {/* Technical Skills */}
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {translations.about.skills.technical.title}
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {translations.about.skills.technical.items.map((skill, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-2 text-gray-600 dark:text-gray-300"
                      >
                        <span>•</span>
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Soft Skills */}
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {translations.about.skills.soft.title}
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {translations.about.skills.soft.items.map((skill, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-2 text-gray-600 dark:text-gray-300"
                      >
                        <span>•</span>
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
      <Footer />
    </main>
  );
}
