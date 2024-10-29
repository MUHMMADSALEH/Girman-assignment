/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-light': '0px 4px 10px 0px rgba(0, 0, 0, 0.05)',
        'custom-dark': '0px 1.4px 8.43px 0px rgba(0, 0, 0, 0.25)', // 5% opacity is 0.05
      },
    },
  },
  plugins: [],
}
