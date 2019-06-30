import styled, {
  css,
  AnyStyledComponent,
  StyledComponent,
  DefaultTheme
} from 'styled-components'

const styles = css`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: default;
  text-decoration: none;
  color: ${props => props.theme.header.color};
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`

export const FullText = styled.span`
  ${styles};
`

// For some reason, the way gatsby-plugin-netlify-cms is compiling
// our preview components prevents us from using gatsby-link directly.
// It seems to be a Babel issue, and just simply including a reference
// to `Link` causes a runtime error around styled-components. So in
// that environment, we use a simple anchor tag, and only require `Link`
// indirectly in production. Hopefully this can eventually be removed.

export let FullLink: AnyStyledComponent

if (typeof window !== 'undefined' && (window as any).CMS_MANUAL_INIT) {
  FullLink = styled.a`
    ${styles};
  `
} else {
  FullLink = styled(require('./IsolatedLink').Link)`
    ${styles};
  `
}
