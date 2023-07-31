const hslVarToHsla = (varName) => `hsla(var(${varName}) / <alpha-value>)`;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx"],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],
          primary: "hsl(43 100% 65%)",
          "primary-content": "hsl(0 0% 100%)",
          secondary: "hsl(129 40% 68%)",
          "secondary-focus": "hsla(130, 31%, 19%, 1)",
          "base-100": "hsl(0 0% 100%)",
          "--rounded-btn": "0.25rem",
        },
      },
    ],
  },
  theme: {
    fontSize: {
      xs: "var(--text-xs)",
      sm: "var(--text-sm)",
      md: "var(--text-md)",
      xl: "var(--text-xl",
      "2xl": "var(--text-2xl)",
      "3xl": "var(--text-3xl)",
      "4xl": "var(--text-4xl)",
      "8xl": "var(--text-8xl)",
      "9xl": "var(--text-9xl)",
    },
    boxShadow: {
      md: "var(--shadow-md)",
    },
    extend: {
      colors: {
        gray: {
          p: hslVarToHsla("--gray-p"),
          s: hslVarToHsla("--gray-s"),
          t: hslVarToHsla("--gray-t"),
        },
        icon: hslVarToHsla("--icon"),
      },
    },
  },
  plugins: [require("daisyui")],
};
