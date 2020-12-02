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
  namespace JSX {
    interface IntrinsicAttributes {
      css?: CssProp
    }
  }
}
