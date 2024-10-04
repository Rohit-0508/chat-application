/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkPurple: '#42275A',
        lightPurple: '#734a8d', 
      },
      backgroundImage: {
        'home-bg': "url('/src/assets/background.jpeg')",
        'custom-gradient': 'linear-gradient(to right, #42275A, #734a8d)',
      },
    },
  },
  plugins: [],
}