/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      screens: {
        'sm': '700px',
        'md': '800px',
        'lg': '983px',
      },
      extend: {},
    },
    plugins: [],
  }