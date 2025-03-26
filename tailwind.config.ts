import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "fade-in": "fadeIn 1s ease-in-out ",
        "fade-out": "fadeOut 1s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: '0' },
          "100%": { opacity: '1' },
        },
        fadeOut: {
          "0%": { opacity: '1' },
          "100%": { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
