module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // Primary
        darkBlue: "hsl(233, 26%, 24%)",
        limeGreen: "hsl(136, 65%, 51%)",
        brightCyan: "hsl(192, 70%, 51%)",
        // Neutral
        grayishBlue: "hsl(233, 8%, 62%)",
        lightGrayishBlue: "hsl(220, 16%, 96%)",
        veryLightGray: "hsl(0, 0%, 98%)",
        white: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        sans: ["Public Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
