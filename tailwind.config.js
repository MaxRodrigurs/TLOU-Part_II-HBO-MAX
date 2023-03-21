module.exports = {
  content: [
    "./**/*.html",
    "./tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'tlou2': "url('/img/tloupart2.png')",
        'tlou': "url('/img/part_I/tlou.png')",
      },
      fontFamily: {
        'gilroy-medium': ['Gilroy-Medium', 'sans-serif'],
        'gilroy-bold': ['Gilroy-Bold', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require("tw-elements/dist/plugin")
  ],
}