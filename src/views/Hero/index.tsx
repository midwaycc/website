import React, { useState } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled, { css } from 'styled-components'
import Modal from 'react-modal'
import media from '~/utils/media'
import RichContent from '~/sanity/RichContent'
import { HeroSectionQuery } from '~/types/graphqlTypes'
import heroVideo from '~/../static/hero-optimized.mp4'
import { SquareButton } from '~/components/SquareButton'
import X from '~/../static/images/x.svg'

if (typeof document !== 'undefined') {
  Modal.setAppElement(document.body)
}

const query = graphql`
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

export default () => {
  const [shortcutsOpen, setShortcutsOpen] = useState(false)
  const data: HeroSectionQuery = useStaticQuery(query)
  if (!data.sanityHeroSection) {
    return null
  }

  const {
    sanityHeroSection: { title, subtitle },
    allSanityShortcuts
  } = data
  const activeShortcuts = allSanityShortcuts
    ? allSanityShortcuts.nodes || []
    : []
  const shortcutToUse = activeShortcuts.length ? activeShortcuts[0] : null

  const closeShortcuts = () => setShortcutsOpen(false)

  return (
    <>
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
            {shortcutToUse && (
              <div>
                <HeroButton
                  thick
                  background="rgba(9, 151, 153, 0.5)"
                  hover="rgba(9, 151, 153, 1)"
                  border="rgb(35,74,77)"
                  secondaryBorder="white"
                  onClick={() => setShortcutsOpen(true)}
                >
                  Quick Links
                </HeroButton>
              </div>
            )}
            <div>
              <Link to="/new">
                <HeroButton
                  dark
                  thick
                  background="rgba(255, 255, 255, 0.5)"
                  hover="white"
                >
                  New Here?
                </HeroButton>
              </Link>
            </div>
          </HeroContent>
        </OverlayContainer>
      </Container>
      {shortcutToUse && (
        <Modal
          isOpen={shortcutsOpen}
          onRequestClose={closeShortcuts}
          closeTimeoutMS={300}
          style={{
            overlay: {
              zIndex: 4,
              backgroundColor: 'rgba(0,0,0,0.45)',
              pointerEvents: 'auto'
            },
            content: {
              width: 800,
              maxWidth: 'calc(100vw - 2rem)',
              maxHeight: 'calc(70vh)',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              overflow: 'hidden',
              border: '5px solid #9fb94b',
              borderRadius: 0,
              backgroundColor: '#2b6667',
              color: 'white',
              position: 'relative',
              padding: 0
            }
          }}
        >
          <Scroller>
            <RichContent
              css="padding-bottom: 2rem"
              blocks={shortcutToUse._rawContent || []}
            />
          </Scroller>
          <CloseButton onClick={closeShortcuts}>
            <img src={X} />
          </CloseButton>
        </Modal>
      )}
    </>
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

const HeroButton = styled<
  React.FC<
    React.ComponentProps<typeof SquareButton> & {
      background: string
      hover: string
      border?: string
      secondaryBorder?: string
    }
  >
>(({ background, border, secondaryBorder, ...rest }) => (
  <SquareButton {...rest} />
))`
  margin-top: 2em;
  background-color: ${props => props.background};

  ${props => (props.border ? `border-color: ${props.border};` : '')}

  ${props =>
    props.border && props.secondaryBorder
      ? css`
          position: relative;

          ::after {
            content: ' ';
            pointer-events: none;
            position: absolute;
            z-index: 1;
            top: -5px;
            left: -5px;
            bottom: -5px;
            right: -5px;
            border: 2px solid ${props.secondaryBorder};
          }
        `
      : ''}

  :hover {
    background-color: ${props => props.hover};
  }
`

const Scroller = styled.div`
  max-height: inherit;
  overflow: auto;
  padding: 1rem;
  padding-bottom: 0;
  text-align: center;
`

const CloseButton = styled.button`
  position: fixed;
  top: 0.75rem;
  left: 0.75rem;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
`
