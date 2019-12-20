import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled, { css } from 'styled-components'
import media from '~/utils/media'
import { HeroSectionQuery } from '~/types/graphqlTypes'
import heroVideo from '~/../static/hero-optimized.mp4'
import { SquareButton } from '~/components/SquareButton'

export default () => {
  const data: HeroSectionQuery = useStaticQuery(query)
  if (!data.sanityHeroSection) return null
  const { title, subtitle } = data.sanityHeroSection

  return (
    <Container>
      <VideoContainer>
        <video
          autoPlay
          loop
          preload=""
          muted
          playsInline
          poster={
            undefined
            //poster && poster.asset && poster.asset.url
            // ? poster.asset.url
            // : undefined
          }
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
      </VideoContainer>

      {/* <Faders /> */}

      <OverlayContainer>
        <HeroContent>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
          <Link to="/new">
            <SquareButton
              dark
              thick
              css={css`
                margin-top: 2em;
                background-color: rgba(255, 255, 255, 0.5);
                :hover {
                  background-color: white;
                }
              `}
            >
              New Here?
            </SquareButton>
          </Link>
        </HeroContent>
      </OverlayContainer>
    </Container>
  )
}

const query = graphql`
  query HeroSection {
    sanityHeroSection {
      subtitle
      title
    }
  }
`

const Container = styled.section`
  width: 100%;
  height: calc((100vw / 16) * 9);
  min-height: 720px;
  overflow: hidden;
  position: relative;
`

const VideoContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;

  video {
    min-height: 100%;
    min-width: 100%;
    margin-left: 50%;
    transform: translateX(-50%);
  }
`

const FADE_OVERLAP = 400
const Faders = styled.div`
  :before,
  :after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: calc(100vw/2 - 88.8889vh + ${props =>
      props.theme.header.height * 0.888889}px + ${FADE_OVERLAP}px);
    /* width: calc(
      100vw - ((100vh - ${props => props.theme.header.height}px) * 0.88888889)
    ); */
  }

  :before {
    left: 0;
    background-image: linear-gradient(to right, rgb(10, 76, 7) 0%, rgb(10, 76, 7) calc(100% - ${FADE_OVERLAP -
      10}px), rgba(0,0,0,0) 100%);
  }

  :after {
    right: 0;
    background-image: linear-gradient(to left, rgb(115, 134, 55) 0%, rgb(115, 134, 55) calc(100% - ${FADE_OVERLAP -
      10}px), rgba(0,0,0,0) 100%);
  }
`

const OverlayContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  color: ${props => props.theme.hero.color};
  background-image: linear-gradient(
    90deg,
    rgba(10, 76, 77, 0.5) 0%,
    rgba(115, 134, 55, 0.5) 130%
  );

  & > * {
    max-width: ${media.xl.width};
  }
`

const HeroContent = styled.div`
  width: 100%;
  /* height: calc(100vh - ${props => props.theme.header.height}px); */
  text-align: center;
  margin: 0 auto;

  :before {
    content: '';
    display: block;
    max-height: 10em;
    height: calc(20vh);
  }
`

const Title = styled.h1`
  margin: 0;
  font-family: ${props => props.theme.page.headerFont};
  font-size: 3em;
  text-align: center;

  ${media.md} {
    font-size: 4em;
  }

  ${media.lg} {
    font-size: 5em;
  }
`

const Subtitle = styled.p`
  max-width: calc(100vw - 4em);
  margin: 1em auto;
  font-size: 1.4em;

  ${media.sm} {
    font-size: 1.25em;
  }

  ${media.md} {
    font-size: 1.5em;
  }
`
