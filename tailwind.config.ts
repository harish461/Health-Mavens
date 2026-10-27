import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B2345",
          dark: "#071830",
          light: "#17345E",
        },
        teal: {
          primary: "#00838D",
          dark: "#006B75",
          aqua: "#19B6B0",
          soft: "#EAF8F7",
          subtle: "#F2FAF9",
        },
        cream: {
          DEFAULT: "#FFF5E5",
          badge: "#FEF7EC",
          border: "#F3DCB4",
          gold: "#C59B27",
        },
        slate: {
          body: "#46545B",
          heading: "#0B2345",
          muted: "#667882",
          subtle: "#8A99A2",
          border: "#E2E8F0",
        },
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", "Montserrat", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 30px -5px rgba(11, 35, 69, 0.07), 0 4px 6px -2px rgba(11, 35, 69, 0.04)",
        form: "0 20px 45px -10px rgba(11, 35, 69, 0.12), 0 8px 16px -4px rgba(11, 35, 69, 0.06)",
        badge: "0 2px 8px rgba(0, 131, 141, 0.15)",
        cta: "0 6px 20px rgba(0, 131, 141, 0.35)",
        "cta-hover": "0 8px 25px rgba(0, 131, 141, 0.45)",
      },
      borderRadius: {
        card: "18px",
        form: "22px",
      },
    },
  },
  plugins: [],
};

export default config;
