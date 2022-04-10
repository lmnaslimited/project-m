const { pink } = require('tailwindcss/colors')
const colors = require('tailwindcss/colors')
module.exports = {
  
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        DEFAULT: '-10px -10px 20px -10px',
      },

      colors: {
        emerald: colors.emerald,
        fuchsia: colors.fuchsia,
        pink: colors.pink,
        teal: colors.teal,
        lime: colors.lime,
        midnight: '#010724',
        'th-background': 'var(--background)',
        'th-background-secondary': 'var(--background-secondary)',
        'th-foreground': 'var(--foreground)',
        'th-primary-dark': 'var(--primary-dark)',
        'th-primary-medium': 'var(--primary-medium)',
        'th-primary-light': 'var(--primary-light)',
        'th-accent-dark': 'var(--accent-dark)',
        'th-accent-medium': 'var(--accent-medium)',
        'th-accent-light': 'var(--accent-light)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}