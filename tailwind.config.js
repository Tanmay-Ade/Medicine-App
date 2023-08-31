/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      abc: ["Poppins", "sans-serif"],
      def: ["Dancing Script", "cursive"],
      ghi: ["Titan One", "cursive"],
      jkl: ["Audiowide", "cursive"]
    }
  },
  plugins: [],
}