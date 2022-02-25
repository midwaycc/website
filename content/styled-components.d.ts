import type {} from 'react'
import {
  FlattenInterpolation,
  CSSObject,
  ThemeProps,
  DefaultTheme
} from 'styled-components'

declare type CssProp =
  | string
  | CSSObject
  | FlattenInterpolation<ThemeProps<DefaultTheme>>

declare global {
  declare type InterpolatedCSS = FlattenInterpolation<ThemeProps<DefaultTheme>>
  namespace JSX {
    interface IntrinsicAttributes {
      css?: CssProp
    }
  }
}
