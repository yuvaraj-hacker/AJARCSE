/** @type {import('tailwindcss').Config} */
export default {
  content: [ 
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary-blue-color":"#061e5c",
        "primary-liteblue-color":"rgb(215 229 245)",
        "primary-skyblue-color":"#AED2FF",
        "primary-darkblue-color":"#066eb6",
        "primary-dark-blue":"#00a0e3",
      }
    },
  },
  plugins: [],
}

