/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        light1: '#F8F9FA',
        light2: '#DEE2E6',
        accent1: '#ADB5BD',
        accent2: '#6C757D',
        accent2_dark: '#495057',
        med_dark: '#343A40',
        dark: '#212529'
      },
    },
  },
  plugins: [],
}

