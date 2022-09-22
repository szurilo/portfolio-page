module.exports = {
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(circle at top right, var(--tw-gradient-stops))",
      },
      colors: {
        neon: "#00ffff80",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
