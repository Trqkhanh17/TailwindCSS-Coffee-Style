/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "light-coffee":"#C89F94"
      },
      fontFamily:{
        Karla:["Karla", "sans-serif"]
      },
      backgroundImage: {
        'slider-bg': "url('./assets/slider-bg.jpg')",
      },
    },
  },
  plugins: [],
}

