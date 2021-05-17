module.exports = {
  purge: [],
  theme: {
    extend: {
      fontSize: {
        '7xl': '4.5rem'
      },
      colors: {
        'tana-black': '#161616',
      },
      fill: theme => theme('colors'),
      screens:{
        'sm-max': {'max': '640px'},
    }, 
    },
  fontFamily: {
    ces: ['cormorantgaramond-semibold','cormorant garamond','serif']
  },
  },

  variants: {},
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
  },
}
