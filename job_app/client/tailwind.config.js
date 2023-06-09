/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    fontFamily: {
      display: ['Montserrat', 'sans-serif'],
      play: ['Roboto Mono', ' monospace'],
    },
  },
  plugins: [require('flowbite/plugin')],
}
