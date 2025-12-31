/** @type {import('tailwindcss').Config} */
export default {
  theme: { extend: {} },
  corePlugins: {
    preflight: true,
  },
  future: {
    // ✅ Prevent unsupported color parsing (oklch)
    disableColorOpacityUtilitiesByDefault: true,
  },
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  darkMode: false, // 🚀 forcefully disables dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
