/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.{html,js,tsx,jsx}',
    './**/*.{html,js,tsx,jsx}',
    './*/**/*.{html,js,tsx,jsx}',
    ],
  theme:{
    extend: {
      colors: {
        blackLavender: '#121231',
        mainColor: '#7b3aff80', 
        mainColorLight: '#5050a8', 
        mainColorSelected: '#7b3aff',
        white: '#FFFFFF',
        black: '#000000'
      },
    },
  },
  plugins: [],
}

