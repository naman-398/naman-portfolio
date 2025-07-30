/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          lg: "1.5rem",
        },
        screens: {
          1680: "1400px",
        },
      },
      fontFamily: {
        "manrope": '"Manrope", sans-serif',
        "bebas-neue": '"Bebas Neue", sans-serif',
        "inter": '"Inter", sans-serif'
      },
      fontSize: {
        "101": "101px",
        "76": "76px",
        "32": "32px"
      },
      colors: {
        "chinese-silver": "#C7C7C7",
        "crayola": "#D3E97A",
        "vampire-black": "#0A0A0A",
        "raisin-black": "#222222",
        "eerie-black": "#1A1A1A",
        "outer-space": "#484848"
      },
    },
  },
  plugins: [], 
}