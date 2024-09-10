const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainBackground: "#1a1a1a",
      },
      fontFamily: {
        grotesk: ["Hanken Grotesk", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
        amster: ["New Amsterdam", "sans-serif"],
      }
    },
    darkMode: "class",
    plugins: [nextui()],
  },
  plugins: [],
}

