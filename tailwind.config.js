/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#050604',
        primary: '#6FC887',
        box_bg: '#053a34'
      }
    },
  },
  plugins: [],
}