"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useLanguage } from "@/hooks/useLanguage";
import { ScrollAnimation } from "@/components/scroll-animation";

export default function Experience() {
  const { translations } = useLanguage();

  return (
    <main className="min-h-screen bg-white dark:bg-[#0B1121] transition-colors duration-300">
      <Navbar />
      <div className="pt-24 sm:pt-32 pb-16 max-w-7xl mx-auto px-4">
        {/* Main title */}
        <ScrollAnimation>
          <h1 className="text-5xl sm:text-8xl md:text-[12rem] font-bold text-gray-900/10 dark:text-white/10">
            {translations.experience.title}
          </h1>
        </ScrollAnimation>

        {/* Timeline */}
        <div className="relative mt-16 sm:mt-32">
          {/* Vertical line */}
          <div className="absolute left-1 sm:left-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700 transform sm:-translate-x-1/2"></div>

          {/* Timeline Items Container */}
          <div className="relative space-y-12 sm:space-y-32">
            {/* Kaba Delivery */}
            <ScrollAnimation delay={0.2}>
              <div>
                <div className="text-2xl sm:text-4xl text-gray-400 dark:text-gray-500 mb-8 sm:text-center pl-6 sm:pl-0">
                  2025 - Present
                </div>
                <div className="flex flex-col sm:flex-row sm:items-start">
                  <div className="hidden sm:block sm:w-1/2" />
                  <div className="relative pl-6 sm:pl-16 sm:w-1/2">
                    {/* Timeline point with pulse animation */}
                    <div className="absolute left-[-4px] sm:left-0 top-8 transform sm:-translate-x-1/2">
                      <div className="w-3 h-3 bg-primary-developer rounded-full relative z-10" />
                      <div className="absolute top-0 left-0 w-3 h-3 bg-primary-developer rounded-full animate-ping opacity-75" />
                      <div className="absolute top-0 left-0 w-3 h-3 bg-primary-developer rounded-full animate-pulse opacity-75" />
                    </div>
                    {/* Content */}
                    <div className="bg-gray-100 dark:bg-[#1a2333] rounded-lg p-6 sm:p-8">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        Développeur Full Stack
                      </h3>
                      <p className="text-gray-600 dark:text-gray-500 mb-4">Kaba Delivery SARL</p>
                      <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm sm:text-base">
                        Développement et maintenance des services backend pour la plateforme de livraison Kaba Delivery. Conception et implémentation d'APIs robustes, gestion de bases de données, et optimisation des performances du système.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* TPG Stage */}
            <ScrollAnimation delay={0.4}>
              <div>
                <div className="text-2xl sm:text-4xl text-gray-400 dark:text-gray-500 mb-8 sm:text-center pl-6 sm:pl-0 whitespace-nowrap">
                  December 2024 - March 2025
                </div>
                <div className="flex flex-col sm:flex-row sm:items-start">
                  <div className="hidden sm:block sm:w-1/2" />
                  <div className="relative pl-6 sm:pl-16 sm:w-1/2">
                    {/* Timeline point with pulse animation */}
                    <div className="absolute left-[-4px] sm:left-0 top-8 transform sm:-translate-x-1/2">
                      <div className="w-3 h-3 bg-primary-developer rounded-full relative z-10" />
                      <div className="absolute top-0 left-0 w-3 h-3 bg-primary-developer rounded-full animate-ping opacity-75" />
                      <div className="absolute top-0 left-0 w-3 h-3 bg-primary-developer rounded-full animate-pulse opacity-75" />
                    </div>
                    {/* Content */}
                    <div className="bg-gray-100 dark:bg-[#1a2333] rounded-lg p-6 sm:p-8">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {translations.experience.tpg.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-500 mb-4">{translations.experience.tpg.company}</p>
                      <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm sm:text-base">
                        {translations.experience.tpg.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Foodie */}
            <ScrollAnimation delay={0.6}>
              <div>
                <div className="text-2xl sm:text-4xl text-gray-400 dark:text-gray-500 mb-8 sm:text-center pl-6 sm:pl-0 whitespace-nowrap">
                  December 2023 - November 2024
                </div>
                <div className="flex flex-col sm:flex-row sm:items-start">
                  <div className="hidden sm:block sm:w-1/2" />
                  <div className="relative pl-6 sm:pl-16 sm:w-1/2">
                    {/* Timeline point with pulse animation */}
                    <div className="absolute left-[-4px] sm:left-0 top-8 transform sm:-translate-x-1/2">
                      <div className="w-3 h-3 bg-primary-developer rounded-full relative z-10" />
                      <div className="absolute top-0 left-0 w-3 h-3 bg-primary-developer rounded-full animate-ping opacity-75" />
                      <div className="absolute top-0 left-0 w-3 h-3 bg-primary-developer rounded-full animate-pulse opacity-75" />
                    </div>
                    {/* Content */}
                    <div className="bg-gray-100 dark:bg-[#1a2333] rounded-lg p-6 sm:p-8">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {translations.experience.foodie.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-500 mb-4">{translations.experience.foodie.company}</p>
                      <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm sm:text-base">
                        {translations.experience.foodie.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Microverse */}
            <ScrollAnimation delay={0.8}>
              <div>
                <div className="text-2xl sm:text-4xl text-gray-400 dark:text-gray-500 mb-8 sm:text-center pl-6 sm:pl-0 whitespace-nowrap">
                  March 2023 - December 2023
                </div>
                <div className="flex flex-col sm:flex-row sm:items-start">
                  <div className="hidden sm:block sm:w-1/2" />
                  <div className="relative pl-6 sm:pl-16 sm:w-1/2">
                    {/* Timeline point with pulse animation */}
                    <div className="absolute left-[-4px] sm:left-0 top-8 transform sm:-translate-x-1/2">
                      <div className="w-3 h-3 bg-primary-developer rounded-full relative z-10" />
                      <div className="absolute top-0 left-0 w-3 h-3 bg-primary-developer rounded-full animate-ping opacity-75" />
                      <div className="absolute top-0 left-0 w-3 h-3 bg-primary-developer rounded-full animate-pulse opacity-75" />
                    </div>
                    {/* Content */}
                    <div className="bg-gray-100 dark:bg-[#1a2333] rounded-lg p-6 sm:p-8">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {translations.experience.microverse.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-500 mb-4">
                        {translations.experience.microverse.company}
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm sm:text-base">
                        {translations.experience.microverse.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
