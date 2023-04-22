/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: theme =>({
				...theme('colors'),
				'primary': '#06283D',
        'secund': '#1363DF',
        'third': '#47B5FF',
        'fourth': '#DFF6FF'
			}),
			textColor:{
				't-primary': '#1363DF'
			},
      fontFamily: {
				Sofia: ["Sofia Sans Condensed", "sans-serif"],
			 }
    },
  },
  plugins: [],
}

