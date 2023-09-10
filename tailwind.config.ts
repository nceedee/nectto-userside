import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      inter: "Inter Tight, sans-serif",
    },
    extend: {
      colors: {
        secondary: "blueviolet",
        primary: "white",
        accent: "red",
      },
      screens: {
        sm: "320px",
        md: "991px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
};
export default config;
