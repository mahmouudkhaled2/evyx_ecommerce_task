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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'login-form': "url('')",
      },
      transitionDuration: {
        "button-duration": '3s'
      },
      boxShadow: {
        "header": '0 0 10px -3px rgba(0,0,0,0.3)',
        
      }
    },
  },
  plugins: [],
};
export default config;
