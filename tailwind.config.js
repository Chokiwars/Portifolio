export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0f0f1a",
        surface: "#1a1a2e",
        primary: "#a855f7",
        primaryHover: "#9333ea",
        accent: "#ec4899",
        text: "#e5e7eb",
        textMuted: "#9ca3af",
      },
    },
  },
  fontFamily: {
    sans: ['Inter', 'sans-serif'],
  },
  plugins: [],
}