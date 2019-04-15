import React from 'react'
import styled from 'styled-components'
import Section from '~/layout/Section'
import theme from '~/theme'
import media from '~/utils/media'

type Props = React.ComponentProps<typeof Container> & {
  title: string
  subtitle: string
}

export default ({ title, subtitle, ...sectionProps }: Props) => (
  <Container color={theme.slideshow.background} {...sectionProps}>
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
  color: ${props => props.theme.slideshow.color};
`

const Title = styled.h1`
  margin: 0;
  font-family: ${props => props.theme.page.headerFont};
  font-size: 3em;

  ${media.sm} {
    font-size: 4em;
  }

  ${media.md} {
    font-size: 5em;
  }
`

const Subtitle = styled.p`
  margin: 2em 0;
  max-width: calc(100% - 4em - 60px);
  text-align: center;
  /* font-size: 1.2em; */

  ${media.sm} {
    font-size: 1.25em;
  }

  ${media.md} {
    font-size: 1.5em;
  }
`

const Arrow = styled.span`
  border: 2px solid ${props => props.theme.slideshow.color};
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
