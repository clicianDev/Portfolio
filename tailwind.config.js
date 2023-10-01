/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#947048",
        secondary: "#D5CBB9",
        tertiary: "#1A1615",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "backend-bg": "url('/src/assets/skills/paint-bg.png')",
      },
    },
  },
  plugins: [],
};