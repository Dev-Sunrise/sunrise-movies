/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fontPrimary: ["DM Sans", "sans-serif"],
      },

      colors: {
        primary: "#7b61ff",
        secondary: "#00031c",
        darkColor1: "#161934",
        darkColor2: "#010214",
        darkColor3: "#191C32",
        grayColor1: "#cccdd2",
        btnColor1: "#9e61ff",
        btnColor2: "#619bff",
        btnColor3: "#6c52ee",
      },

      boxShadow: {
        buttonShadow: "0 15px 40px -8px rgba(158,97,255,.5)",
      },
    },
  },
  plugins: [],
};
