import { DefaultTheme } from 'styled-components'

const theme: DefaultTheme = {
  page: {
    background: '#eee',
    color: '#333',
    headerFont: "'Montserrat', 'Avenir', 'Lucida Grande', Arial, sans-serif",
    bodyFont: "'Nunito', 'Avenir', 'Lucida Grande', Arial, sans-serif"
  },
  header: {
    background: '#2a3a4a',
    color: '#ddd',
    shadow: '0 0 15px rgba(0, 0, 0, 0.5)',
    font: "'Nunito', 'Avenir', 'Lucida Grande', Arial, sans-serif",
    height: 70,
    logo: 1
  },
  slideshow: {
    background: '#294C40',
    color: '#eee'
  },
  criticalInfo: {
    background: '#0A3123',
    color: '#eee'
  },
  footer: {
    background: 'deeppink',
    color: 'white'
  },
  buttons: {
    background: '#725C3D',
    color: '#222'
  }
}

export default theme
