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
      shadow: string
      height: number
      font: FontStack
      logo: number | string
    }
    hero: Colors & {}
    criticalInfo: Colors & {}
    footer: Colors & {
      height: string
    }
    buttons: Colors & {}
  }
}
