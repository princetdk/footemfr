/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0a0a0a',     // Background deep black/gray
          card: '#0f1423',     // Dark background patterns
          blue: '#0052ff',     // Bright blue foreground panel
          accent: '#1e69ff',   // Highlight buttons
        }
      },
    },
  },
  plugins: [],
}
