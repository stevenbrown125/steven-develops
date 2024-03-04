import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "475px",
        "3xl": "1600px",
        "4xl": "1920px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        content: ["var(--font-noto-sans)"],
        heading: ["var(--font-roboto-slab)"],
      },
      colors: {
        primary: "#e95f47",
        twitter: "#459ccf",
        linkedin: "#3972bd",
        github: "#f0842c",
      },
      boxShadow: {
        "heavy-right":
          "8px 0 15px -3px rgba(0, 0, 0, 0.1), 4px 0 6px -2px rgba(0, 0, 0, 0.05)",
      },
      keyframes: {
        fadeInSlideDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in-slide-down": "fadeInSlideDown 1s ease-out forwards",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
export default config
