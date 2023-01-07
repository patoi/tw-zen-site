/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@patoi/tw-zen-plugin')],
  safelist: ['zen--suspend', 'zen--off', 'zen--reduced']
}
