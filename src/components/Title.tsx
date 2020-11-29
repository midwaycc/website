import styled, { css } from 'styled-components'
import { media } from '~/utils/media'

export const Title = styled.h1<{ $color?: string; $left?: boolean }>`
  color: ${props => props.$color || props.theme.colors.darkTeal.hex};
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 0;
  font-size: 2rem;

  ${media.sm} {
    font-size: 2.5rem;
  }

  ${props =>
    props.$left
      ? css`
          ${media.lg} {
            text-align: left;
          }
        `
      : ''};
`
