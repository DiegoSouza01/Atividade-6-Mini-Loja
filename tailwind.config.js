/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // ← Certifique-se que esta linha está correta
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
};
