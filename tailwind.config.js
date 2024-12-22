/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primaryBlue: "#1570EF",
      gray: "#E9EAEB",
      black: "#000000",
      secondaryBlack: "#414651",
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    extend: {
      fontWeight: {
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
      },
      fontSize: {
        sm: "0.8rem",
      },
    },
  },
  plugins: [],
};
