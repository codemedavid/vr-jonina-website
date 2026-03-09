/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // IgorotaPepGlow - Elegant Feminine Wellness Theme
        'theme-bg': '#FFFFFF',           // Pure White
        'theme-text': '#2B2B2B',         // Dark Text

        // Primary Palette - Pink & Purple
        'brand': {
          DEFAULT: '#8E5FBF', // Primary Purple
          50: '#FDE7F3',      // Light Pink Background
          100: '#F5D5EA',
          200: '#E8B5D6',
          300: '#C9A6E8',     // Soft Lavender
          400: '#F48FB1',     // Elegant Pink
          500: '#8E5FBF',     // Primary Purple
          600: '#7A4FA8',
          700: '#6B4399',     // Deep Purple
          800: '#5A3780',
          900: '#482C68',
        },

        // Secondary & Neutral
        'charcoal': {
          DEFAULT: '#2B2B2B',
          50: '#F9F5FC',      // Soft Lavender Tint
          100: '#F0EAF5',
          200: '#E0D5EB',
          300: '#B0B0B0',
          400: '#858585',
          500: '#595959',
          600: '#4D4D4D',
          700: '#3D3D3D',
          800: '#2E2E2E',
          900: '#2B2B2B',     // Dark Text
        },

        // Backgrounds & Accents
        'cream': '#FFFFFF',
        'blush-light': '#FDE7F3', // Light Pink Background
        'warm-white': '#FDFAFD',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Playfair Display', 'serif'],
        serif: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.03)',
        'DEFAULT': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.02)',
        // Soft white card shadow
        'soft': '0 4px 20px rgba(0, 0, 0, 0.04), 0 2px 8px rgba(0, 0, 0, 0.02)',
        'luxury': '0 8px 30px rgba(0, 0, 0, 0.08), 0 4px 10px rgba(0, 0, 0, 0.04)',
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
        'float': 'float 6s ease-in-out infinite',
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
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
