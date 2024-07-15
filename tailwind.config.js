/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: '#543310',
        lbrown: '#985c1c',
        red: '#da000b'
      },
    },
  },
  plugins: [],
}