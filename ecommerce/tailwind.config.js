/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brightYellow: "rgb(252, 229, 1)", // Add your custom color here
      },
    },
  },
  plugins: [],
}
