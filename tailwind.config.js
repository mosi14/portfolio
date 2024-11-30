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
      info:"#5c8465",
      btcolor:"#4b6c52",
      btcolorhover:"#3B5440",
      hilight: "#324837",
    },
  },
  },
  plugins: [],
}