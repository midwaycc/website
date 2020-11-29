import React from 'react'
import styled, { css } from 'styled-components'
import { SquareButton } from '~/components/buttons/SquareButton'

export const HeroButton = styled<
  React.FC<
    React.ComponentProps<typeof SquareButton> & {
      background: string
      hover: string
      border?: string
      secondaryBorder?: string
    }
  >
>(({ background, border, secondaryBorder, ...rest }) => (
  <SquareButton {...rest} />
))`
  margin-top: 2em;
  background-color: ${props => props.background};

  ${props => (props.border ? `border-color: ${props.border};` : '')}

  ${props =>
    props.border && props.secondaryBorder
      ? css`
          position: relative;

          ::after {
            content: ' ';
            pointer-events: none;
            position: absolute;
            z-index: 1;
            top: -5px;
            left: -5px;
            bottom: -5px;
            right: -5px;
            border: 2px solid ${props.secondaryBorder};
          }
        `
      : ''}

  :hover {
    background-color: ${props => props.hover};
  }
`
