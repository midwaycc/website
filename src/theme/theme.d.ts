import 'styled-components'
import { colors } from './colors'

type Color = string
type FontStack = string

export type Colors = {
  background: Color
  color: Color
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof colors
    page: Colors & {
      headerFont: FontStack
      bodyFont: FontStack
    }
    header: Colors & {
      shadow: string
      height: number
      font: FontStack
      logo: number | string
    }
    hero: Colors & {}
    criticalInfo: Colors & {}
    footer: Colors & {
      contactFields: string
      height: string
    }
    buttons: Colors & {}
  }
}
