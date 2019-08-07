import { DefaultTheme } from 'styled-components'

const theme: DefaultTheme = {
  page: {
    background: 'white',
    color: '#333',
    headerFont: "'Montserrat', 'Avenir', 'Lucida Grande', Arial, sans-serif",
    bodyFont: "'Open Sans', 'Avenir', 'Lucida Grande', Arial, sans-serif"
  },
  header: {
    background: 'white',
    color: '#524637',
    shadow: '0 0 15px rgba(0, 0, 0, 0.5)',
    font: "'Nunito', 'Avenir', 'Lucida Grande', Arial, sans-serif",
    height: 90,
    logo: 'final'
  },
  hero: {
    background: '#2B6667',
    color: 'white'
  },
  criticalInfo: {
    background: '#738637',
    color: 'white'
  },
  footer: {
    background: '#444',
    color: 'white'
  },
  buttons: {
    background: '#9fb94b',
    color: '#524637'
  }
}

export default theme
