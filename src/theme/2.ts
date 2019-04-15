import baseTheme from './0'
import { DefaultTheme } from 'styled-components'

const theme: DefaultTheme = {
  ...baseTheme,
  page: {
    ...baseTheme.page,
    background: '#eee',
    color: '#1a1919'
  },
  header: {
    ...baseTheme.header,
    color: '#1a1919',
    logo: 2
  },
  slideshow: {
    background: '#8dbb6a',
    color: '#2a3724'
  },
  criticalInfo: {
    background: '#2a3724',
    color: '#eee'
  },
  buttons: {
    background: '#8dbb6a',
    color: '#1a1919'
  }
}

export default theme
