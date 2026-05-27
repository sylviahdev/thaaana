/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Construction orange — the dominant accent.
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
        // Logo red — secondary accent, used sparingly.
        brick: {
          50:  "#FEF2F3",
          100: "#FDE2E5",
          200: "#FAC0C7",
          300: "#F491A0",
          400: "#E85F75",
          500: "#D63148",
          600: "#C8202E",
          700: "#A41A25",
          800: "#7F1620",
          900: "#5A101A",
        },
        // Charcoal — true dark industrial neutrals.
        charcoal: {
          50:  "#F6F6F7",
          100: "#E7E7E9",
          200: "#C9CACD",
          300: "#9FA1A6",
          400: "#6E7177",
          500: "#4B4E54",
          600: "#34363B",
          700: "#26282C",
          800: "#191A1D",
          900: "#0F1012",
          950: "#080809",
        },
        ink: "#1A1A1A",
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: "0 4px 24px -8px rgba(15, 23, 42, 0.08)",
        card: "0 8px 30px -12px rgba(15, 23, 42, 0.15)",
        glow: "0 20px 60px -20px rgba(245, 166, 35, 0.45)",
        ring: "0 0 0 1px rgba(255,255,255,0.06), 0 30px 80px -30px rgba(0,0,0,0.6)",
      },
      backgroundImage: {
        "grid-dark":
          "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
        "grid-light":
          "linear-gradient(rgba(15,23,42,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.04) 1px, transparent 1px)",
        "noise":
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "float-y": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        "marquee": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "shine": {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(120%)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.7s ease-out both",
        "float-y": "float-y 6s ease-in-out infinite",
        "marquee": "marquee 30s linear infinite",
        "shine": "shine 2.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
