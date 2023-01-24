/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.tsx', './pages/**/*.tsx', './components/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        pacio: ['-apple-system', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
