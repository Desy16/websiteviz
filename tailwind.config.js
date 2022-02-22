const colors = require('tailwindcss/colors');

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      teal: colors.teal,
      cyan: colors.cyan,
      gray: colors.gray,
      white: '#fff',
      black: colors.black,
    },
    extend: {},
  },
  plugins: [],
}
