import React from 'react'
import styled from 'styled-components'
import media from '~/utils/media'

type Props = React.ComponentProps<typeof Container> & {
  title: string
  subtitle: string
}

export default ({ title, subtitle }: Props) => (
  <Container>
    <VideoContainer>
      <video autoPlay loop preload="" muted>
        <source
          src="https://res.cloudinary.com/ksmithbaylor/video/upload/v1558391645/hero-720.mp4"
          type="video/mp4"
        />
      </video>
    </VideoContainer>
    <OverlayContainer>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </OverlayContainer>
  </Container>
)

const Container = styled.section`
  width: 100%;
  height: 75vh;
  overflow: hidden;
  position: relative;
`

const VideoContainer = styled.div`
  width: 100%;
  position: absolute;
  top: -15vh;

  video {
    width: 100%;
  }
`

const OverlayContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  color: ${props => props.theme.slideshow.color};
  background-color: rgba(0, 0, 0, 0.25);

  & > * {
    max-width: ${media.xl.width};
  }
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
