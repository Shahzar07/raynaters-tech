import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#FAFAF8',
        'bg-alt': '#FFFFFF',
        'bg-sunken': '#F3F2EE',
        // Aliases kept so inner pages (case studies, resources, landing pages)
        // keep resolving while they share the same light surfaces.
        surface: '#FFFFFF',
        'surface-hover': '#F3F2EE',
        ink: '#121211',
        'ink-soft': '#1C1B19',
        border: '#E5E3DC',
        'border-strong': '#121211',
        'text-primary': '#121211',
        'text-secondary': '#4A4843',
        'text-muted': '#6E6B62',
        'text-on-ink': '#FAFAF8',
        accent: '#D3FBA3',
        'accent-ink': '#3D5A11',
        signal: '#C93A1B',
        success: '#2F8F4E',
      },
      fontFamily: {
        // Boldonse — used for the single biggest statement on a page only.
        display: ['var(--font-boldonse)', 'Impact', 'sans-serif'],
        sans: ['var(--font-jakarta)', 'system-ui', '-apple-system', 'sans-serif'],
      },
      maxWidth: {
        content: '1200px',
        grid: '1100px',
        text: '760px',
      },
      letterSpacing: {
        tightest: '-0.05em',
        display: '-0.05em',
      },
      fontSize: {
        // Boldonse needs loose leading — its caps fill the whole em box.
        'display-d': ['64px', { lineHeight: '1.32', letterSpacing: '-0.05em', fontWeight: '400' }],
        'display-m': ['30px', { lineHeight: '1.34', letterSpacing: '-0.04em', fontWeight: '400' }],
        // Plus Jakarta Sans 800, uppercase — the section-heading workhorse.
        'h2-d': ['48px', { lineHeight: '1.14', letterSpacing: '-0.05em', fontWeight: '800' }],
        'h2-m': ['30px', { lineHeight: '1.14', letterSpacing: '-0.04em', fontWeight: '800' }],
        'h3-d': ['30px', { lineHeight: '1.2', letterSpacing: '-0.04em', fontWeight: '800' }],
        'stat-d': ['128px', { lineHeight: '0.92', letterSpacing: '-0.05em', fontWeight: '800' }],
        'stat-m': ['72px', { lineHeight: '0.94', letterSpacing: '-0.05em', fontWeight: '800' }],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        'marquee-fast': 'marquee 30s linear infinite',
        'marquee-slow': 'marquee 60s linear infinite',
        'marquee-reverse': 'marquee-reverse 40s linear infinite',
        'marquee-reverse-slow': 'marquee-reverse 60s linear infinite',
        'fade-up': 'fade-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
    },
  },
  plugins: [],
};

export default config;
