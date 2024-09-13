// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "ui-sans-serif", "system-ui"],
        appleFont: [
          '"Apple SD Gothic Neo"',
          "Arial",
          "Helvetica",
          "sans-serif",
        ],
      },
      colors: {
        customColor: {
          primary: "#EFA1BB",
          bg: "#000",
          bgSideBar: "#111",
        },
      },
      lineHeight: {
        main: "19px",
      },
      screens: {
        sm: "360px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "sm-md": { min: "360px", max: "1024px" },
        "md-lg": { min: "768px", max: "1024px" },
        "lg-xl": { min: "1025px", max: "1279px" },
      },
    },
  },
  plugins: [],
};
