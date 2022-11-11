const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.tsx', './components/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['var(--font-jetbrainsmono)', ...fontFamily.mono],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
