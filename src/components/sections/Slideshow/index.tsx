import React from 'react'
import styled from 'styled-components'
import Section from '~/layout/Section'

type Props = React.ComponentProps<typeof Container> & {
  color: string
  title: string
  subtitle: string
}

export default ({ title, subtitle, ...sectionProps }: Props) => (
  <Container {...sectionProps}>
    <Title>{title}</Title>
    <Subtitle>{subtitle}</Subtitle>
    <Arrow css="left: 1em">{'<'}</Arrow>
    <Arrow css="right: 1em">{'>'}</Arrow>
  </Container>
)

const Container = styled(Section)`
  width: 100%;
  height: 30em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`

const Title = styled.h1`
  font-family: ${props => props.theme.fonts.headers};
  margin: 0;
  color: white;
  font-size: 5em;
`

const Subtitle = styled.p`
  margin: 2em 0;
  color: white;
  font-size: 1.5em;
  max-width: 30em;
  text-align: center;
`

const Arrow = styled.span`
  border: 2px solid #c2c1a4;
  color: #c2c1a4;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  position: absolute;
  top: calc(50% - 15px);
  text-align: center;
  line-height: 25px;
  font-weight: bold;
  font-size: 1.5em;
  user-select: none;
  cursor: default;
`
