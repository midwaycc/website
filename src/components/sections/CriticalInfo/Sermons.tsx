import React from 'react'
import InfoWidget from './InfoWidget'
import styled from 'styled-components'
import { lighten } from 'polished'

export default () => (
  <InfoWidget title="Sermons">
    <Action>Tune In Live</Action>
    <Action>Past Sermons</Action>
  </InfoWidget>
)

const Action = styled.button`
  width: 14em;
  background-color: #dd9b6b;
  color: #524637;
  padding: 1em;
  font-size: 1.2em;
  border: none;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.5);
  transition: box-shadow 150ms ease, transform 150ms ease;

  :hover {
    box-shadow: 10px 10px 25px rgba(0, 0, 0, 0.5);
    background-color: ${lighten(0.05, '#dd9b6b')};
  }

  :active {
    box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.5);
  }

  & + & {
    margin-top: 1em;
  }
`
