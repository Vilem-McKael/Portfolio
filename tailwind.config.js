/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        light1: '#FFFF82',
        light2: '#F5F7DC',
        accent1: '#B5D99C',
        accent2: '#E65F5C',
        accent2_dark: '#D14F4A',
        med_dark: '#2B1142',
        dark: '#0F0326'
      },
    },
  },
  plugins: [],
}

