module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Monument Extended", "sans-serif"],
        sans: ["Clash Display", `sans-serif`],
        discord: ["gg sans Normal", "sans-serif"],
      },
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
        discord: {
          bg: "#383A40",
          text: "#EBEEF1",
        },
      },
      backgroundImage: {
        "dotted-grid":
          "radial-gradient(circle, #555555 1px, rgba(0, 0, 256, 0) 1px);",
        "lined-grid-black":
          "linear-gradient(to right, #222222 1px, transparent 1px),linear-gradient(to bottom, #222222 1px, transparent 1px)",
        "lined-grid-white":
          "linear-gradient(to right, #DDDDDD50 1px, transparent 1px),linear-gradient(to bottom, #DDDDDD50 1px, transparent 1px)",
        shiny:
          "linear-gradient(210deg, rgba(0,0,0,1) 0%, rgba(9,9,9,1) 16%, rgba(17,17,17,1) 26%, rgba(1,1,1,1) 53%, rgba(0,0,0,1) 100%);",
      },
    },
  },
  plugins: [],
};
