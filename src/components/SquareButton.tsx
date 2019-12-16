import styled from 'styled-components'

export const SquareButton = styled.button`
  background-color: rgba(255, 255, 255, 0);
  color: white;
  border: 2px solid white;
  font-size: 1.25em;
  padding: 0.25em 2em;
  padding-bottom: 0.4em;
  text-transform: lowercase;
  font-variant: small-caps;
  user-select: none;

  :hover {
    background-color: rgba(255, 255, 255, 0.15);
  }
`
