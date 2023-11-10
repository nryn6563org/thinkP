/** @type {import('tailwindcss').Config} */
module.exports = {
  // important : true,
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'md' : '801px',
    },
    colors: {
      'mainColor' : '#5368FF',
      'black' : '#141414',
      'white' : '#fff',
      'bgColor' : '#F8F8F8',
    },
    extend: {},
  },
  plugins: [],
}

