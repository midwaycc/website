import React from 'react'
import styled from 'styled-components'
import media from '~/utils/media'

type Props = {
  title: string
  children: React.ReactNode[]
  className?: string
}

export default ({ title, children, className }: Props) => (
  <Container className={className}>
    <Title>{title}</Title>
    {children}
  </Container>
)

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: top;
  width: 100%;

  ${media.sm} {
    margin-top: 2em;
    width: 50%;
  }

  ${media.lg} {
    width: 33.333333%;
    margin-top: 0;
  }
`

const Title = styled.h2`
  font-family: ${props => props.theme.page.headerFont};
  font-size: 1.8em;
`
