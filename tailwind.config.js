/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {        
        'Very-Light-Grayish-Blue': 'hsl(240, 78%, 98%)',
        'Light-Grayish-Blue': 'hsl(234, 14%, 74%)',
        'Grayish-Blue': 'hsl(233, 13%, 49%)',
        'Dark-Grayish-Blue': 'hsl(232, 13%, 33%)',
        'color1': 'hsl(236, 72%, 79%)',
        'color2': 'hsl(237, 63%, 64%)'
      },

      backgroundImage: {
        pattern1: 'url("/src/pricing-component-with-toggle-master/images/bg-top.svg")',
        pattern2: 'url("/src/pricing-component-with-toggle-master/images/bg-bottom.svg")'
      }
    },
  },
  plugins: [],
}
