module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        filter: "filter",
      },
      colors: {
        tetra: {
          50: "#000000",
          100: "#e7960b",
          200: "#f6a00b",
          300: "#f6970d",
          400: "#f68e0e",
          500: "#f57c11",
          600: "#F56B1A",
          700: "#f45a22",
          800: "#f4492b",
          900: "#f33733",
        },
        blackplus: {
          900: "#080808",
        },
      },
    },
    fontFamily: {
      heading: ["Monument Extended", "sans-serif"],
      sans: ["Clash Display", `sans-serif`],
    },
  },
  plugins: [],
};
