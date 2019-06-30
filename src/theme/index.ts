import { DefaultTheme } from 'styled-components'

const theme: DefaultTheme = {
  page: {
    background: '#eee',
    color: '#333',
    headerFont: "'Montserrat', 'Avenir', 'Lucida Grande', Arial, sans-serif",
    bodyFont: "'Nunito', 'Avenir', 'Lucida Grande', Arial, sans-serif"
  },
  header: {
    background: 'white',
    color: '#524637',
    shadow: '0 0 15px rgba(0, 0, 0, 0.5)',
    font: "'Nunito', 'Avenir', 'Lucida Grande', Arial, sans-serif",
    height: 90,
    logo: 'final'
  },
  slideshow: {
    background: '#52656A',
    color: 'white'
  },
  criticalInfo: {
    background: '#524637',
    color: 'white'
  },
  footer: {
    background: 'deeppink',
    color: 'white'
  },
  buttons: {
    background: '#9FBF7C',
    color: '#524637'
  }
}

export default theme
