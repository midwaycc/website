import React from 'react'
import styled from 'styled-components'

type Props = {
  title: string
  children: React.ReactNode[]
}

export default ({ title, children }: Props) => (
  <Container>
    <Title>{title}</Title>
    {children}
  </Container>
)

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: top;
`

const Title = styled.h2`
  font-size: 1.8em;
`
