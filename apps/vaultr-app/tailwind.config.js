/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#1F306A",
        secondary: "#4C5B61", // #BAC5C9, #A9BEC6
        error: "#CB2C2A", // #DB2B39
        "background-light": "#BAC5C9",
      },
    },
  },
  plugins: [],
};
