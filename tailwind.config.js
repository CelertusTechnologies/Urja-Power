/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        industrial: {
          900: '#0f172a', // Dark slate for text
          800: '#1e293b', // Muted text
          700: '#334155', // Subtitles
          600: '#475569',
          50: '#f8fafc',  // Ultra light background
          100: '#f1f5f9', // Light background
          200: '#e2e8f0', // Card backgrounds
        },
        electric: {
          blue: '#22c55e', // Brand green (logo color)
          glow: 'rgba(34, 197, 94, 0.2)',
        },
        brand: {
          green: '#22c55e',
          'green-dark': '#16a34a',
          yellow: '#eab308',
          'yellow-dark': '#ca8a04',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(to bottom right, #f8fafc, #f1f5f9, #f8fafc)',
      },
      animation: {
        'glow-pulse': 'glow 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%, 100%': { opacity: 0.5 },
          '50%': { opacity: 1 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
