module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      grayBg: "#E5E5E5",
      grayDetails: "#ACABAB",
      grayText: "#515151",
      pink: "#FB7C7C;",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      lora: ["Lora", "serif"],
    },
    // height: {
    //   xl: "658px",
    // },

    extend: {},
  },
  variants: {
    extend: {
      display: ["hover"],
    },
  },
  plugins: [],
};
