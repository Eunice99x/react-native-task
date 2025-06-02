/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#60A5FA",
        background: "#111827",
        card: "#1F2937",
        text: {
          primary: "#FFFFFF",
          secondary: "#9CA3AF"
        },
        border: "#374151"
      }
    }
  },
  plugins: []
};
