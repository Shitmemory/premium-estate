/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backdropBlur: {
        sm: "4px",
        md: "8px",
        lg: "12px",
      },
      keyframes: {
        blurIn: {
          "0%": { backdropFilter: "blur(0px)" },
          "100%": { backdropFilter: "blur(8px)" },
        },
      },
      animation: {
        "blur-in": "blurIn 1s ease-out forwards",
      },
    },
  },
  plugins: [],
};
