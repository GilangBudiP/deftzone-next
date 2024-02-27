import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        brand: "#60A5FA",
        nav: "#49495A",
        background: "#F3F6FB",
      },
      backgroundImage: {
        'gradient-radial': "radial-gradient(var(--tw-gradient-stops))",
        'gradient-conic':
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "banner": "url('/banner.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
