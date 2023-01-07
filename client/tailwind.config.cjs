/** @type {import('tailwindcss').Config} */
module.exports = {
  //! remember to add JSX file along with HTML,JS👇
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 6s linear infinite'
      }
    },
    fontFamily : {
      body : ['Inter', 'sans-serif'],
      hero : ['Oxanium', 'cursive'],
      head : ['Gruppo', 'cursive','sans-serif']
    }
  },
  plugins: [],
}