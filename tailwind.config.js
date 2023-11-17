/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: colors.yellow,
        col: {
          100: '#182741',
          200: '#e2e8f0',
          400: '#adc7e8',
        }
        
      },
      
      
    },
  },
  plugins: [],
};

