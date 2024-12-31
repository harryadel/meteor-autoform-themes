/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./client/**/*.{html,js}",
    "./client/*.{html,js}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false, // Disable Tailwind's reset
  }
}
