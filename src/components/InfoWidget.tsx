import React from 'react'
import styled, { css } from 'styled-components'

type Props = {
  title: string
  children: React.ReactNode
}

export default ({ title, children }: Props) => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: top;
      width: 33.333%;
      & > *:not(h2) + * {
        margin-top: 0.5em;
      }
    `}
  >
    <h2>{title}</h2>
    {children}
  </div>
)

// const Title = styled.h2`
//   font-weight: bold;
// `;
