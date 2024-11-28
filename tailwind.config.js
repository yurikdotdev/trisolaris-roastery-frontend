/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        newsreader: ['Newsreader', 'serif'],
      },
      colors: {
        custom: {
          bgLight: '#fcfaf8',
          bgDark: '#2b2b2b',
          accent: '#f08a42',
          surface: '#f3ece7',
          textLight: '#4a4a4a',
          textDark: '#d9d9d9',
        },
      },
    },
  },
};
