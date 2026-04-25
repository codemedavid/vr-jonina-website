/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // VR Jonina - Cute Coquette Pink Theme
        'theme-bg': '#FFF5F7',           // Soft Pink White
        'theme-text': '#4A3040',         // Dark Mauve Text

        // Primary Palette - Coquette Pink
        'brand': {
          DEFAULT: '#E8739B', // Coquette Pink
          50: '#FFF0F5',      // Lavender Blush
          100: '#FFE4EE',     // Misty Rose
          200: '#FFBDD6',     // Light Pink
          300: '#FF9BBF',     // Rose Pink
          400: '#F47FAD',     // Soft Rose
          500: '#E8739B',     // Coquette Pink
          600: '#D4568A',     // Deep Rose
          700: '#BE3D75',     // Berry Pink
          800: '#A52960',     // Dark Rose
          900: '#8C1A4E',     // Wine Rose
        },

        // Secondary & Neutral - Warm Mauve
        'charcoal': {
          DEFAULT: '#4A3040',
          50: '#FFF5F7',      // Soft Pink Tint
          100: '#FFE4EE',
          200: '#FECDD8',
          300: '#C9A6B5',
          400: '#9E7A8C',
          500: '#755464',
          600: '#5E3F4F',
          700: '#4E3343',
          800: '#3E2835',
          900: '#4A3040',     // Dark Text
        },

        // Backgrounds & Accents
        'cream': '#FFF5F7',
        'blush-light': '#FFF0F5',
        'warm-white': '#FFFAFC',
        'gold': '#D4A574',          // Rose Gold Accent
        'ribbon': '#FF85A2',        // Ribbon Pink
      },
      fontFamily: {
        sans: ['Quicksand', 'Inter', 'sans-serif'],
        heading: ['Playfair Display', 'serif'],
        serif: ['Playfair Display', 'serif'],
        cute: ['Quicksand', 'sans-serif'],
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(232, 115, 155, 0.06)',
        'DEFAULT': '0 1px 3px 0 rgba(232, 115, 155, 0.08), 0 1px 2px 0 rgba(0, 0, 0, 0.03)',
        'md': '0 4px 6px -1px rgba(232, 115, 155, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'lg': '0 10px 15px -3px rgba(232, 115, 155, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.02)',
        'soft': '0 4px 20px rgba(232, 115, 155, 0.08), 0 2px 8px rgba(232, 115, 155, 0.04)',
        'luxury': '0 8px 30px rgba(232, 115, 155, 0.12), 0 4px 10px rgba(232, 115, 155, 0.06)',
        'glow': '0 0 20px rgba(232, 115, 155, 0.25)',
      },
      borderRadius: {
        'none': '0',
        'sm': '0.25rem',
        'DEFAULT': '0.5rem',
        'md': '0.75rem',
        'lg': '1rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        'full': '9999px',
      },
      animation: {
        'fadeIn': 'fadeIn 0.6s ease-out',
        'slideUp': 'slideUp 0.5s ease-out',
        'slideInRight': 'slideInRight 0.3s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'ribbon-sway': 'ribbonSway 3s ease-in-out infinite',
        'sparkle': 'sparkle 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        ribbonSway: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
      },
    },
  },
  plugins: [],
}
