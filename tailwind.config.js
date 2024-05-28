/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bgPrimary: "#22242A",
        bgSecondary: "#1B1E22",
        textPrimary: "#1777FF",
        textSecondary: "#707174",
      },
      fontFamily: {
        primary: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};
