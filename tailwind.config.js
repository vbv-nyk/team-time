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
        "avani-lheader": "#4626ff",
        "avani-mheader": "#800000",
        "avani-paragraph": "#592121",
        "avani-background": "#e6f0e8",
      },
    },
  },
  plugins: [],
};
