import React from 'react'
import styled from 'styled-components'

type Props = {
  title: string
  children: React.ReactNode[]
}

export default ({ title, children }: Props) => (
  <Container columns={children.length}>
    <Title>{title}</Title>
    {children}
  </Container>
)

const Container = styled.div<{ columns: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: top;
  width: ${props => 100 / props.columns}%;
`

const Title = styled.h2`
  font-size: 1.8em;
`
