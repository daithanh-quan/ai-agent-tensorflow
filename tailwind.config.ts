import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: ["./**/*.{js,ts,jsx,tsx,mdx}", "!./node_modules/**", "!./.next/**"],
  theme: {
    extend: {
      opacity: {
        25: "0.25",
        15: "0.15",
      },
      borderOpacity: {
        25: "0.25",
        15: "0.15",
      },
      keyframes: {
        shine: {
          from: { backgroundPosition: "200% 0" },
          to: { backgroundPosition: "-200% 0" },
        },
      },
      animation: {
        shine: "shine 8s ease-in-out infinite",
      },
      colors: {
        light: "var(--light)",
        "primary-300": "var(--primary-300)",
        "primary-400": "var(--primary-400)",
        "primary-500": "var(--primary-500)",
        "secondary-300": "var(--secondary-300)",
        "dark-600": "var(--dark-600)",
        "dark-500": "var(--dark-500)",
        "gray-400": "var(--gray-400)",
      },
    },
  },
  plugins: [animate],
} satisfies Config;

export default config;
