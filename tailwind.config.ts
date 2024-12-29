import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          developer: "#FFB347",
          human: "#7FD858",
          programmer: "#00E5BE",
          visionary: "#4B9EF4",
        }
      },
    },
  },
  plugins: [],
};

export default config;
