import { Link } from 'gatsby'
import styled from 'styled-components'

export default styled(Link)<{ stacked?: boolean }>`
  color: white;
  background-color: #099799;
  text-decoration: none;
  text-align: center;
  display: ${props => (props.stacked ? 'block' : 'inline-block')};
  width: 8em;
  padding: 0.5em 0;
  border-radius: 1.5em;

  & + & {
    margin-${props => (props.stacked ? 'top' : 'left')}: 1em;
  }
`
