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
        brand: {
          pink: {
            DEFAULT: "#EB4B8E",
            hover: "#D6387B",
            light: "#FBE8EE",
            subtle: "#FDF2F5",
          },
          blue: {
            DEFAULT: "#18A9C9",
            hover: "#128EA8",
            light: "#E5F7FB",
          },
          offwhite: "#FFF9F6",
          dark: "#2D2630",
          muted: "#716675",
          border: "#F1E4EA",
          surface: "#FFFFFF",
        },
      },
      fontFamily: {
        serif: ["var(--font-dm-serif)", "Georgia", "serif"],
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(235, 75, 142, 0.08), 0 2px 6px -1px rgba(45, 38, 48, 0.04)",
        card: "0 10px 30px -4px rgba(45, 38, 48, 0.06), 0 4px 12px -2px rgba(235, 75, 142, 0.05)",
        floating: "0 20px 40px -8px rgba(235, 75, 142, 0.22)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseSubtle: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.03)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-out forwards",
        pulseSubtle: "pulseSubtle 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;

