/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#304463",
        "light-blue": "#7D8ABC",
        pink: "#FFC7ED",
        yellow: "#FFF8DB",
      },
    },
  },
  plugins: [],
};
