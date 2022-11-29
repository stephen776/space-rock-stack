/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx,jsx,js}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui'), require('tailwindcss-radix')(), require('@tailwindcss/line-clamp')],
  daisyui: {
    themes: [
      'light',
      'dark',
      {
        custom: {
          primary: '#228be6',
          secondary: '#7b92b2',
          accent: '#ea580c',
          neutral: '#181a2a',
          'base-100': '#ffffff',
          'base-200': '#F2F7FF',
          'base-300': '#E3E9F4',
          'base-content': '#394E6A',
          info: '#0091D5',
          success: '#22c55e',
          warning: '#F7A922',
          error: '#DD2C4D',

          '--rounded-box': '1rem', // border radius rounded-box utility class, used in card and other large boxes
          '--rounded-btn': '0.35rem', // border radius rounded-btn utility class, used in buttons and similar element
          '--rounded-badge': '1.9rem', // border radius rounded-badge utility class, used in badges and similar
          '--animation-btn': '0.25s', // duration of animation when you click on button
          '--animation-input': '0.2s', // duration of animation for inputs like checkbox, toggle, radio, etc
          '--btn-text-case': 'uppercase', // set default text transform for buttons
          '--btn-focus-scale': '0.95', // scale transform of button when you focus on it
          '--border-btn': '1px', // border width of buttons
          '--tab-border': '1px', // border width of tabs
          '--tab-radius': '0.5rem', // border radius of tabs
        },
      },
    ],
  },
};
