module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(circle at top right, var(--tw-gradient-stops))",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
