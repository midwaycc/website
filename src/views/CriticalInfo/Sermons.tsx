import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { lighten } from 'polished'
import InfoWidget from './InfoWidget'

export default () => (
  <Container title="Sermons">
    <a href="http://midwaycc.sermon.net/" target="_blank">
      <Action>Tune In Live</Action>
    </a>
    <Link to="/sermons">
      <Action css="margin-top: 1em">Past Sermons</Action>
    </Link>
  </Container>
)

const Container = styled(InfoWidget)``

const Action = styled.button`
  font-family: ${props => props.theme.header.font};
  width: 14em;
  height: 3em;
  border-radius: 1.5em;
  background-color: ${props => props.theme.buttons.background};
  color: ${props => props.theme.buttons.color};
  padding: 1em;
  font-size: 1.2em;
  border: none;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.5);
  transition: box-shadow 150ms ease;

  :hover {
    box-shadow: 10px 10px 25px rgba(0, 0, 0, 0.5);
    background-color: ${props => lighten(0.05, props.theme.buttons.background)};
    transform: scale(1.02);
  }

  :active {
    box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.5);
    transform: scale(1);
  }
`
