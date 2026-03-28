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
          green: "#4ADE80",
          "green-hover": "#22C55E",
          bg: "#0D0F0E",
          surface: "#161918",
          border: "#2A2F2D",
          "text-primary": "#F1F5F3",
          "text-secondary": "#9CA3AF",
          red: "#EF4444",
          "red-hover": "#DC2626",
        },
      },
      fontFamily: {
        sans: ["Inter", "var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
