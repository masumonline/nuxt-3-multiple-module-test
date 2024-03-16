/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [],
  theme: {
    extend: {
      colors: {
        customPrimary: {
          50: '#F8F4EB',
          100: '#F3EBDB',
          200: '#E9DABD',
          300: '#DFC99E',
          400: '#D1B274',
          500: '#C39A4A',
          600: '#A07C35',
          700: '#765B27',
          800: '#4C3A19',
          900: '#211A0B',
          950: '#0C0A04',
        },
        customGray: {
          50: '#FFFFFF',
          100: '#F5F7F9',
          200: '#DCE2E9',
          300: '#C3CED9',
          400: '#AABAC9',
          500: '#91A6B9',
          600: '#7891A9',
          700: '#617D98',
          800: '#51697F',
          900: '#415466',
          950: '#364655',
        },
        mexicanRed: {
          50: '#F8EBE4',
          100: '#F2D7CC',
          200: '#E5AC9C',
          300: '#D87B6C',
          400: '#CB463B',
          500: '#9F2A2A',
          600: '#83232A',
          700: '#661B26',
          800: '#4A1420',
          900: '#2E0C16',
          950: '#2E0C10',
        },
        ceruleanBlue: {
          50: '#edf9ff',
          100: '#d6efff',
          200: '#b6e5ff',
          300: '#85d6ff',
          400: '#4bbeff',
          500: '#229dff',
          600: '#0a7eff',
          700: '#0466f1',
          800: '#0a4fbd',
          900: '#0f4899',
          950: '#0f2d5c',
        }
      }
    },
  },
  plugins: [],
}