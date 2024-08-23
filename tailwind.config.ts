import type { Config } from "tailwindcss";
// 464649;
const colors = {
  textColor: "#464649",
  formBg: "#F2F2F3",
  border: "#824FE7",
  gray_500: "#909092",
  button: "#824FE7",
};
const config: Config = {
  content: [
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
      colors: { ...colors },
      fontFamily: {
        telegraf: ["var(--font-telegraf)"],
      },
    },
  },
  plugins: [],
};
export default config;
