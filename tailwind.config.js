module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'phone': '280px',
      'tablet': '768px',
      'laptop': '1024px',
      'desktop': '1280px',
      'up': '1430px',
    },
    extend: {
      backgroundImage: {
        'tlou2': "url('/img/tloupart2.png')",
        'tlou': "url('/img/tlou.png')",
      },
      fontFamily: {
        'biotif': ['Biotif-Regular', 'sans-serif'],
        'gilroy-regular': ['Gilroy-Regular', 'sans-serif'],
        'gilroy-medium': ['Gilroy-Medium', 'sans-serif'],
        'gilroy-bold': ['Gilroy-Bold', 'sans-serif']
      },
    },
  },
  plugins: [],
};
