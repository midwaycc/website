import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import media from '~/utils/media'

export default () => {
  const data = useStaticQuery(query)
  const { title, subtitle, video } = data.sanityHeroSection

  return (
    <Container>
      <OverlayContainer>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </OverlayContainer>
    </Container>
  )
}

const query = graphql`
  query {
    sanityHeroSection {
      subtitle
      title
      video {
        asset {
          url
        }
      }
    }
  }
`

const Container = styled.section`
  width: 100%;
  height: 70vh;
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
  color: ${props => props.theme.hero.color};
  background-color: ${props => props.theme.hero.background};

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
