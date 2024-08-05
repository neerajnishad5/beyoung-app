/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@storefront-ui/react/**/*.{js,mjs}",
  ],
  theme: {
    extend: {
      height: {
        "70vh": "70vh",
      },
      width: {
        "6/10": "60%",
        "4/10": "40%",
        "2/10": "20%",
        "8/10": "80%",
      },
      colors: {
        "custom-yellow": "#FFDD00",
      },
      fontFamily: {
        sans: ['Lato', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
