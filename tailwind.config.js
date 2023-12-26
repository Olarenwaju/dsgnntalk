/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx,ts}"],
    theme: {
      extend: {
        fontFamily: {
            'clash': ['Clash Display', 'sans-serif'],
            'syne': ['Syne', 'sans-serif']
        },
        colors: {
            primary: '#ffffff',
        }
      },
    },
    plugins: [],
  }