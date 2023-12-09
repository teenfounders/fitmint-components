import type { Config } from 'tailwindcss'
const plugin = require('tailwindcss/plugin')

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      scale: {
        '200': '2',
        '230':'2.3',
        '250': '2.5',
        '300': '3',
      },
    },
    fontFamily: {
        'oliver-regular': ['Oliver Regular', 'sans-serif'],
        'mono-sans': ['Mono Sans', 'sans-serif'],
         
    },
  },
  plugins: [],
}
export default config
