import animations from "@midudev/tailwind-animations";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/preline/preline.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#9739C6",
        secondary: "#F4E56E",
      },
    },
  },
  plugins: [animations, require("preline/plugin")],
};
