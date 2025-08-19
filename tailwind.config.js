/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Cascadia Code', 'Inter', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        purple: {
          200: '#deb5ec',
          300: '#c797d9',
          400: '#b079c6',
          900: '#57435e',
        },
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'wave': 'wave 2s infinite',
        'blob': 'blob 7s infinite',
        'float': 'float 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};