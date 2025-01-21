/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2300A1",
        secondary: "#8588D2",
        tertiary: "#CECFED",
        darkgray: "#A2A2A2",
        mediumgray: "#D9D9D9",
        lightgray: "#F0F0F0",
      },
    },
  },
  plugins: [],
}

