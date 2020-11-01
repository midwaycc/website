import React from 'react'
import styled from 'styled-components'

export function PodcastIcons() {
  return (
    <PodcastIconRow>
      <IconLink href="https://podcasts.apple.com/us/podcast/id1535569698">
        {applePodcastsIcon}
        <AppName>Apple Podcasts</AppName>
      </IconLink>
      <IconLink href="https://overcast.fm/itunes1535569698">
        {overcastIcon}
        <AppName>Overcast</AppName>
      </IconLink>
      <IconLink href="https://pca.st/itunes/1535569698">
        {pocketCastsIcon}
        <AppName>Pocket Casts</AppName>
      </IconLink>
      <IconLink href="https://castro.fm/itunes/1535569698">
        {castroIcon}
        <AppName>Castro</AppName>
      </IconLink>
      <IconLink href="/rss.xml">
        {rssIcon}
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

////////////////////////////////////////////////////////////////////////////////
// Copied from atp.fm

export const applePodcastsIcon = (
  <svg
    role="img"
    aria-label="Apple Podcasts"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 26 26"
  >
    <defs>
      <linearGradient
        id="apl_a"
        x1="13.08"
        y1=".5"
        x2="13.08"
        y2="25.66"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#F452FF" />
        <stop offset={1} stopColor="#832BC1" />
      </linearGradient>
    </defs>
    <path
      fillRule="evenodd"
      fill="url(#apl_a)"
      d="M25.16 22.31c-.24.62-.81 1.49-1.61 2.11-.46.36-1.01.7-1.77.92-.81.24-1.8.32-3.04.32H7.42c-1.24 0-2.24-.08-3.04-.32-.76-.22-1.31-.56-1.78-.92-.8-.62-1.36-1.49-1.61-2.11C.5 21.06.5 19.64.5 18.74V7.42c0-.9 0-2.32.49-3.57.25-.62.81-1.49 1.61-2.11.47-.36 1.02-.7 1.78-.92C5.18.58 6.18.5 7.42.5h11.32c1.24 0 2.23.08 3.04.32.76.22 1.31.56 1.77.92.8.62 1.37 1.49 1.61 2.11.49 1.25.5 2.67.5 3.57v11.32c0 .9-.01 2.32-.5 3.57zm0 0"
    />
    <path
      fill="#FFF"
      d="M14.9 14.96c-.37-.4-1.04-.65-1.82-.65s-1.45.25-1.82.65c-.2.21-.31.42-.34.73-.06.58-.03 1.09.04 1.9.07.77.19 1.8.36 2.85.11.74.21 1.14.29 1.43.14.47.66.88 1.47.88.81 0 1.33-.41 1.47-.88.08-.29.18-.69.29-1.43.17-1.05.29-2.08.36-2.85.07-.81.1-1.32.04-1.9-.04-.31-.14-.52-.34-.73zm-3.88-3.55c0 1.14.92 2.06 2.06 2.06 1.14 0 2.06-.92 2.06-2.06 0-1.13-.92-2.06-2.06-2.06-1.14 0-2.06.93-2.06 2.06zm2.04-8.12c-4.82.01-8.77 3.92-8.83 8.73-.04 3.91 2.45 7.24 5.92 8.47.09.03.17-.04.16-.13-.05-.31-.09-.61-.13-.91a.285.285 0 00-.18-.24c-2.75-1.2-4.67-3.96-4.63-7.15.04-4.19 3.46-7.61 7.65-7.64 4.28-.03 7.78 3.44 7.78 7.72 0 3.16-1.91 5.88-4.64 7.07-.1.04-.16.14-.18.24-.04.3-.08.6-.13.91-.01.09.08.16.16.13 3.44-1.22 5.92-4.5 5.92-8.35 0-4.89-3.98-8.87-8.87-8.85zm-.16 4.06c2.73-.11 4.98 2.08 4.98 4.79 0 1.38-.58 2.62-1.51 3.49-.08.08-.13.18-.12.29.02.33.01.65-.01 1.01-.01.1.1.16.18.11a5.918 5.918 0 002.59-4.9c0-3.35-2.78-6.06-6.16-5.92-3.14.12-5.65 2.7-5.69 5.84-.03 2.07 1.01 3.89 2.59 4.98.08.05.19-.01.18-.11-.02-.36-.03-.68-.01-1.01a.391.391 0 00-.11-.29c-.97-.9-1.56-2.19-1.52-3.62.07-2.51 2.09-4.57 4.61-4.66zm0 0"
    />
    <title>Apple Podcasts</title>
  </svg>
)

export const overcastIcon = (
  <svg
    role="img"
    aria-label="Overcast"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 26 26"
  >
    <defs>
      <linearGradient
        id="ocst_a"
        x1={13}
        y1="-.08"
        x2={13}
        y2="26.08"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#F93" />
        <stop offset={1} stopColor="#FF7833" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={13}
        y1="23.5"
        x2={13}
        y2="2.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#292E33" />
        <stop offset={1} stopColor="#434E59" />
      </linearGradient>
    </defs>
    <path
      fillRule="evenodd"
      fill="url(#ocst_a)"
      d="M25.01 22.17c-.25.62-.81 1.49-1.6 2.1-.46.35-1.01.69-1.76.91-.8.24-1.79.32-3.02.32H7.37c-1.22 0-2.22-.08-3.02-.32a5.28 5.28 0 01-1.76-.91c-.79-.61-1.35-1.48-1.59-2.1-.49-1.25-.5-2.65-.5-3.54V7.37c0-.89.01-2.29.5-3.53.24-.63.8-1.5 1.59-2.11A5.28 5.28 0 014.35.82C5.15.58 6.15.5 7.37.5h11.26c1.23 0 2.22.08 3.02.32.75.22 1.3.56 1.76.91.79.61 1.35 1.48 1.6 2.11.49 1.24.49 2.64.49 3.53v11.26c0 .89 0 2.29-.49 3.54zm0 0"
    />
    <circle fill="#FFF" cx={13} cy={13} r="9.5" />
    <path
      fillRule="evenodd"
      fill="url(#b)"
      d="M13 23.5C7.2 23.5 2.5 18.8 2.5 13S7.2 2.5 13 2.5 23.5 7.2 23.5 13 18.8 23.5 13 23.5zm0-4.13l.81-.81-.81-3.02-.81 3.02.81.81zm-1-.08l-.4 1.47.94-.93-.54-.54zm2 0l-.53.54.93.93-.4-1.47zm.73 2.73L13 20.29l-1.73 1.73h.01c1.14.22 2.3.22 3.43 0h.02zM13 3.82v-.01c-5.08 0-9.18 4.11-9.18 9.19 0 3.91 2.48 7.4 6.18 8.68l1.95-7.29c-.77-.58-.93-1.68-.34-2.45a1.73 1.73 0 012.44-.34 1.743 1.743 0 010 2.79l1.96 7.29H16c4.79-1.65 7.34-6.88 5.69-11.68A9.2 9.2 0 0013 3.81v.01zm0 0"
    />
    <path
      fillRule="evenodd"
      fill="#F93"
      d="M19 17.55l-.01.01a.66.66 0 01-.91.12h.01a.612.612 0 01-.16-.85l.02-.02.03-.05a6.752 6.752 0 00-.06-7.63l.03.06a.596.596 0 01.11-.85c.01-.01.02-.02.03-.02v-.01c.29-.2.69-.14.91.14a7.942 7.942 0 010 9.1zm-3.19-1.72h-.01a.75.75 0 01.04-1c.88-1.06.88-2.6 0-3.66a.763.763 0 01-.04-1.01h.01c.22-.26.61-.29.87-.07.02.01.04.03.05.05l.03.02a4.318 4.318 0 01-.06 5.73l.03-.03a.63.63 0 01-.89.02c0-.02-.02-.04-.03-.05zm-5.62 0c-.22.26-.61.3-.87.08-.02-.02-.04-.03-.05-.05l-.03-.03a4.318 4.318 0 01.06-5.73l-.03.04a.63.63 0 01.89-.02c0 .02.02.03.03.04h.01c.24.3.23.73-.04 1.01-.88 1.06-.88 2.6 0 3.66.27.28.28.71.04 1h-.01zm-2.28 1.86c-.29.2-.69.14-.91-.14a7.942 7.942 0 010-9.1l.01-.01c.21-.28.62-.33.91-.12h-.01c.28.19.35.58.15.85 0 .01 0 .01-.01.02l-.03.05a6.752 6.752 0 00.06 7.63l-.03-.06a.596.596 0 01-.14.87v.01zm0 0"
    />
    <title>Overcast</title>
  </svg>
)

export const pocketCastsIcon = (
  <svg
    role="img"
    aria-label="Pocket Casts"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 26 26"
  >
    <path
      fillRule="evenodd"
      fill="#F43E37"
      d="M9.21.5h7.57c2.51 0 3.77 0 5.11.42 1.49.54 2.64 1.7 3.18 3.18.43 1.35.43 2.6.43 5.11v7.57c0 2.51 0 3.77-.43 5.11a5.295 5.295 0 01-3.18 3.18c-1.34.43-2.6.43-5.11.43H9.21c-2.51 0-3.76 0-5.11-.43a5.295 5.295 0 01-3.18-3.18C.5 20.55.5 19.29.5 16.78V9.21C.5 6.7.5 5.45.92 4.1A5.32 5.32 0 014.1.92C5.45.5 6.7.5 9.21.5zm0 0"
    />
    <path
      fillRule="evenodd"
      fill="#FFF"
      d="M2.89 12.89c0-5.52 4.48-10 10-10s10 4.48 10 10h-2.5c0-4.14-3.36-7.5-7.5-7.5-4.14 0-7.5 3.36-7.5 7.5 0 4.14 3.36 7.5 7.5 7.5v2.5c-5.52 0-10-4.48-10-10zm10 6c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6h-2.18a3.82 3.82 0 10-3.82 3.82v2.18zm0 0"
    />
    <title>Pocket Casts</title>
  </svg>
)

export const castroIcon = (
  <svg
    role="img"
    aria-label="Castro"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 26 26"
  >
    <defs>
      <linearGradient
        id="cstr_a"
        x1={0}
        y1={0}
        x2={0}
        y2={26}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#00CCBF" />
        <stop offset={1} stopColor="#00B265" />
      </linearGradient>
      <linearGradient
        id="cstr_b"
        x1={2}
        y1={2}
        x2={2}
        y2={24}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#151515" />
        <stop offset={1} stopColor="#353535" />
      </linearGradient>
      <linearGradient
        id="cstr_c"
        x1="4.95"
        y1="4.92"
        x2="4.95"
        y2="19.46"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset=".3" stopColor="#FFF" />
        <stop offset={1} stopColor="#9CC0B7" />
      </linearGradient>
    </defs>
    <path
      fillRule="evenodd"
      fill="url(#cstr_a)"
      d="M9.21.5h7.57c2.51 0 3.77 0 5.11.42 1.49.54 2.64 1.7 3.18 3.18.43 1.35.43 2.6.43 5.11v7.57c0 2.51 0 3.77-.43 5.11a5.295 5.295 0 01-3.18 3.18c-1.34.43-2.6.43-5.11.43H9.21c-2.51 0-3.76 0-5.11-.43a5.295 5.295 0 01-3.18-3.18C.5 20.55.5 19.29.5 16.78V9.21C.5 6.7.5 5.45.92 4.1A5.32 5.32 0 014.1.92C5.45.5 6.7.5 9.21.5zm0 0"
    />
    <circle fill="url(#cstr_b)" cx={13} cy={13} r={11} />
    <path
      fillRule="evenodd"
      fill="url(#cstr_c)"
      d="M17.72 19.44l-1.9-2.62c1.19-.88 1.97-2.28 1.97-3.87a4.8 4.8 0 00-4.8-4.79c-2.64 0-4.79 2.15-4.79 4.79 0 1.59.78 3.01 1.98 3.88l-1.9 2.63a8.038 8.038 0 01-3.33-6.51c0-4.44 3.6-8.03 8.04-8.03 4.44 0 8.04 3.59 8.04 8.03 0 2.67-1.31 5.03-3.31 6.49zm-4.71-8.43a1.931 1.931 0 11-.002 3.862 1.931 1.931 0 01.002-3.862zm0 0"
    />
    <title>Castro</title>
  </svg>
)

export const rssIcon = (
  <svg
    role="img"
    aria-label="RSS"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 26 26"
  >
    <defs>
      <linearGradient
        id="rss_a"
        x1={13}
        y1="-.08"
        x2={13}
        y2="26.08"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#F93" />
        <stop offset={1} stopColor="#FF7833" />
      </linearGradient>
    </defs>
    <path
      fillRule="evenodd"
      fill="url(#rss_a)"
      d="M25.01 22.17c-.25.62-.81 1.49-1.6 2.1-.46.35-1.01.69-1.76.91-.8.24-1.79.32-3.02.32H7.37c-1.22 0-2.22-.08-3.02-.32a5.28 5.28 0 01-1.76-.91c-.79-.61-1.35-1.48-1.59-2.1-.49-1.25-.5-2.65-.5-3.54V7.37c0-.89.01-2.29.5-3.53.24-.63.8-1.5 1.59-2.11A5.28 5.28 0 014.35.82C5.15.58 6.15.5 7.37.5h11.26c1.23 0 2.22.08 3.02.32.75.22 1.3.56 1.76.91.79.61 1.35 1.48 1.6 2.11.49 1.24.49 2.64.49 3.53v11.26c0 .89 0 2.29-.49 3.54zm0 0"
    />
    <path fill="#FFF" d="M5 17c2.76 0 5 2.24 5 5H5v-5zm0 0" />
    <g stroke="#FFF" strokeWidth={3} strokeMiterlimit={10} fill="none">
      <path d="M4.75 12.5c5.38 0 9.75 4.37 9.75 9.75M4.75 6.5c8.7 0 15.75 7.05 15.75 15.75" />
    </g>
    <title>RSS</title>
  </svg>
)
