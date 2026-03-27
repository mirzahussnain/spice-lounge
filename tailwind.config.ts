import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        spice: {
          saffron: "#E8943A",
          cream: "#F5E9DA",
          charcoal: "#1A1410",
          crimson: "#A6342F",
          olive: "#46623F",
          smoke: "#2C2420"
        }
      },
      fontFamily: {
        display: ["Cormorant Garamond", "serif"],
        body: ["Inter", "sans-serif"]
      },
      spacing: {
        section: "120px",
        hero: "100dvh"
      }
    }
  }
};

export default config;
