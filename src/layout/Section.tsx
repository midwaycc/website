import React from 'react'
import Content from './Content'
import styled from 'styled-components'
import theme from '~/theme'

type Props = {
  // Anything that goes in the content area
  children?: React.ReactNode
  // The background color for the section
  color?: string
}

export default ({ children, color = theme.page.background }: Props) => (
  <Container color={color}>
    <Content css="padding: 2em 1em">{children}</Content>
  </Container>
)

const Container = styled.div<{ color: string }>`
  width: 100%;
  background-color: ${props => props.color};
`
