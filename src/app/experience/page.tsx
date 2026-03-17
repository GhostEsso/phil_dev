"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useLanguage } from "@/hooks/useLanguage";
import { ScrollAnimation } from "@/components/scroll-animation";

export default function Experience() {
  const { translations } = useLanguage();

  return (
    <main className="min-h-screen bg-white dark:bg-[#0B1121] transition-colors duration-300 overflow-x-hidden">
      <Navbar />
      <div className="pt-24 sm:pt-32 pb-16 max-w-7xl mx-auto px-4">
        {/* Main title */}
        <ScrollAnimation>
          <h1 className="text-5xl sm:text-8xl md:text-[12rem] font-bold text-gray-900/10 dark:text-white/10">
            {translations.experience.title}
          </h1>
        </ScrollAnimation>

        {/* Timeline */}
        <div className="relative mt-16 sm:mt-32 px-2 sm:px-0">
          {/* Vertical line - hidden on very small screens or repositioned */}
          <div className="absolute left-[7px] sm:left-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700 transform sm:-translate-x-1/2"></div>

          {/* Timeline Items Container */}
          <div className="relative space-y-16 sm:space-y-32">
            {[
              { key: 'kaba', delay: 0.2 },
              { key: 'tpg', delay: 0.3 },
              { key: 'foodie', delay: 0.4 },
              { key: 'microverse', delay: 0.5 }
            ].map((item, index) => {
              const exp = (translations.experience as any)[item.key];
              const isEven = index % 2 === 0;

              return (
                <ScrollAnimation key={item.key} delay={item.delay} direction={isEven ? "right" : "left"}>
                  <div className="relative">
                    {/* Period - Desktop: Dash aligned on line, Mobile: Left aligned */}
                    <div className="text-xl sm:text-4xl font-bold text-gray-300 dark:text-gray-600 mb-6 pl-10 sm:pl-0">
                       <div className="sm:hidden">{exp.period}</div>
                       <div className="hidden sm:flex items-center w-full">
                          <span className="flex-1 text-right pr-12">{exp.period.split(' - ')[0]}</span>
                          <span className="text-gray-400 dark:text-gray-500">-</span>
                          <span className="flex-1 text-left pl-12">{exp.period.split(' - ')[1]}</span>
                       </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-start group">
                      {/* Desktop Spacer */}
                      <div className={`hidden sm:block sm:w-1/2 ${isEven ? '' : 'order-last'}`} />
                      
                      {/* Content Panel */}
                      <div className={`relative pl-10 sm:pl-16 sm:w-1/2 ${isEven ? '' : 'sm:pr-16 sm:pl-0 sm:text-right'}`}>
                        {/* Timeline point */}
                        <div className={`absolute top-8 z-20 left-0 transform -translate-x-1/2 
                          ${isEven ? 'sm:left-0' : 'sm:left-auto sm:right-0 sm:translate-x-1/2'}`}>
                          <div className="w-4 h-4 bg-primary-developer rounded-full shadow-[0_0_15px_rgba(255,184,0,0.5)] group-hover:scale-125 transition-transform" />
                          <div className="absolute top-0 left-0 w-4 h-4 bg-primary-developer rounded-full animate-ping opacity-30" />
                        </div>

                        {/* Card */}
                        <div className="bg-gray-50 dark:bg-[#1a2333]/50 backdrop-blur-sm border border-gray-100 dark:border-gray-800/50 rounded-2xl p-6 sm:p-8 hover:shadow-2xl hover:shadow-primary-developer/5 transition-all duration-500">
                          <h3 className="text-xl sm:text-3xl font-black text-gray-900 dark:text-white mb-2 tracking-tight">
                            {exp.title}
                          </h3>
                          <div className={`flex flex-col mb-6 ${isEven ? '' : 'sm:items-end'}`}>
                            <p className="text-primary-developer font-bold text-sm tracking-wider uppercase">{exp.company}</p>
                            <div className="h-1 w-12 bg-primary-developer/20 mt-2 rounded-full" />
                          </div>
                          <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm sm:text-lg font-medium">
                            {exp.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
