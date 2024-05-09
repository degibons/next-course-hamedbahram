/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: {
        default: '1rem',
        md: '1.5rem',
        lg: '2rem'
      }
    },
    extend: {
      fontFamily: {
        serif: ['var(--font-roboto-serif)']
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
