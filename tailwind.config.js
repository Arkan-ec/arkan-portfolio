/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 8s linear infinite",
        glow: "glow 2s ease-in-out infinite",
        "fade-in-up": "fadeInUp 0.5s ease-out forwards",
        "fade-in-scale": "fadeInScale 0.5s ease-out forwards",
      },
      keyframes: {
        glow: {
          "0%, 100%": { opacity: 0.7 },
          "50%": { opacity: 0.3 },
        },
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        fadeInScale: {
          "0%": {
            opacity: "0",
            transform: "scale(0.8)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};
