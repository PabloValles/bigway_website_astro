import animations from "@midudev/tailwind-animations";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#9739C6",
        "primary-50": "#F5E8FF",
        "primary-100": "#E1C5FF",
        "primary-200": "#CD9FFF",
        "primary-300": "#B97AFF",
        "primary-400": "#A556FF",
        "primary-500": "#9739C6",
        "primary-600": "#7D2F9F",
        "primary-700": "#622476",
        "primary-800": "#48194D",
        "primary-900": "#2D0F26",
        "primary-950": "#190716",

        secondary: "#F4E56E",
      },
    },
  },
  plugins: [animations],
};
