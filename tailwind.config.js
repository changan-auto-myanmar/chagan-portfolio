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
    },
  },
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [],
};
