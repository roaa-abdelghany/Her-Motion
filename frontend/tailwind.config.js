/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        blush: "#F8DDE3",
        rose: "#D98298",
        "deep-rose": "#B85C78",
        cream: "#FFF9F5",
        "soft-gray": "#F4F1F0",
        peach: "#FFF3E6",
        sage: "#E8EBE0",
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};