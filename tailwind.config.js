/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.tsx', './pages/**/*.tsx', './components/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        pacio: ['-apple-system', 'Inter', 'Montserrat', 'sans-serif'],
      },
      colors: {
        red: {
          dark: '#9A1717',
          light: '#FFDFDF',
        },
      },
      screens: {
        mini: '468px',
        grid: '572px',
      },
    },
  },
  plugins: [],
};
