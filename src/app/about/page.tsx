"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useLanguage } from "@/hooks/useLanguage";
import { ScrollAnimation } from "@/components/scroll-animation";
import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function About() {
  const { translations } = useLanguage();
  const [icons, setIcons] = useState([
    { src: "/tech/js.png", alt: "JavaScript", id: 0 },
    { src: "/tech/ts.png", alt: "TypeScript", id: 1 },
    { src: "/tech/html.png", alt: "HTML", id: 2 },
    { src: "/tech/css.png", alt: "CSS", id: 3 },
    { src: "/tech/ruby.png", alt: "Ruby", id: 4 },
    { src: "/tech/git.png", alt: "Git", id: 5 },
    { src: "/tech/react.png", alt: "React", id: 6 },
    { src: "/tech/firebase.png", alt: "Firebase", id: 7 },
    { src: "/tech/postgres.png", alt: "PostgreSQL", id: 8 },
    { src: "/tech/mongodb.png", alt: "MongoDB", id: 9 },
    { src: "/tech/ror.png", alt: "Ruby on Rails", id: 10 },
    { src: "/tech/cicd.png", alt: "CI/CD", id: 11 }
  ]);
  
  // Contrôle de l'intervalle pour que les échanges ne soient pas tous à la même fréquence
  const getRandomInterval = useCallback(() => {
    return Math.floor(Math.random() * 1000) + 1500; // Entre 1,5 et 2,5 secondes
  }, []);

  // Fonction pour échanger deux logos aléatoirement
  const swapRandomIcons = useCallback(() => {
    setIcons(prevIcons => {
      const newIcons = [...prevIcons];
      const index1 = Math.floor(Math.random() * newIcons.length);
      let index2 = Math.floor(Math.random() * newIcons.length);
      
      // S'assurer que les deux indices sont différents
      while (index1 === index2) {
        index2 = Math.floor(Math.random() * newIcons.length);
      }
      
      // Échanger les positions
      const temp = newIcons[index1];
      newIcons[index1] = newIcons[index2];
      newIcons[index2] = temp;
      
      return newIcons;
    });
  }, []);

  // Déclencher l'échange aléatoire périodiquement avec un temps variable
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const scheduleNextSwap = () => {
      timeoutId = setTimeout(() => {
        swapRandomIcons();
        scheduleNextSwap();
      }, getRandomInterval());
    };

    scheduleNextSwap();
    
    return () => clearTimeout(timeoutId);
  }, [swapRandomIcons, getRandomInterval]);

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
            <div className="relative grid grid-cols-3 sm:grid-cols-4 gap-6 md:gap-8 p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg h-full overflow-hidden">
              <AnimatePresence>
                {icons.map((icon) => (
                  <motion.div 
                    key={icon.id}
                    layout
                    initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
                    animate={{ 
                      scale: 1, 
                      opacity: 1, 
                      rotate: 0,
                      transition: {
                        type: "spring", 
                        stiffness: 300, 
                        damping: 30
                      }
                    }}
                    exit={{ 
                      scale: 0.8, 
                      opacity: 0, 
                      rotate: 5,
                      transition: {
                        duration: 0.3
                      }
                    }}
                    transition={{ 
                      layout: {
                        type: "spring", 
                        stiffness: 250, 
                        damping: 25,
                        duration: 0.5
                      }
                    }}
                    whileHover={{ 
                      scale: 1.15, 
                      rotate: [-1, 1, -1, 0],
                      transition: { 
                        scale: { duration: 0.2 },
                        rotate: { repeat: Infinity, duration: 0.5, repeatType: "mirror" }
                      }
                    }}
                    className="flex items-center justify-center p-6 md:p-8 bg-gray-50 dark:bg-gray-700 rounded-lg"
                  >
                    <Image
                      src={icon.src}
                      alt={icon.alt}
                      width={60}
                      height={60}
                      className="object-contain"
                      priority
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
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
