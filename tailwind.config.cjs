/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      'orange-red': '#ff621a',
      'soft-yellow': '#fec548',
      'soft-orange-red': '#ffe4aa',
      'dark-gray': '#383838',
      'dark-gray-2': '#4d515a',
      'soft-blue': '#9cd3d1',
      'soft-red': '#fecbb4',
      'soft-gray-lighter': '#c5d39c',
      'soft-blue-2': '#94b6ff',
      trasparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      slate: colors.slate,
    },
  },
  plugins: [],
};
