/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      screens: {
        'sm': '576px',
        'md': '768px',
        'lg': '1440px',
      },
      extend: {},
    },
    plugins: [],
  }