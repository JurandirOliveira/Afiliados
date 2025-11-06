/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false,
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        "ml-yellow": "#fff159",
      },
    },
  },
  plugins: [],
};
