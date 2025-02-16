/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {scrollbar: {
      width: "10px",
      track: "#d1e5ff",
      thumb: "linear-gradient(#642bff, #ff22e6)",
    },},
  },
  plugins: [require("daisyui")],
};
