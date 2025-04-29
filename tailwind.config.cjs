/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#000000", // Pure black
        secondary: "#FFFFFF", // Very dark green (95% black, 5% green)
        tertiary: "#002020", // Dark green (92.5% black, 7.5% green)
        "black-100": "#000000",
        "black-200": "#002020",
        "black-300": "#004040",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #002020",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/what.avifs')",    
      },
      backgroundSize: {
        'full-cover': '100% 100%',
      },
    },
  },
  plugins: [],
};
