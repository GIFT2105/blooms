import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend:
    {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily:
      {
        news: ["Protest Guerrilla", "sans-serif"],
        newsa: ["Raleway", "sans-serif"],
        newsas: ["Source Code Pro", "monospace"],
      },
      screens: {
        'sm': '375px',  // Adjust this breakpoint to target iPhone screens
        'md': '600px',  // Adjust this breakpoint to target iPhone screens
        'xl': '1024px',  // Adjust this breakpoint to target iPhone screens
      },
    },
  },
  plugins: [],
};
export default config;
