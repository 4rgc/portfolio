const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      darkContrast: "#46F0A8",
      darkSecondary: "#21ABA5",
      darkMonochromatic: "#367899",
      darkText: "#FFFFFF",
      darkGrey: "#94B9BB",
      darkBg: "#133535",
      lightContrast: "#1C1A92",
      lightSecondary: "#1D4C7C",
      lightMonochromatic: "#22736E",
      lightText: "#0C1F33",
      lightBg: "#96BFA4",
    },
    fontFamily: {
      sans: ["var(--font-poppins)", ...fontFamily.sans],
      mono: ["var(--font-firaMono)", ...fontFamily.mono],
    },
    screens: {
      tablet: "690px",
      laptop: "900px",
    },
    extend: {
      minWidth: {
        tablet: "690px",
        laptop: "800px"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
