/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        navColor: '#CCCCA3',
        locationsColor: '#E5E0DB',
        stayColor: '#DE815D'
      },
      fontFamily:{
        PPFragment: ['PP Fragment', 'monospace'],
        PPMori: ['PP Mori', 'monospace']
      }
    },
  },
  plugins: [],
}

