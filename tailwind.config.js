/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBG: "##F1F3F9",
        badgeBG: "#FFCC91",
        statusRed: "#CC5F5F",
        statusGreen: "#519C66",
        primary: "#5570f1",
        contactBG: "#5E6366",
        white: "#FFFFFF"
      },
    },
  },
  plugins: [],
}

