"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function Experience() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0B1121] transition-colors duration-300">
      <Navbar />
      <div className="pt-32 pb-16 max-w-7xl mx-auto px-4">
        {/* Main title */}
        <h1 className="text-8xl md:text-[12rem] font-bold text-gray-900/10 dark:text-white/10">
          Experience
        </h1>

        {/* Timeline */}
        <div className="relative mt-32">
          {/* Vertical line */}
          <div className="absolute left-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700 transform -translate-x-1/2"></div>

          {/* Timeline Items Container */}
          <div className="relative">
            {/* TPG Stage */}
            <div className="mb-32">
              <div className="text-4xl text-gray-400 dark:text-gray-500 text-center mb-16">
                2024 - Present
              </div>
              <div className="flex items-start">
                <div className="w-1/2" />
                <div className="w-1/2 relative pl-16">
                  {/* Timeline point with pulse animation */}
                  <div className="absolute left-0 top-8 transform -translate-x-1/2">
                    {/* Center point */}
                    <div className="w-3 h-3 bg-primary-developer rounded-full relative z-10" />
                    {/* Pulse rings */}
                    <div className="absolute top-0 left-0 w-3 h-3 bg-primary-developer rounded-full animate-ping opacity-75" />
                    <div className="absolute top-0 left-0 w-3 h-3 bg-primary-developer rounded-full animate-pulse opacity-75" />
                  </div>
                  {/* Content */}
                  <div className="bg-gray-100 dark:bg-[#1a2333] rounded-lg p-8">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      Mobile Developer Intern
                    </h3>
                    <p className="text-gray-600 dark:text-gray-500 mb-4">TPG - Mobile App Development Agency</p>
                    <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                      Internship in mobile app development at TPG, an agency specialized in designing and developing innovative mobile applications. Active participation in mobile development projects and learning industry best practices.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Foodie */}
            <div className="mb-32">
              <div className="text-4xl text-gray-400 dark:text-gray-500 text-center mb-16">
                2022 - Present
              </div>
              <div className="flex items-start">
                <div className="w-1/2" />
                <div className="w-1/2 relative pl-16">
                  {/* Timeline point with pulse animation */}
                  <div className="absolute left-0 top-8 transform -translate-x-1/2">
                    {/* Center point */}
                    <div className="w-3 h-3 bg-primary-developer rounded-full relative z-10" />
                    {/* Pulse rings */}
                    <div className="absolute top-0 left-0 w-3 h-3 bg-primary-developer rounded-full animate-ping opacity-75" />
                    <div className="absolute top-0 left-0 w-3 h-3 bg-primary-developer rounded-full animate-pulse opacity-75" />
                  </div>
                  {/* Content */}
                  <div className="bg-gray-100 dark:bg-[#1a2333] rounded-lg p-8">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      Full-Stack Software Developer
                    </h3>
                    <p className="text-gray-600 dark:text-gray-500 mb-4">foodie</p>
                    <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                      I am a full-stack developer currently working on the foodie
                      project. It&apos;s a food sharing application that allows
                      neighbors to share their meals and find dishes from their
                      neighbors.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Microverse */}
            <div className="mb-32">
              <div className="text-4xl text-gray-400 dark:text-gray-500 text-center mb-16">
                March 2023 - December 2023
              </div>
              <div className="flex items-start">
                <div className="w-1/2" />
                <div className="w-1/2 relative pl-16">
                  {/* Timeline point with pulse animation */}
                  <div className="absolute left-0 top-8 transform -translate-x-1/2">
                    {/* Center point */}
                    <div className="w-3 h-3 bg-primary-developer rounded-full relative z-10" />
                    {/* Pulse rings */}
                    <div className="absolute top-0 left-0 w-3 h-3 bg-primary-developer rounded-full animate-ping opacity-75" />
                    <div className="absolute top-0 left-0 w-3 h-3 bg-primary-developer rounded-full animate-pulse opacity-75" />
                  </div>
                  {/* Content */}
                  <div className="bg-gray-100 dark:bg-[#1a2333] rounded-lg p-8">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      Microverse Software Development Program
                    </h3>
                    <p className="text-gray-600 dark:text-gray-500 mb-4">
                      Remote Full Stack Web Development Program
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                      Dedicated over 1300 hours to becoming proficient in
                      algorithms, data structures, and full-stack development, will
                      actively work on projects using Ruby, Rails, Javascript, React
                      and Redux. Mastered remote pair-programming through GitHub,
                      industry-standard gitflow, daily standups, fostering effective
                      communication and collaboration with international developers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
