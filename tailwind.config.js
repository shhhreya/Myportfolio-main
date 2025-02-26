/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
      colors: {
        primary: "#050816",
      }
    },
  },
  plugins: [],
}

