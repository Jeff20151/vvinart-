import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mingtc: ['Noto Serif TC', 'serif'],
      },
      colors: {
        accent: 'rgb(var(--accent-color) / <alpha-value>)',
        'accent-light': 'rgb(var(--accent-light) / <alpha-value>)',
        'accent-dark': 'rgb(var(--accent-dark) / <alpha-value>)',
        background: 'rgb(var(--background-rgb) / <alpha-value>)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
