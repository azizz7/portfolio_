/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#111827',
        'dark-surface': '#1F2937',
        'neon-blue': '#00F3FF',
        'neon-orange': '#FF7B00',
        'gray': {
          300: '#D1D5DB',
          400: '#9CA3AF',
          800: '#1F2937',
          900: '#111827',
        },
        'blue': {
          400: '#60A5FA',
          500: '#3B82F6',
        },
        'orange': {
          400: '#FB923C',
        },
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 