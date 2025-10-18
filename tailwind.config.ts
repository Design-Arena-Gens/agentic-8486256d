import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./lib/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"]
      },
      colors: {
        primary: {
          DEFAULT: "#2563eb",
          foreground: "#f8fafc"
        },
        accent: {
          DEFAULT: "#f97316",
          foreground: "#0f172a"
        }
      }
    }
  },
  plugins: []
};

export default config;
