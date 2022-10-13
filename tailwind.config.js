/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0px 7px 0px 3px #000000",
        "4xl": "0px 8px 0px #000000",
      },
    },
  },
  plugins: [],
};
