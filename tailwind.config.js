/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'default': '0 8px 8px  rgb(213,203,185)',
        'green': '0 8px 8px rgb(65,184,131)',
        
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      },
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
        "backend-bg": "url('/skills/paint-bg.png')",
      },
    },
  },
  plugins: [],
};