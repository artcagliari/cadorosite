/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundColor: {
        primary: "#F9F8F6",
      },
      textColor: {
        primary: "#1A1A1A",
      },
      borderColor: {
        border: "#E5E5E5",
      },
      colors: {
        accent: "#8C8C88",
      },
    },
  },
  plugins: [],
};
