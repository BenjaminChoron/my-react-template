/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-green': '#52b881',
        'dark-green': '#2e5749',
      }
    },
  },
  plugins: [require("daisyui")],
  darkMode: "class"
}

