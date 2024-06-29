module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans"],
        "playfair-display": ["Playfair Display", "serif"],
        poppins: ["Poppins", "sans"],
        roboto: ["Roboto", "sans"],
        Averta: ["AvertaStd", "sans"],
        GaramondPro: ["Adobe Garamond Pro"],
      },
      screens: {
        "8xl": "1700px",
        "7xl": "1600px",
        "6xl": "1500px",
        "5xl": "1400px",
        "4xl": "1300px",
        "3xl": "1200px",
        "2xl": "1100px",
        xl: "1000px",
        lg: "800px",
        l: "700px",
        m: "600px",
        x: "500px",
        xs: "400px",
      },
    },
  },
  plugins: [],
};
