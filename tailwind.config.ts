import type { Config } from "tailwindcss";

const config: Config = {
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

export default config;
