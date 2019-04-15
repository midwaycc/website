import baseTheme from './0'
import { DefaultTheme } from 'styled-components'

const theme: DefaultTheme = {
  ...baseTheme,
  page: {
    ...baseTheme.page,
    background: '#edf2e1',
    color: '#151514'
  },
  header: {
    ...baseTheme.header,
    color: '#48504b',
    logo: 3
  },
  slideshow: {
    background: '#99936a',
    color: '#151514'
  },
  criticalInfo: {
    background: '#3d4e3e',
    color: '#edf2e1'
  },
  buttons: {
    background: '#48504b',
    color: '#edf2e1'
  }
}

export default theme
