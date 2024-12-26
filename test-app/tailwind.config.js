/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./client/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    extend: {},
  },
  plugins: [],
  // Important: prevent Tailwind from purging styles from other themes
  safelist: [
    {
      pattern: /.*/
    },
  ]
}
