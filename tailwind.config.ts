import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#FCFCFD",
        ink: "#1C1830",
        "ink-soft": "#4A4560",
        violet: {
          50: "#F3F1FE",
          100: "#E7E3FD",
          200: "#CFC7FB",
          300: "#AEA0F6",
          400: "#8B79F1",
          500: "#6E5ADC",
          600: "#5A47BE",
          700: "#473998",
          800: "#372C74",
          900: "#2A2258",
        },
        lavender: {
          100: "#F1EEFE",
          200: "#E1DAFC",
          300: "#C9BEFA",
          400: "#B7ACFA",
          500: "#9C8CF0",
        },
        peach: {
          100: "#FDEEE3",
          200: "#FBDCC3",
          300: "#F7C29A",
          400: "#F2A66E",
          500: "#EA8A4C",
        },
        glass: "rgba(255,255,255,0.55)",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(110, 90, 220, 0.10)",
        "glass-lg": "0 20px 60px rgba(110, 90, 220, 0.16)",
        "inner-glow": "inset 0 1px 0 0 rgba(255,255,255,0.6)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        "float-slow": "float 14s ease-in-out infinite",
        "spin-slow": "spin 40s linear infinite",
        grain: "grain 8s steps(10) infinite",
        "fade-up": "fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) translateX(0) rotate(0deg)" },
          "33%": { transform: "translateY(-18px) translateX(10px) rotate(3deg)" },
          "66%": { transform: "translateY(10px) translateX(-12px) rotate(-2deg)" },
        },
        grain: {
          "0%, 100%": { transform: "translate(0,0)" },
          "10%": { transform: "translate(-2%,-4%)" },
          "20%": { transform: "translate(-6%,2%)" },
          "30%": { transform: "translate(2%,-6%)" },
          "40%": { transform: "translate(-4%,6%)" },
          "50%": { transform: "translate(-6%,-2%)" },
          "60%": { transform: "translate(6%,0%)" },
          "70%": { transform: "translate(0%,6%)" },
          "80%": { transform: "translate(-4%,0%)" },
          "90%": { transform: "translate(4%,4%)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
