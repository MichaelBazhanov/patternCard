module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1920px',
      },
      backgroundImage: {
        'label': "url('./assets/images/label.svg')"
      }
    },
  },
  plugins: [],
}
