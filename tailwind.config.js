/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0a0708',
        noir: '#120c0e',
        charcoal: '#1b1517',
        smoke: '#2a2225',
        wine: '#4a1220',
        burgundy: '#6e1b2e',
        plum: '#2d1426',
        gold: { DEFAULT: '#c6a26b', soft: '#d9bf92', deep: '#9c7a45' },
        cream: { DEFAULT: '#f2e9da', dim: '#bfb3a3', mute: '#8c8178' },
        whatsapp: '#25d366',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        urdu: ['"Noto Nastaliq Urdu"', '"Jameel Noori Nastaleeq"', 'serif'],
      },
      letterSpacing: { luxe: '0.32em' },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
        drift: { '0%': { transform: 'translate3d(-4%,0,0) scale(1)' }, '100%': { transform: 'translate3d(4%,-3%,0) scale(1.08)' } },
        pulseGlow: { '0%,100%': { opacity: '.55' }, '50%': { opacity: '.85' } },
        scrollDot: { '0%': { transform: 'translateY(0)', opacity: '0' }, '30%': { opacity: '1' }, '100%': { transform: 'translateY(14px)', opacity: '0' } },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        drift: 'drift 22s ease-in-out infinite alternate',
        glow: 'pulseGlow 6s ease-in-out infinite',
        scrollDot: 'scrollDot 2.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
