module.exports = {
  purge: [],
  theme: {
    extend: {
      fontSize: {
        '7xl': '4.5rem'
      },
      colors: {
        'cel-green': '#16a085',
        'beach-green': '#7eb79d',
        'beach-sand': '#ffeead',
        'beach-red': '#ff6f69',
        'beach-sun': '#ffcc5c',
        'beach-green-flashy': '#88d8b0',
        'beach-grey': '#6d7090',
        'beach-black': '#262626',
        'tana-black': '#161616',
      },
      fill: theme => theme('colors'),
      screens:{
        'sm-max': {'max': '640px'},
    }, 
    height : {
      "bandeau": "25rem",
      "product" : "20rem"
    }
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
