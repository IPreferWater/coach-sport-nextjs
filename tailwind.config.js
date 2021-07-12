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
        'tana-red-2': '#2ecc71',
        'tana-red-3': '#0C64FA',
        'tana-red-4': '#16a085',
        'tana-red-5': '#00B0E3',
        'tana-red-6': '#f368e0',
        
        
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
