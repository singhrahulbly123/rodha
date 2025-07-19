/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f68c1f", // Rodha Orange
        dark: "#121212",
        light: "#ffffff",
        grayText: "#b0b0b0"
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"]
      }
    },
    
  },
  plugins: [],
}
