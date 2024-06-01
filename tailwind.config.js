/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      minHeight: {
        layout: "calc(100vh - 112px)",
      },
    },
  },
  plugins: [],
};
