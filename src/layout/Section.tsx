import React from 'react'
import Content from './Content'
import styled from 'styled-components'
import theme from '~/theme'
import { CssProp } from '~/types/styled-components'

type Props = {
  // Anything that goes in the content area
  children: React.ReactNode
  // A styled(Section) applies its styles to the content
  className?: string
  // The background color for the section
  color?: string
  // CSS to apply to the inner content
  innerCss?: CssProp
  // CSS to apply to the outer container
  outerCss?: CssProp
}

export default ({
  children,
  className,
  color = theme.page.background,
  innerCss,
  outerCss
}: Props) => (
  <Container css={outerCss} color={color}>
    <Content className={className} css={innerCss}>
      {children}
    </Content>
  </Container>
)

const Container = styled.div<{ color: string }>`
  width: 100%;
  background-color: ${props => props.color};
`
