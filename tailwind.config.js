/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      "aaca-blue": "#005BAA",
      "aaca-bold-gray": "#7A7B7B",
      "aaca-medium-gray": "#D0D2D3",
      "aaca-light-gray": "#F1F1F2",
      "aaca-green": "#67BE42", 
      "white": "#FFFFFF",
      "black": "#000000"

    }
  },
  plugins: [],
}
