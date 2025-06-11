/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'mono': ['IBM Plex Mono', 'monospace'],
      },
      colors: {
        'primary': '#000000',
        'secondary': '#666666',
        'accent': '#ff6b6b',
      },
    },
  },
  plugins: [],
}

