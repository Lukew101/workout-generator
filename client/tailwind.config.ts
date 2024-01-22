import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'landing-page': "url('/geert-pieters-3RnkZpDqsEI-unsplash.jpg')"
      },
      colors: {
        primaryColor: '#DEE0E4',
        secondary: '#DEE0E4',
        accent: '#8F6449',
        background: '#293040'
      }  
    },
  },
  plugins: [],
}
export default config
