import baseTheme from './1'
import { DefaultTheme } from 'styled-components'

const theme: DefaultTheme = {
  ...baseTheme,
  header: {
    ...baseTheme.header,
    logo: 5
  }
}

export default theme
