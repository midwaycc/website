import React from 'react'
import styled from 'styled-components'
import { getContainerStyles } from '../../utils/boxSizeHelpers' // Avoid ~ alias for Sanity
import { Align } from '~/types/align'
import { Size } from '~/types/size'

type Props = {
  lines?: Array<Line | null>
  size?: Size
  align?: Align
  imageUrl?: string
  aspectRatio?: number
  fillColor?: string
  fillOpacity?: number
  className?: string
}

type Line = {
  fontSize: number
  text: string
  position: number
}

const BASE_WIDTH = 200
const SHADOW_BLUR = 1
const SHADOW_OFFSET_X = 0.5
const SHADOW_OFFSET_Y = 0.5

export function PosterSvg({
  lines = [],
  size = 'full',
  align = 'center',
  imageUrl,
  aspectRatio = 4 / 3,
  fillColor = 'transparent',
  fillOpacity = 0,
  className
}: Props) {
  const aspectHeight = BASE_WIDTH / aspectRatio

  return (
    <StyledSvg
      viewBox={`0 0 ${BASE_WIDTH} ${aspectHeight}`}
      // @ts-ignore The css prop has issues with styled svg elements, but is
      // still valid.
      css={getContainerStyles(size, align)}
      className={className}
    >
      <defs>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur
            stdDeviation={`${SHADOW_BLUR} ${SHADOW_BLUR}`}
            result="shadow"
          />
          <feOffset dx={SHADOW_OFFSET_X} dy={SHADOW_OFFSET_Y} />
        </filter>
      </defs>
      <rect x="0" y="0" width="100%" height="100%" fill="black" />
      {imageUrl && (
        <image href={imageUrl} x="0" y="0" height="100%" width="100%" />
      )}
      <rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        fill={fillColor}
        fillOpacity={fillOpacity / 100}
      />
      {lines.map((line, i) => (line ? <Line key={i} {...line} /> : null))}
    </StyledSvg>
  )
}

function Line({ fontSize, text, position }: Line) {
  const common = {
    x: '50%',
    y: position + '%',
    fontSize,
    textAnchor: 'middle',
    dominantBaseline: 'middle'
  }

  return (
    <>
      <text {...common} fill="black" filter="url(#shadow)">
        {text}
      </text>
      <text {...common} fill="white">
        {text}
      </text>
    </>
  )
}

const StyledSvg = styled.svg`
  width: 100%;

  text {
    font-family: brandon-grotesque;
    cursor: default;
    user-select: none;
  }
`
