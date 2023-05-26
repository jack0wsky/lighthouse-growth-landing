/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/**/*.tsx",
    "./sections/**/*.tsx",
    "./app/**/*.tsx",
    "./shared/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        palette: {
          black: "#1D1E20",
          yellow: "#F2C524",
          grey: "#F9F9F9",
        },
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
