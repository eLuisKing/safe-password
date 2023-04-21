/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
				Sofia: ["Sofia Sans Condensed", "sans-serif"],
			 }
    },
  },
  plugins: [],
}

