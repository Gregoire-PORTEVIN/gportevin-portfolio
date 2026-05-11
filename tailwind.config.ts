import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Palette du portfolio
        ink: '#0A0A0A',          // Fond principal noir
        surface: '#121212',       // Cartes / surfaces
        surface2: '#1A1A1A',     // Surfaces secondaires
        line: '#262626',         // Bordures subtiles
        muted: '#737373',        // Texte secondaire
        soft: '#A3A3A3',         // Texte tertiaire
        bright: '#FAFAFA',       // Texte principal
        accent: '#FF5C39',       // Orange signature
        'accent-soft': '#FF8A6B',
      },
      fontFamily: {
        // Polices distinctives chargées via next/font dans layout.tsx
        sans: ['var(--font-display)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'marquee': 'marquee 40s linear infinite',
        'blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
