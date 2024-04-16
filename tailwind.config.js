/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    },
    fontFamily: {
      "Monoplex": ["Playfair Display", "serif"],
      "Textos": ["Kanit", "sans-serif"],
      "Play": ["Play", "sans-serif"]
    },

  },
  plugins: [
    require('tailwindcss-animated')
  ],
}