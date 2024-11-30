/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {      
      fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    colors: {
      primary: '#84a98c', 
      secondary: '#abc4b0', 
    },
  },
  },
  plugins: [],
}