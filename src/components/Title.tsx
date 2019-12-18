import styled, { css } from 'styled-components'
import media from '~/utils/media'

export const Title = styled.h1<{ color?: string; left?: boolean }>`
  color: ${props => props.color || 'rgb(35, 74, 77)'};
  text-transform: uppercase;
  text-align: center;

  ${props =>
    props.left
      ? css`
          ${media.lg} {
            text-align: left;
            margin-left: 0.5rem;
          }
        `
      : ''};
`
