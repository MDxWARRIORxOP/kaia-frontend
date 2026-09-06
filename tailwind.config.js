/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#166534",
        darkGreen: "#101E07",
        background: "#f8f8f6",
        textPrimary: "#111827",
        textSecondary: "#6b7280",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        navbar: "0 18px 40px rgba(16, 30, 7, 0.08)",
      },
    },
  },
  plugins: [],
}
