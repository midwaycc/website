import styled from 'styled-components'
import { Link } from 'gatsby'

export default styled(Link)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: default;
  text-decoration: none;
  color: ${props => props.theme.header.color};
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`
