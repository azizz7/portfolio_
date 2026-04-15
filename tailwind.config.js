/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rich-charcoal': '#0a0a0a',
        'deep-slate': '#171717',
        'soft-white': '#ededed',
        'muted-grey': '#a1a1aa',
        'champagne-gold': '#d4af37',
        'slate-blue': '#64748b',
        'bg-primary': '#0a0a0a',
        'text-primary': '#ededed',
        'cream-bg': '#f0f0f0',
        'accent-red': '#ff4d4d',
        'accent-cyan': '#00bcd4',
        'accent-yellow': '#ffeb3b',
        'accent-orange': '#ff9800',
        'accent-purple': '#a855f7',
        'accent-gold': '#f59e0b',
      },
      fontFamily: {
        'playfair': ['"Playfair Display"', 'serif'],
        'inter': ['Inter', 'sans-serif'],
        'fira': ['"Fira Code"', 'monospace'],
        'oswald': ['Oswald', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
} 