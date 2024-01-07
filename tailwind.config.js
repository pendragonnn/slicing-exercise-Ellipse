/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily : {
        montserrat: ['Monstserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif']
      },
      colors: {
        brand: '#FF6525',
        text: {
          "500": '#1C1C1C',
          "200": '#212838',
          "400": '#373737'
        },
        green: '#E3EBD6',
        background: '#FAF8F4'
      }
    },
  },
  plugins: [],
}
