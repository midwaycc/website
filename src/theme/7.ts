import baseTheme from './1'
import { DefaultTheme } from 'styled-components'

const theme: DefaultTheme = {
  ...baseTheme,
  header: {
    ...baseTheme.header,
    logo: 7
  },
  slideshow: {
    ...baseTheme.slideshow,
    background: '#52656A'
  }
}

export default theme
