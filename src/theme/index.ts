import { DefaultTheme } from 'styled-components'
import { colors } from './colors'

export const theme: DefaultTheme = {
  colors,
  page: {
    background: colors.mediumTeal.hex,
    color: colors.grey1.hex,
    headerFont:
      "'brandon-grotesque', 'Avenir', 'Lucida Grande', Arial, sans-serif",
    bodyFont: "'proxima-nova', 'Avenir', 'Lucida Grande', Arial, sans-serif"
  },
  header: {
    background: colors.white.hex,
    color: colors.brown.hex,
    shadow: `0 0 15px ${colors.black.rgba(0.5)}`,
    font: "'proxima-nova', 'Avenir', 'Lucida Grande', Arial, sans-serif",
    height: 90,
    logo: 'final'
  },
  hero: {
    background: colors.mediumTeal.hex,
    color: colors.white.hex
  },
  criticalInfo: {
    background: colors.mediumTeal.hex,
    color: colors.white.hex
  },
  footer: {
    background: colors.darkTeal.hex,
    contactFields: colors.lightTeal.hex,
    height: '16rem',
    color: colors.white.hex
  },
  buttons: {
    background: colors.lime.hex,
    color: colors.brown.hex
  }
}
