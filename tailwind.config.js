/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  darkMode: 'class',
  theme: {
    screens: {
      'lg': {'max': '992px'},
      'md': {'max': '768px'},
      'sm': {'max': '480px'}
    },
    container: {
      padding: '20px',
      center: true
    },
    extend: {
      colors: {
        linghtBlack: '#4D4244',
        linghtRed: '#FF0D38',
        darkRed: '#D70026',
        lightGray: '0747474',
        darkGray: '#272727'
      },
      boxShadow: {
        'customred': '0px 0px 30px rgba(255, 13, 56, 0.21)'
      }
    },
  },
  plugins: [],
}

// в theme: { меняем базовые вещи полностью }
// в extend: { модернезироват }

// в screens: { меняем брек поинты для адаптива }
// в container: { сооьветственно }