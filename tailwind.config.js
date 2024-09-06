/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "copper-rose": {
          50: "#faf7ef",
          100: "#f6efed",
          200: "#ede1de",
          300: "#dec8c3",
          400: "#cba8a1",
          500: "#b5857e",
          600: "#9d6762",
          700: "#82514e",
          800: "#6e4443",
          900: "#5f3c3c",
          950: "#331e1e",
        },
        sage: "#9db17c",
        darkSage: "#788c59",
        olive: "#7c892f",
        darkOlive: "#5d6323",
        cream: "#f1f4cc",
        teal: "#005b4c",
        darkGray: "#353535",
      },
    },
  },
  plugins: [],
};
