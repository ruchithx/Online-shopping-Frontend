import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        VibrantRed: '#FF6B6B',
        GoldenYellow: '#FFD93D',
        Green: '#4CAF50',
        SoftWhite: '#F4F4F9',
        DeepGray: '#1A202C',
        Gray: '#ADADAD',
      },
    },
  },
  plugins: [],
};
export default config;
