import { DefaultTheme } from 'styled-components'

export const theme: DefaultTheme = {
  page: {
    background: '#2B6667',
    color: '#eaeaea',
    headerFont:
      "'brandon-grotesque', 'Avenir', 'Lucida Grande', Arial, sans-serif",
    bodyFont: "'proxima-nova', 'Avenir', 'Lucida Grande', Arial, sans-serif"
  },
  header: {
    background: 'white',
    color: '#524637',
    shadow: '0 0 15px rgba(0, 0, 0, 0.5)',
    font: "'proxima-nova', 'Avenir', 'Lucida Grande', Arial, sans-serif",
    height: 90,
    logo: 'final'
  },
  hero: {
    background: '#2B6667',
    color: 'white'
  },
  criticalInfo: {
    // background: '#738637',
    background: '#2B6667',
    color: 'white'
  },
  footer: {
    background: 'rgb(35, 74, 77)',
    contactFields: 'rgb(116, 147, 147)',
    height: '16rem',
    color: 'white'
  },
  buttons: {
    background: '#9fb94b',
    color: '#524637'
  }
}
