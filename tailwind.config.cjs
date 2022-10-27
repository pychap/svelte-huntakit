/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  daisyui: {
    themes: ["business", "garden"],
    utils: true,
  },
  theme: {
    extend: {
      fontFamily: {
        serif: ["'Alegreya', 'Times New Roman', 'Times', 'serif'"],
        sans: ["'Lato', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
}
