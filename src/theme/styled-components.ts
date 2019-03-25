import * as sc from 'styled-components'
import { ThemedStyledComponentsModule } from 'styled-components'
import theme from '.'

/* This file exists as a "front" to the real styled-components library. The
 * reason this is useful is that since we are using the theming features of
 * styled-components, it's nice to get type information about our theme in
 * every styled-component. So for every styled-component that's used, change
 *
 *     import styled from 'styled-components'
 *
 * to
 *
 *     import styled from '~/theme/styled-components'
 */

type Theme = typeof theme

const {
  default: styled,
  css,
  createGlobalStyle,
  withTheme,
  isStyledComponent,
  keyframes,
  ThemeProvider
} = sc as ThemedStyledComponentsModule<Theme>

export default styled
export {
  css,
  createGlobalStyle,
  withTheme,
  isStyledComponent,
  keyframes,
  ThemeProvider
}
