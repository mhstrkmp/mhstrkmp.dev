module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        thoughts: "#A855F7",
        react: "#61dafb",
        "mongo-db": "#13aa52",
        "java-script": "#F8DD4A",
        git: "#f14e32",
        tailwind: "#22d3ee",
        gatsby: "#66338B",
        chimpify: "#8566F2",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
