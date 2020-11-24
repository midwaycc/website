import styled, { css } from 'styled-components'
import { lighten } from 'polished'

export const buttonShadows = css`
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

export const secondaryColorButton = css`
  background-color: ${props => props.theme.buttons.background};
  color: ${props => props.theme.buttons.color};
`

export const ActionButton = styled.button`
  font-family: ${props => props.theme.header.font};
  font-weight: 400;
  width: 14em;
  height: 3em;
  border-radius: 1.5em;
  padding: 1em;
  font-size: 1.2em;
  border: none;

  ${buttonShadows};
  ${secondaryColorButton};
`
