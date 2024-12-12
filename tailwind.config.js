/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        primary: "#0f172a",
        secondary: "#ed8900",
      },
      container: {
        center: true,
        padding:{
          DEFAULT: "1rem",
          sm: "3rem",
        }
      }
    },
  },
  plugins: [],
}
