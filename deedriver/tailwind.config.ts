import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        snow: 'var(--snow)',
        frost: 'var(--frost)',
        mist: 'var(--mist)',
        cloud: 'var(--cloud)',
        white: 'var(--white)',
        obsidian: 'var(--obsidian)',
        granite: 'var(--granite)',
        stone: 'var(--stone)',
        slate: 'var(--slate)',
        pine: {
          DEFAULT: 'var(--pine)',
          lt: 'var(--pine-lt)',
          pale: 'var(--pine-pale)',
          ghost: 'var(--pine-ghost)',
        },
        gold: {
          DEFAULT: 'var(--gold)',
          lt: 'var(--gold-lt)',
          pale: 'var(--gold-pale)',
          ghost: 'var(--gold-ghost)',
        },
        timber: {
          DEFAULT: 'var(--timber)',
          lt: 'var(--timber-lt)',
          pale: 'var(--timber-pale)',
          ghost: 'var(--timber-ghost)',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['DM Sans', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
      borderRadius: {
        xs: 'var(--r-xs)',
        sm: 'var(--r-sm)',
        md: 'var(--r-md)',
        lg: 'var(--r-lg)',
        xl: 'var(--r-xl)',
        pill: 'var(--r-pill)',
      },
      transitionDuration: {
        fast: 'var(--t-fast)',
        base: 'var(--t-base)',
        slow: 'var(--t-slow)',
        reveal: 'var(--t-reveal)',
      },
    },
  },
  plugins: [],
};

export default config;
