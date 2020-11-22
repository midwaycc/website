import React from 'react'
import styled from 'styled-components'
import { ApplePodcastsIcon } from './ApplePodcastsIcon'
import { OvercastIcon } from './OvercastIcon'
import { PocketCastsIcon } from './PocketCastsIcon'
import { CastroIcon } from './CastroIcon'
import { RssIcon } from './RssIcon'

export function PodcastIcons() {
  return (
    <PodcastIconRow>
      <IconLink href="https://podcasts.apple.com/us/podcast/id1535569698">
        <ApplePodcastsIcon />
        <AppName>Apple Podcasts</AppName>
      </IconLink>
      <IconLink href="https://overcast.fm/itunes1535569698">
        <OvercastIcon />
        <AppName>Overcast</AppName>
      </IconLink>
      <IconLink href="https://pca.st/itunes/1535569698">
        <PocketCastsIcon />
        <AppName>Pocket Casts</AppName>
      </IconLink>
      <IconLink href="https://castro.fm/itunes/1535569698">
        <CastroIcon />
        <AppName>Castro</AppName>
      </IconLink>
      <IconLink href="/rss.xml">
        <RssIcon />
        <AppName>RSS</AppName>
      </IconLink>
    </PodcastIconRow>
  )
}

const PodcastIconRow = styled.div`
  display: flex;
`

const IconLink = styled.a`
  width: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;

  & + & {
    margin-left: 0.5rem;
  }

  svg {
    width: 3rem;
    height: 3rem;
  }
`

const AppName = styled.div`
  text-transform: lowercase;
  font-variant: small-caps;
  font-size: 0.8em;
  line-height: 1em;
  max-width: 100%;
  text-align: center;
  margin-top: 0.5em;
`
