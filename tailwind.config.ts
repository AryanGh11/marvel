import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./*",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        overlay_black:
          "linear-gradient(180deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.45) 48.44%, #000 75.08%)",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        dark: {
          primary: "#ED1D24",
          secondary: "#727272",
          accent: "#343232",
          neutral: "#ffffff",
          "base-100": "#000000",
          "base-200": "#252525",
          info: "#0000ff",
          success: "#008000",
          warning: "#ffff00",
          error: "#ff0000",
        },
        light: {
          primary: "#ED1D24",
          secondary: "#727272",
          accent: "#343232",
          neutral: "#000000",
          "base-100": "#ffffff",
          "base-200": "#F6F6F6",
          info: "#0000ff",
          success: "#008000",
          warning: "#ffff00",
          error: "#ff0000",
        },
      },
    ],
  },
};
export default config;
