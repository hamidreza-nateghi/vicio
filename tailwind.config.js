/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    borderRadius: {
      full: "50%",
    },
    extend: {
      fontFamily: {
        Recoleta: ["Recoleta, sans-serif"],
        HelveticaNeue: ["Helvetica Neue, sans-serif"],
        HelveticaNeueCondensed: ["Helvetica Neue Condensed, sans-serif"],
      },
    },
  },
  plugins: [],
};
