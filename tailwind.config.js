/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "coffee":{
          50:"#E8D6D0",
          200:"#C89F94",
          400:"#A25F4B",
          600:"#744838"
        },
        "bordercolor":{
          "inputSubscribe":"#2f303e"
        }
      },
      fontFamily:{
        Karla:["Karla", "sans-serif"]
      },
      backgroundImage: {
        'slider-bg': "url('./assets/slider-bg.jpg')",
      },
      screens:{
        screen783:"783px",
        screen500:"500px",
        "screen554":{"max":"545px"},
        "screen900":{"max":"900px"},
        "sm790":{"max":"790px"},
        "xl1280":{"max":"1280px"},
        "screen700":{"max":"700px"}
      }
    },
  },
  plugins: [],
}

