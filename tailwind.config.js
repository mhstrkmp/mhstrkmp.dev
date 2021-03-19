const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: colors.blueGray,
        cyan: colors.cyan,
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.blueGray.800"),
            h1: {
              color: theme("colors.purple.800"),
            },
            h2: {
              color: theme("colors.purple.700"),
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
