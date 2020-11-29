import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'
import media from '~/utils/media'
import { HeroSectionQuery } from '~/types/graphqlTypes'
import heroVideo from '~/../static/hero-optimized.mp4'
import { QuickLinksModal } from './QuickLinksModal'
import { SquareButton } from '~/components/SquareButton'

// TODO: ensure that all queries are at the top of files
// TODO: rename shortcuts => quickLinks
const QUERY = graphql`
  query HeroSection {
    sanityHeroSection {
      title
      subtitle
    }
    allSanityShortcuts(filter: { active: { eq: true } }) {
      nodes {
        _rawContent
      }
    }
  }
`

export function Hero() {
  const data: HeroSectionQuery = useStaticQuery(QUERY)
  if (!data.sanityHeroSection) return null

  const { sanityHeroSection, allSanityShortcuts } = data
  const { title, subtitle } = sanityHeroSection
  const activeShortcuts = allSanityShortcuts?.nodes || []
  const shortcutToUse = activeShortcuts.length ? activeShortcuts[0] : null

  return (
    <Container>
      <VideoContainer>
        <video autoPlay loop preload="" muted playsInline>
          <source src={heroVideo} type="video/mp4" />
        </video>
      </VideoContainer>
      <OverlayContainer>
        <HeroContent>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
          <QuickLinksModal quickLinks={shortcutToUse} />
          <div css="padding-top: 2em">
            <Link to="/new">
              <SquareButton
                dark
                thick
                backgroundColor="rgba(255, 255, 255, 0.5)"
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

const OverlayContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  color: ${props => props.theme.hero.color};
  background-color: rgba(0, 0, 0, 0.2);

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
