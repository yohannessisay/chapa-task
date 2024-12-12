const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './node_modules/vue-tailwind-datepicker/**/*.js'],
  theme: {
    extend: {
      colors: {
        'primary': '#F4F7FE',
        'vtd-primary': colors.sky,
        'vtd-secondary': colors.gray,
      },
    },
  },
  plugins: [ 
    require('@tailwindcss/typography'),
  ],
}
