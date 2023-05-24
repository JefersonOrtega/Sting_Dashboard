/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/*.{js,ts,jsx,tsx,mdx}",
    "./src/common/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#212A3E",
        light: "#F1F6F9",
        "light-text": "#ffffff",
        blue: "#394867",
        gray: "#9BA4B5",
        // blue: "#3d403a",
        // "dark-blue": "#012e40",
        // "dark-gray": "#f0f3f4 ",
      },
      fontFamily: {
        popins: ["Poppins", "sans-serif"],
      },
      screens: {
        // sm: { max: "800px" },
        // md: { min: "800px" },
        // lg: { min: "1280px" },
        // => @media (max-width: 639px) { ... }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
