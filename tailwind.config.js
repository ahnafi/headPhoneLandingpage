/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'faq-bg':'url("/src/assets/img/bg.jpg")'
      }
    },
    container: {
      center: true,
      padding: "12px"
    },
  },
  plugins: [],
}
