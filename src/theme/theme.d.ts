import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    header: {
      background: string
      height: number
    }
  }
}
