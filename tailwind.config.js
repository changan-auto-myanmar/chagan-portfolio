/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      fontFamily: {
        changan: ["Changan Bold"],
        Poppins: ["Poppins"],
      },
      colors: {
        primary: "#0B457F",
      },
    },
  },
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [],
};
