/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        body: '#c0c0c0',
        "selected-text": "#00bfff",
        secondary: "#00bfff"
      },
      backgroundImage: {
        'yuki': "url('../images/yuki.jpg')",
      },
    },
    fontFamily:{
      montserrat:["Roboto Mono","monospace"]
    }
  },
  plugins: [],
}
