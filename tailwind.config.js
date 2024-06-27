/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        main: {
          DEFAULT: "#004080",
          100: "#DCE3EA",
          200: "#307BC6",
        },
      },
    },
  },
  plugins: [],
};
