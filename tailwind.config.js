/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      fontFamily: {
        changan: ["Changan Bold"],
        poppin: ["Poppin"],
      },
      fontSize: {
        header: ["18px"],
        body: ["14px"],
      },
      colors: {
        primary: "#0B457F",
      },
    },
  },
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [],
};
