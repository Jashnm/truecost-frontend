/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#dad4ea",
          100: "#d0c6fe",
          200: "#7956a2",
          300: "#65398a",
          400: "#512575",
          500: "#3d0165",
          600: "#3a0264",
          700: "#30005a"
        }
      }
    }
  },
  plugins: []
};
