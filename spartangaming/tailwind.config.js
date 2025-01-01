/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./components/*.{js,vue,ts}",
      "./layouts/*.vue",
      "./pages/*.vue",
      "./plugins/*.{js,ts}",
      "./app.vue",
      "./error.vue",
    ],
  theme: {
    extend: {
      colors: {
        'body-orange': '#b4966e',
        'head-foot-orange': '#cdb08a',
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      }
    },
  },
  plugins: [],
}

