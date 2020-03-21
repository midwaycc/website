import styled from 'styled-components'

export const Alert = styled.div`
  background-color: rgba(35, 74, 77, 0.75);
  margin: 1rem;
  padding: 1rem;
  border: 3px solid #9fb94b;

  p {
    font-size: 1.2em;
    line-height: 1.4em;
    margin: 0;
  }

  p + p {
    margin-top: 1em;
  }
`
