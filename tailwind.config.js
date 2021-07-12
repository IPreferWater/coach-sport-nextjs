module.exports = {
  purge: [],
  theme: {
    extend: {
      fontSize: {
        '7xl': '4.5rem'
      },
      colors: {
        'tana-black': '#161616',
        'tana-red': '#485460',
        'tana-red-2': '#889eb5',
        'tana-red-3': '#a8c4df',
        'tana-red-4': '#99a0a6',
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
