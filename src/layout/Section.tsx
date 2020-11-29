import React from 'react'
import styled from 'styled-components'
import theme from '~/theme'

type Props = {
  className?: string
  children?: React.ReactNode
  color?: string // The background color for the section
}

export default ({
  className,
  children,
  color = theme.page.background
}: Props) => (
  <Container className={className} $color={color}>
    {children}
  </Container>
)

const Container = styled.div<{ $color: string }>`
  width: 100%;
  background-color: ${props => props.$color};
  padding: 2em 0;
`
