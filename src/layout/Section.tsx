import React from 'react'
import Content from './Content'
import { css } from 'styled-components'
import theme from '~/theme'
import { CssProp } from '~/types/styled-components'

type Props = {
  children: React.ReactNode
  color?: string
  innerCss?: CssProp
  outerCss?: CssProp
}

export default ({
  children,
  color = theme.page.background,
  innerCss,
  outerCss
}: Props) => {
  const colorStyles = `background-color: ${color}`

  return (
    <div
      css={css`
        width: 100%;
        ${colorStyles};
        ${outerCss};
      `}
    >
      <Content
        css={css`
          ${colorStyles};
          ${innerCss};
        `}
      >
        {children}
      </Content>
    </div>
  )
}
