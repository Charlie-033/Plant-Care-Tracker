/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: '#1f2937',
        darkText: '#f9fafb',
        lightBg: '#f9fafb',
        lightText: '#1f2937',
      },
    },
  },
};

export default config;
