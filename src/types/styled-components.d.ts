/// <reference types="styled-components/cssprop" />
import {
  FlattenInterpolation,
  ThemeProps,
  DefaultTheme
} from 'styled-components'

declare type CssProp =
  | string
  | FlattenInterpolation<ThemeProps<DefaultTheme>>
  | undefined
