/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          primary: "#0F1010",
          secondary: "#272727",
        },
        brand: {
          primary: "#DD0000",
        },
      },
      screens: {
        // Custom breakpoints
        'xs': '480px',
        '2xl': '1440px',
        '3xl': '1600px',
      },
    },
  },
  plugins: [daisyui],
};
