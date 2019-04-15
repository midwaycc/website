import styled, { css } from 'styled-components'
import { Link } from 'gatsby'

const styles = css`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: default;
  text-decoration: none;
  color: ${props => props.theme.header.color};
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`

export const FullLink = styled(Link)`
  ${styles}
`

export const FullText = styled.span`
  ${styles}
`
