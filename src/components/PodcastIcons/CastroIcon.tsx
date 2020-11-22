import React from 'react'

// Copied from atp.fm
export const CastroIcon = () => (
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
