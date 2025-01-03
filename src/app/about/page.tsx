"use client";

import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function About() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0B1121] transition-colors duration-300">
      <Navbar />
      <div className="pt-32 pb-16 max-w-7xl mx-auto px-8 md:px-16">
        <div className="space-y-16">
          {/* Main title */}
          <h1 className="text-8xl md:text-[10rem] font-bold text-gray-900/10 dark:text-white/10">
            About Me.
          </h1>

          {/* Header */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
              Full-Stack Developer | Development, Design & Architecture.
              <br />
              Problem Solver, Big & Small. Building breathtaking React
              <br />
              applications. Currently working on{" "}
              <span className="inline-flex items-center bg-red-500 text-white px-4 py-2 rounded-lg">
                Foodie, a food sharing app between neighbors
              </span>
            </h2>
          </div>

          {/* Contact and Bio Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Contact
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                  For any inquiries or questions, send me an{" "}
                  <Link
                    href="lilipitaham@gmail.com"
                    className="text-gray-900 dark:text-white underline hover:text-primary-developer"
                  >
                    email
                  </Link>{" "}
                  and I&apos;ll get back to you quickly.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Opportunities
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                  I&apos;m currently looking for new opportunities.
                  If you think I might be a good fit, check out my resume and get in touch.
                  <br />
                  <Link
                    href="/Essohanam_Tambana_Resume.pdf"
                    target="_blank"
                    className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors mt-8 w-fit"
                  >
                    <span>Download my Resume</span>
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.50005 1.04999C7.74858 1.04999 7.95005 1.25146 7.95005 1.49999V8.41359L10.1819 6.18179C10.3576 6.00605 10.6425 6.00605 10.8182 6.18179C10.994 6.35753 10.994 6.64245 10.8182 6.81819L7.81825 9.81819C7.64251 9.99392 7.35759 9.99392 7.18185 9.81819L4.18185 6.81819C4.00611 6.64245 4.00611 6.35753 4.18185 6.18179C4.35759 6.00605 4.64251 6.00605 4.81825 6.18179L7.05005 8.41359V1.49999C7.05005 1.25146 7.25152 1.04999 7.50005 1.04999ZM2.5 10C2.77614 10 3 10.2239 3 10.5V12C3 12.5539 3.44565 13 3.99635 13H11.0037C11.5538 13 12 12.5539 12 12V10.5C12 10.2239 12.2239 10 12.5 10C12.7761 10 13 10.2239 13 10.5V12C13 13.1046 12.1082 14 11.0037 14H3.99635C2.89179 14 2 13.1046 2 12V10.5C2 10.2239 2.22386 10 2.5 10Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </Link>
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Social Links
                </h2>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <Link
                      href="https://twitter.com"
                      target="_blank"
                      className="hover:text-white transition-colors"
                    >
                      → Twitter
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://github.com/GhostEsso"
                      target="_blank"
                      className="hover:text-white transition-colors"
                    >
                      → GitHub
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.linkedin.com/in/essohanam-tambana/"
                      target="_blank"
                      className="hover:text-white transition-colors"
                    >
                      → LinkedIn
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Tech Stack
              </h2>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                <Image
                  src="/tech/js.png"
                  alt="JavaScript"
                  width={60}
                  height={60}
                />
                <Image
                  src="/tech/ts.png"
                  alt="TypeScript"
                  width={60}
                  height={60}
                />
                <Image src="/tech/html.png" alt="HTML" width={60} height={60} />
                <Image src="/tech/css.png" alt="CSS" width={60} height={60} />
                <Image src="/tech/ruby.png" alt="Ruby" width={60} height={60} />
                <Image src="/tech/git.png" alt="Git" width={60} height={60} />
                <Image
                  src="/tech/react.png"
                  alt="React"
                  width={60}
                  height={60}
                />
                <Image
                  src="/tech/firebase.png"
                  alt="Firebase"
                  width={60}
                  height={60}
                />
                <Image
                  src="/tech/postgres.png"
                  alt="POSTGRES"
                  width={60}
                  height={60}
                />
                <Image
                  src="/tech/mongodb.png"
                  alt="MongoDB"
                  width={60}
                  height={60}
                />
                <Image
                  src="/tech/ror.png"
                  alt="RubyOnRails"
                  width={60}
                  height={60}
                />
              </div>

              <div className="mt-8">
                <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed">
                  A Full Stack developer with over 2 years of experience
                  in web, mobile and hybrid application development using
                  React, Node.js and Ruby on Rails.
                  I have experience in designing backend architectures.
                  I use the main Frontend development technologies like Next.js,
                  React (with Redux), TypeScript and JavaScript (ES6),
                  creating SPAs that work with APIs and follow best practices.
                  Confident in writing unit tests with the Jest framework.
                  Good understanding of Agile methodology and ability to
                  collaborate effectively in a team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
