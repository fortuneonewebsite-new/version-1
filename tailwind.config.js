/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brandlight: "#5781ab", // Light blue
        branddark: "#2f4669",  // Dark navy
      },
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'], // Default sans font
        cursive: ['"Dancing Script"', "cursive"], // Custom cursive font
        'playfair': ['"Playfair Display"', 'serif'], // For headings
        'lato': ['"Lato"', 'sans-serif'], // For paragraph text
      },
    },
  },
  plugins: [],
};
