/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./public/*.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        'jakarta': ["JakartaSans", "sans-serif"],
        'jakartaBold': ["JakartaBold", "sans-serif"],
        'jakartaMedium': ["JakartaMedium", "sans-serif"],
      },
      colors: {
        "veryLightGrayishBlue": "hsl(210, 60%, 98%)",
        "lightgrayishBlue1": "hsl(211, 68%, 94%)",
        "lightgrayishBlue2": "hsl(205, 33%, 90%)",
        "grayishBlue": "hsl(219, 14%, 63%)",
        "darkGrayishBlue": "hsl(219, 12%, 42%)",
        "veryDarkBlue": "hsl(224, 21%, 14%)",
        "blueish": "hsl(219, 85%, 26%)",
        "redish": "hsl(1, 90%, 64%)"

      },
    },
  },
  plugins: [require('@shrutibalasa/tailwind-grid-auto-fit')],
}
