import styled, { css } from 'styled-components'
import { lighten } from 'polished'
import { Link } from 'gatsby'

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
  width: 14em;
  height: 3em;
  border-radius: 1.5em;
  padding: 1em;
  font-size: 1.2em;
  border: none;

  ${buttonShadows};
  ${secondaryColorButton};
`

export const PillLink = styled(Link)<{ stacked?: boolean }>`
  color: white;
  background-color: #099799;
  text-decoration: none;
  text-align: center;
  display: ${props => (props.stacked ? 'block' : 'inline-block')};
  padding: 0.5em 1em;
  border-radius: 1.5em;
  flex-grow: 1;
`

const HORIZONTAL_SPACE = '0.75em'
const VERTICAL_SPACE = '0.75em'

export const PillLinkContainer = styled.div`
  margin-top: calc(-${VERTICAL_SPACE});
  margin-bottom: 1em;
  display: flex;
  flex-wrap: wrap;
  margin-left: -${HORIZONTAL_SPACE};

  ${PillLink} {
    margin-left: ${HORIZONTAL_SPACE};
    margin-top: ${VERTICAL_SPACE};
  }
`
