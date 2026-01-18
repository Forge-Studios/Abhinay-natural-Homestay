import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Earthy colors for your Natural Homestay theme
        "forest": "#2D4B22",
        "sand": "#F5F2ED",
      },
    },
  },
  plugins: [],
};
export default config;