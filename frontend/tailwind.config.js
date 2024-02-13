/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-montserrat)"],
        serif: ["var(--font-charming)"],
      },
      colors: {
        black: "#121212",
        white: "#FCFDFC",
        yellow: "#FEB00E",
        green: "#49A60E",
      },
    },
  },
  plugins: [],
};
