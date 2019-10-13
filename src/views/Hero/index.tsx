import React from 'react'
import { Video } from 'cloudinary-react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import media from '~/utils/media'
import { HeroSectionQuery } from '~/types/graphqlTypes'

export default () => {
  const data: HeroSectionQuery = useStaticQuery(query)
  if (!data.sanityHeroSection) return null
  const { title, subtitle, video } = data.sanityHeroSection

  return (
    <Container>
      {video && video.asset && video.asset.url && (
        <VideoContainer>
          <Video
            autoPlay
            loop
            preload=""
            muted
            playsInline
            cloudName="ksmithbaylor"
            publicId={video.asset.url}
            progressive="true"
          />
        </VideoContainer>
      )}

      <OverlayContainer>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </OverlayContainer>
    </Container>
  )
}

const query = graphql`
  query HeroSection {
    sanityHeroSection {
      subtitle
      title
      video {
        asset {
          url
          size
        }
      }
    }
  }
`

const Container = styled.section`
  width: 100%;
  height: calc(100vh - ${props => props.theme.header.height}px - 7em);
  min-height: 480px;
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
  margin: 0 auto;
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  color: ${props => props.theme.hero.color};
  background-image: linear-gradient(
    90deg,
    rgba(10, 76, 77, 0.75) 0%,
    rgba(115, 134, 55, 0.7) 130%
  );

  & > * {
    max-width: ${media.xl.width};
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
