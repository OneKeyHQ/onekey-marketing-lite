const { colors } = require('@onekeyhq/ui-components/utils/tailwind');

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        display: ["Alata"],
      },
      colors,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
