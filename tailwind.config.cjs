/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-rgba': 'rgba(161, 177, 219, 0.317343);',
        'yellow-rgba': 'rgba(255, 207, 0, 0.15);',
        'blue-border-rgba': 'rgba(85, 105, 158, 0.3);',
        
      },
    },
  },
  plugins: [],
}
