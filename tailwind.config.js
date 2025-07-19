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
      },
      keyframes: {
        zoom: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.08)' },
        },
      },
      animation: {
        zoom: 'zoom 2s ease-in-out infinite',
      },
    },

  },
  plugins: [],
}
