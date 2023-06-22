/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "*.html",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
      colors: {
        'white': '#ffffff',
        'titulo': '#4E5150',
        'gray1': '#333333',
        'gray2': '#4f4f4f',
        'gray3': '#828282',
        'gray4': '#BDBDBD',
        'gray5': '#E0E0E0',
        'gray6': '#F2F2F2',
        'orange-bt': '#f2994a',
        'blue-bt': '#2F80ED',
        'rojo-bt': '#EB5757',
        'azul-oscuro': '#2F527B',
        'color_fuente_azul': '#6066D0',
        'boton-respuesta' : '#F9A826',
        'color-correcta': '#60BF88',
        'boton-repeat': '#1D355D',
        'color-puntaje': '#6fcf97',
        'fondo-clima': '#1E213A',
        'blanco-gris': '#E7E7EB',
        'texto-gris': '#A09FB1',
        'fondo-oscuro': '#100E1D',
        'fuente-footer-pais': '#88869D',
      },
      fontFamily: {
        'inconsolata' : ['Inconsolata', 'regular'],
        'spaceMono' : ['Space Mono', 'monospace'],
        'montserrat' : ['Montserrat', 'Bold'],
        'poppins' : ['Poppins', 'regular'],
        'poppins-Bold' : ['Poppins', 'Bold'],
        'raleway' : ['Raleway', 'Bold'],
      },
      width: {
        '150' : '758px',
        '128': '539px',
        '132': '589px',
        '140': '605px',
        '90' : '350px',
        '98' : '400px',
        '100' : '465px',
        '103' : '476px',
      },

      left: {
        '100' : '400px',
      },

      height: {
        '100': '515px',
        '105': '600px',
      },

      margin: {
        '100': '458px',
      },
      ma: {
        '128': '414px',
        '140': '465px',
        '150': '510px',

      },
      letterSpacing: {
        'widertest': '5px',
        'widestest' : '3px',
      },
      fontSize: {
        '10xl': ['100px', {
          lineHeight: '95px',
        }],
      },
  },
  plugins: [],
}

