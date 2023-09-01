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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        marvel: {
          primary: "#ED1D24",
          secondary: "#727272",
          accent: "#343232",
          neutral: "#FFF",
          "base-100": "#000000",
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
