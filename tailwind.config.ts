import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B0B12",
        panel: "#13131E",
        raise: "#1A1A28",
        line: "rgba(255,255,255,0.07)",
        brand: {
          DEFAULT: "#7C3AED",
          soft: "#A78BFA",
          deep: "#5B21B6",
        },
        cream: "#F4F3F8",
        dim: "#A3A0B5",
        faint: "#6E6B80",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 60px -12px rgba(124,58,237,0.45)",
        card: "0 1px 0 rgba(255,255,255,0.06) inset, 0 20px 50px -20px rgba(0,0,0,0.6)",
      },
      animation: {
        "fade-up": "fadeUp .7s cubic-bezier(.21,.7,.3,1) both",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
