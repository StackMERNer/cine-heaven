/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          primary: "#0F1010",
        },
        brand: {
          primary: "#DD0000",
        },
      },
    },
  },
  plugins: [daisyui],
};
