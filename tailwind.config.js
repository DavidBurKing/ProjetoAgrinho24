/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '1px 1px 5px #00000065',
        '4xl': '0px 1px 14px 0px #000000c2'
      },
      borderWidth: {
        '3': '3px',
        '6': '6px'
      },
      colors: {
        'bluish-light-gray': '#e7e7e7',
        'popbackground': '#00000080',
        'backgroundindex': '#363535'
      },
    },
    screens: {
      'DisposG': '425px'
    },
  },
  plugins: [],
}