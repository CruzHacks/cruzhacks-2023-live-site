/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      barlow: ["'barlow'", "sans-serif"],
      nunito: ["'Nunito Sans'", "sans-serif"],
      sans: ['"Inter"', "sans-serif"],
    },
    colors: {
      navy: "#1B1B37",
      blue: "#0083CD",
      purple: "#6F6FE8",
      gray: "#F0F0F0",
      darkgray: "#5F5F5F",
      white: "#FFFFFF",
    },
    extend: {},
  },
  plugins: [],
}
