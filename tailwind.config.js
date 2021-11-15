module.exports = {
  content: ["./public/**/*.html", "./src/**/*.vue"],
  theme: {
    extend: {
      animation: {
        'pendulum': '0.75s pendulum ease-in-out infinite',
        'idle-blink': '1s idle-blink step-start 0s infinite'
      },
      colors: {
        "linkedin": "#0077b5",
        "darcula": {
          50: '#F5F5F6',
          100: '#ECECEC',
          //200: '#CECFD0',
          200: '#DCDCDC',
          300: '#B1B2B3',
          400: '#77797A',
          500: '#3C3F41',
          600: '#36393B',
          700: '#242627',
          800: '#1B1C1D',
          900: '#121314',
        },
        'forest-green': {
          100: '#E9F3E9',
          200: '#C8E2C8',
          300: '#A7D1A7',
          400: '#64AE64',
          500: '#228B22',
          600: '#1F7D1F',
          700: '#145314',
          800: '#0F3F0F',
          900: '#0A2A0A',
        },
      },
      cursor: {
        'e-resize': 'e-resize'
      },
      fontSize: {
        '7xl': '5rem',
        '8xl': '6rem',
        '9xl': '7rem',
        '10xl': '8rem',
        '6vw': '6vw',
        '7vw': '7vw'
      },
      keyframes: {
        'pendulum': {
          '50%': { transform: 'translateY(-3px)' },
          '100%': { transform: 'translateY(0px)' }
        },
        'idle-blink': {
          '50%': {opacity: 0},
          'to': {opacity: 1}
        }
      },
      opacity: {
        '15': '.15'
      }
    },
    fontFamily: {
      fancy: ['Righteous', 'cursive'],
      body: ["Courier", "monospace"]
    },
  },
  variants: {
    animation: ['responsive', 'hover']
  },
  plugins: []
};
