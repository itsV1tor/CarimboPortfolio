/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'principal-orange': 'rgb(233,183,24)',
        'principal-orange-200': 'rgb(254,242,182)',
        'principal-purple': 'rgb(140,95,152)',
        'principal-negative': 'rgb(19,13,15)',
      },
    },
  },
  plugins: [],
};
