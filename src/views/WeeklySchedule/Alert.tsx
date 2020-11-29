import styled from 'styled-components'

export const Alert = styled.div`
  background-color: ${props => props.theme.colors.darkTeal.rgba(0.75)};
  margin: 1rem 0;
  border: 3px solid ${props => props.theme.colors.lime.hex};

  p {
    font-size: 1.2em;
    line-height: 1.4em;
    margin: 0;
  }

  p {
    margin-top: 1em;
  }
`
