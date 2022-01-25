module.exports = {
  content: [
    "./app.vue",
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  darkMode: "media",
  theme: {
    extend: {},
    fontFamily: {
      sans: ["DM Mono", "sans-serif"],
      mono: ["DM Mono", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
