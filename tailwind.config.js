/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        small: "340px",
        medium: "540px",
        large: "768px",
        xlarge: "988px",
        xxlarge: "1180px" 
      },
  },
},
  plugins: [],

}