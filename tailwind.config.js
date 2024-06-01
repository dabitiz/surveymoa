/** @type {import('tailwindcss').Config} */
const colors = {
  primary: "#237BF8",
  secondary: "#F7CF46",
  success: "#23CF69",
  error: "#F82349",
  gray: {
    50: "#F8F9FA",
    100: "#F4F6FA",
    200: "#F2F4F6",
    300: "#E6E9ED",
    400: "#D6D9DF",
    500: "#C5C8CD",
    600: "#C7C7C8",
    700: "#C3C4CC",
    800: "#9CA0A9",
    900: "#797E8A",
    950: "#101118",
  },
};

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors,
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: colors.primary,
          secondary: colors.secondary,
          success: colors.success,
          error: colors.error,
        }
      }
    ]
  }
}
