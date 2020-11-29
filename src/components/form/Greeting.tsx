import styled from 'styled-components'

export const Greeting = styled.h4`
  text-transform: uppercase;
  color: ${props => props.theme.colors.lime.hex};
  margin: 0.5em 0;
`
