import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        background: "#0a0a0a", // Deep black
        foreground: "#ededed",
        primary: "#6366f1", // Indigo 500
        secondary: "#a855f7", // Purple 500
        accent: "#14b8a6", // Teal 500
        surface: "#171717", // Neutral 900
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-syne)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'glass': 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
      },
      spacing: {
        '128': '32rem',
      },
      blur: {
        '2xl': '40px',
        '3xl': '64px',
      },
    },
  },
  plugins: [],
};
export default config;