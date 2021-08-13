module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      grayBg: "#E5E5E5",
      grayText: "#515151",
      pink: "#FB7C7C;",
    },
    fontFamily: {},

    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
