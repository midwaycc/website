import React from 'react'

type Props = {
  color?: string
  curveAmount?: number
  pinBottom?: number
  centerSize?: number
  className?: string
}

export const MapPin = ({
  color = '#5aa7a9',
  curveAmount = 110,
  pinBottom = 165,
  centerSize = 35,
  className
}: Props) => (
  <svg
    className={className}
    viewBox={`0 0 120 ${pinBottom}`}
    width="120"
    height={pinBottom}
  >
    <mask id="center-circle">
      <rect fill="white" x="0" y="0" width="120" height={pinBottom} />
      <circle cx="60" cy="60" r={centerSize} fill="black" />
    </mask>
    <circle cx="60" cy="60" r="60" fill="#5aa7a9" mask="url(#center-circle)" />
    <path
      d={`M 0 60
            C 0 ${curveAmount}, 60 ${pinBottom}, 60 ${pinBottom}
            C 60 ${pinBottom}, 120 ${curveAmount}, 120 60
            Z
        `}
      fill={color}
      mask="url(#center-circle)"
    />
  </svg>
)
