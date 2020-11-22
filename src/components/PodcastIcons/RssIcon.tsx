import React from 'react'

// Copied from atp.fm
export const RssIcon = () => (
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
