 /** @type {import('tailwindcss').Config} */
 export default {
    content: ["./src/**/*.{html,js}"],
    darkMode: 'selector',
    theme: {
      extend: {
        screens: {
          "other":{'min':'340px', 'max':'1200px'},
        },
        colors: {
          darkbg:"#1E293B"
        }
      },
    },
    plugins: [],
  }