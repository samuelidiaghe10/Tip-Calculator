/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Strong-Cyan': 'hsl(171, 66%, 44%)',
        'Light-Blue': 'hsl(233, 100%, 69%)',
        'Dark-Grayish-Blue': 'hsl(210, 10%, 33%)',
        'Grayish-Blue': 'hsl(201, 11%, 66%)',
      },

      backgroundImage: {
        pattern : 'url("/src/clipboard-landing-page-master/images/bg-header-desktop.png")'
      }
    },
  },
  plugins: [],
}
