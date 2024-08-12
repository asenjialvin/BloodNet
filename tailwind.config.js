/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Set the primary colors for the theme
        primary: "#161622",
        secondary: {
          DEFAULT: "#FF0000", // Red color for content
          100: "#FF0000",
          200: "#FF2626",
        },
        black: {
          DEFAULT: "#000000", // Black color for content
          100: "#1E1E2D",
          200: "#232533",
        },
        gray: {
          100: "#CDCDE0", // This can remain for gray elements if needed
        },
        // Define the background color as white
        background: {
          DEFAULT: "#FFFFFF", // White background
        },
      },
      backgroundColor: (theme) => ({
        ...theme('colors'),
        primary: theme('colors.background.DEFAULT'), // Using white as the primary background
      }),
      textColor: (theme) => ({
        ...theme('colors'),
        primary: theme('colors.black.DEFAULT'), // Black as the primary text color
        secondary: theme('colors.secondary.DEFAULT'), // Red as the secondary text color
      }),
      fontFamily: {
        pthin: ["Poppins-Thin", "sans-serif"],
        pextralight: ["Poppins-ExtraLight", "sans-serif"],
        plight: ["Poppins-Light", "sans-serif"],
        pregular: ["Poppins-Regular", "sans-serif"],
        pmedium: ["Poppins-Medium", "sans-serif"],
        psemibold: ["Poppins-SemiBold", "sans-serif"],
        pbold: ["Poppins-Bold", "sans-serif"],
        pextrabold: ["Poppins-ExtraBold", "sans-serif"],
        pblack: ["Poppins-Black", "sans-serif"],
      },
    },
  },
  plugins: [],
};
