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
    logo: 0
  },
  slideshow: {
    background: '#7ba088',
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
    background: '#dd9b6b',
    color: '#524637'
  }
}

export default theme
