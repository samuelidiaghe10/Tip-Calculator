/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {        
        'Very-Dark-Blue': 'hsl(230, 29%, 20%)',
        'Dark-Grayish-Blue': 'hsl(230, 11%, 40%)',
        'Grayish-Blue': 'hsl(231, 7%, 65%)',
        'Light-Grayish-Blue': 'hsl(207, 33%, 95%)'
      },

      
    },
  },
  plugins: [],
}
