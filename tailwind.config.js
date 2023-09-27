/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs':'320px',
      'sm': '480px',
       'mid-sm':'640px',
      'md': '768px',
      'lg': '1024px',
      'mid-xl': '1280px',
      'xl': '1440px',
      'xxl': '1536px',
      'xxxl': '1920px',
    },
    extend: {
      backgroundImage: {
        paint: "url('../src/assets/HomePageImg/StrapsImg/bg.png')",
      },
    },
  },
  plugins: [],
}


