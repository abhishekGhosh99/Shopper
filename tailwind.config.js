/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "linear-gradient(180deg, #fde1ff, #e1ffea22 60%)",
      },
    },
  },
  plugins: [],
};
