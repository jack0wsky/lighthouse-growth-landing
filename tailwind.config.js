/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.tsx", "./app/**/*.tsx", "./shared/*.tsx"],
  theme: {
    extend: {
      colors: {
        palette: {
          black: "#1D1E20",
          yellow: "#F2C524",
          "yellow-light": "#FFD84E",
          grey: {
            600: "#363636",
            400: "#616161",
            300: "#969696",
            200: "#F9F9F9",
          },
        },
      },
      fontSize: {
        1.75: "1.75em",
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
