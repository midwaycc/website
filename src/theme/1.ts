import baseTheme from './0'
import { DefaultTheme } from 'styled-components'

const theme: DefaultTheme = {
  ...baseTheme,
  page: {
    ...baseTheme.page,
    background: '#d8cfb3',
    color: '#373735'
  },
  header: {
    ...baseTheme.header,
    color: '#373735',
    logo: 1
  },
  slideshow: {
    background: '#3d4e3e',
    color: '#eee'
  },
  criticalInfo: {
    background: '#373735',
    color: '#d8cfb3'
  },
  buttons: {
    background: '#d8cfb3',
    color: '#373735'
  }
}

export default theme
