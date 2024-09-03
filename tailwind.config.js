/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     
      colors: {
        "primary": "#9333ea",
        "secondary": "#c084fc",
        "tertiary": "#FFFBF0",
        "quaternary": "#FF7A00",
        "quinary": "#FFD100",
        "senary": "#FFFBF0",
      },
    },
    fontFamily: {
      sans: ["var(--font-inter)"],
    },
  },
  plugins: [],
};