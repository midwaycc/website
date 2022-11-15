import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { SquareButton } from '~/components/SquareButton'
import { QuickLinksModal } from './QuickLinksModal'
import { media } from '~/utils/media'
import { colors } from '~/theme/colors'
import { HeroSectionQuery } from '~/types/graphqlTypes'

export function Hero() {
  const data: HeroSectionQuery = useStaticQuery(query)
  if (!data.sanityHeroSection) return null

  const { sanityHeroSection, sanityShortcuts } = data
  const { title, subtitle } = sanityHeroSection

  return (
    <Container>
      <VideoContainer>
        <video autoPlay loop preload="" muted playsInline>
          <source
            src="https://cdn.sanity.io/files/iq9kxmf9/production/75739849d8d6604a60cf62b7d6858db7d109b10f.mp4"
            type="video/mp4"
          />
        </video>
      </VideoContainer>
      <OverlayContainer>
        <HeroContent>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
          <QuickLinksModal quickLinks={sanityShortcuts} />
          <div style={{ paddingTop: '2em' }}>
            <Link to="/new">
              <SquareButton
                dark
                thick
                backgroundColor={colors.white.rgba(0.5)}
                hoverBackgroundColor="white"
              >
                New Here?
              </SquareButton>
            </Link>
          </div>
        </HeroContent>
      </OverlayContainer>
    </Container>
  )
}

const query = graphql`
  query HeroSection {
    sanityHeroSection {
      title
      subtitle
    }
    sanityShortcuts {
      _rawContent
    }
  }
`

const Container = styled.section`
  width: 100%;
  height: calc(100vh - 90px);
  overflow: hidden;
  position: relative;
`

const VideoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  video {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`

const OverlayContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  color: ${props => props.theme.hero.color};
  background-color: ${props => props.theme.colors.black.rgba(0.2)};

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
    height: calc(10vh);
  }
`

const Title = styled.h1`
  margin: 0;
  font-family: ${props => props.theme.page.headerFont};
  font-size: 3em;
  text-align: center;
  text-shadow: 3px 3px 8px black;

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
  text-shadow: 2px 2px 6px black;

  ${media.sm} {
    font-size: 1.25em;
  }

  ${media.md} {
    font-size: 1.5em;
  }
`
