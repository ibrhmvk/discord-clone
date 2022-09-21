/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/assets/background.svg')",
        'right-pattern': "url('/src/assets/right-bg.svg')",
        'left-pattern': "url('/src/assets/left-bg.svg')",
      }
    },
  },
  plugins: [],
}
