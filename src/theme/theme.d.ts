import 'styled-components'

type Color = string
type FontStack = string

export type Colors = {
  background: Color
  color: Color
}

declare module 'styled-components' {
  export interface DefaultTheme {
    page: Colors & {
      headerFont: FontStack
      bodyFont: FontStack
    }
    header: Colors & {
      height: number
      font: FontStack
      logo: number
    }
    slideshow: Colors & {}
    criticalInfo: Colors & {}
    footer: Colors & {}
    buttons: Colors & {}
  }
}
