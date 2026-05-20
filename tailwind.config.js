/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#FFF8EC",
          100: "#FEEBC4",
          200: "#FCD584",
          300: "#FABE45",
          400: "#F5A623",
          500: "#E08A13",
          600: "#B96C0C",
          700: "#8E5108",
          800: "#5F3705",
          900: "#3A2103",
        },
        // Logo palette — Thaana Hardware official red & charcoal.
        brick: {
          50:  "#FEF2F3",
          100: "#FDE2E5",
          200: "#FAC0C7",
          300: "#F491A0",
          400: "#E85F75",
          500: "#D63148",
          600: "#C8202E",   // primary brand red (logo)
          700: "#A41A25",
          800: "#7F1620",
          900: "#5A101A",
        },
        ink: "#1A1A1A",     // logo black
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: "0 4px 24px -8px rgba(15, 23, 42, 0.08)",
        card: "0 8px 30px -12px rgba(15, 23, 42, 0.15)",
      },
    },
  },
  plugins: [],
};
