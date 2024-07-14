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
        beige: '#F8F4E1',
        peach: '#F5DAD2',
        pink: '#FFCBCB',
        lbrown: '#74512D'
      },
    },
  },
  plugins: [],
}