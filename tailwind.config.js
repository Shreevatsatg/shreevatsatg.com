/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        neon: {
          pink: '#d8b4b9',
          blue: '#8fb5c1',
          purple: '#a5a9c6',
          green: '#94b0a9',
          yellow: '#e2c6a1',
        },
        glass: {
          light: 'rgba(255, 255, 255, 0.06)',
          dark: 'rgba(0, 0, 0, 0.15)',
          border: 'rgba(255, 255, 255, 0.12)',
          'border-dark': 'rgba(255, 255, 255, 0.04)',
        }
      },
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
        display: ['Clash Display', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern': `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'noise': "url('/noise.svg')",
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(3deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { filter: 'drop-shadow(0 0 8px var(--glow-primary))' },
          '50%': { filter: 'drop-shadow(0 0 18px var(--glow-secondary))' },
        },
        'pulse-neon': {
          '0%, 100%': { filter: 'drop-shadow(0 0 3px currentColor)' },
          '50%': { filter: 'drop-shadow(0 0 10px currentColor)' },
        },
        'morph': {
          '0%, 100%': { borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%' },
          '25%': { borderRadius: '30% 60% 70% 40%/50% 60% 30% 60%' },
          '50%': { borderRadius: '40% 60% 60% 40%/70% 30% 60% 40%' },
          '75%': { borderRadius: '40% 60% 70% 30%/50% 40% 60% 50%' },
        },
        'rotate-3d': {
          '0%, 100%': { transform: 'rotateX(0deg) rotateY(0deg)' },
          '50%': { transform: 'rotateX(5deg) rotateY(10deg)' },
        },
        'hue-rotate': {
          '0%, 100%': { filter: 'hue-rotate(0deg)' },
          '50%': { filter: 'hue-rotate(15deg)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 10s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
        'pulse-neon': 'pulse-neon 2s ease-in-out infinite',
        'morph': 'morph 10s linear infinite',
        'rotate-3d': 'rotate-3d 5s ease-in-out infinite',
        'hue-rotate': 'hue-rotate 10s linear infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      backdropBlur: {
        xs: '2px',
      },
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
        glow: '0 0 5px currentColor',
        neon: '0 0 8px currentColor, 0 0 16px currentColor',
      },
      boxShadow: {
        'neon': '0 0 5px currentColor, 0 0 10px currentColor',
        'neon-intense': '0 0 8px currentColor, 0 0 16px currentColor, 0 0 24px currentColor',
        'inner-light': 'inset 0 0 3px 0 rgba(255, 255, 255, 0.3)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.06)',
      },
      screens: {
        '3xl': '1920px',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-sm': {
          textShadow: '0 1px 2px var(--tw-shadow-color, rgba(0, 0, 0, 0.1))',
        },
        '.text-shadow': {
          textShadow: '0 2px 4px var(--tw-shadow-color, rgba(0, 0, 0, 0.2))',
        },
        '.text-shadow-lg': {
          textShadow: '0 8px 16px var(--tw-shadow-color, rgba(0, 0, 0, 0.3))',
        },
        '.text-shadow-glow': {
          textShadow: '0 0 5px currentColor',
        },
        '.text-shadow-neon': {
          textShadow: '0 0 8px currentColor, 0 0 16px currentColor',
        },
        '.text-gradient': {
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          '-webkit-text-fill-color': 'transparent',
        },
        '.perspective': {
          perspective: '1000px',
        },
        '.preserve-3d': {
          transformStyle: 'preserve-3d',
        },
        '.backface-hidden': {
          backfaceVisibility: 'hidden',
        },
      };
      addUtilities(newUtilities);
    },
  ],
}; 