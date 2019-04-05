import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    page: {
      background: string
    }
    header: {
      background: string
      height: number
    }
    fonts: {
      navigation: string
      headers: string
      body: string
    }
  }
}
