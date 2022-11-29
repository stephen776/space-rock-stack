/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx,jsx,js}'],
  theme: {
    extend: {},
  },
  plugins: [require('tailwindcss-radix')(), require('@tailwindcss/line-clamp')],
};
