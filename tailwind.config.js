/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1E213A',
        secondary: '#FFEC65',
        accent: '#6E707A',
        background: '#100E1D',
        'background-alt': '#585676',
        text: '#E7E7EB',
        'text-alt': '#A09FB1',
        link: '#3C47E9',
        // link: '#0066cc',
        success: '#00cc00',
        warning: '#ffcc00',
        error: '#ff0000',
        info: '#88869D'
      },
      backgroundImage: {
        'cloud-background': "url('./src/assets/Cloud-background.png')"
      },
      fontFamily: {
        raleway: 'Raleway, sans-serif'
      },
      gridTemplateColumns: {
        layout: 'repeat(auto-fit, minmax(min(120px, 100%), 1fr))',
        'layout-alt': 'repeat(auto-fit, minmax(min(500px, 100%), 1fr))'
      },
      boxShadow: {
        card: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
      }
    }
  },
  plugins: []
}
