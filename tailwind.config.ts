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
          developer: "#FFD700",
          human: "#4169E1",
          programmer: "#FF0000",
          visionary: "#008000",
        }
      },
    },
  },
  plugins: [],
};

export default config;
