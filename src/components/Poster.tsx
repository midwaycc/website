import React from 'react'
import styled from 'styled-components'
import { getContainerStyles } from '../utils/boxSizeHelpers'
import { SanityPoster } from '~/types/graphqlTypes'
import { DeepPartial } from '~/types/DeepPartial'
import { Size } from '~/types/size'
import { Align } from '~/types/align'

type Props = {
  poster: DeepPartial<SanityPoster>
}

export function Poster({ poster }: Props) {
  const { lines, overlayColor, overlayOpacity, background } = poster
  const { url, metadata } = background?.asset || {}
  const { width, height } = metadata?.dimensions || {}

  if (
    typeof url !== 'string' ||
    typeof width !== 'number' ||
    typeof height !== 'number'
  ) {
    return null
  }

  const linesToUse = (lines || [])
    .map(line => {
      const { text, fontSize, position } = line || {}
      if (
        !text ||
        typeof fontSize !== 'number' ||
        typeof position !== 'number'
      ) {
        return null
      }

      return { text, fontSize, position }
    })
    .filter(Boolean)

  return (
    <PosterRendered
      key={poster._id}
      lines={linesToUse}
      imageUrl={url}
      aspectRatio={width / height}
      size="full"
      align="left"
      fillColor={overlayColor ?? undefined}
      fillOpacity={overlayOpacity ?? undefined}
    />
  )
}

type Line = {
  fontSize: number
  text: string
  position: number
}

type RenderedProps = {
  lines?: Array<Line | null>
  size?: Size
  align?: Align
  imageUrl?: string
  aspectRatio?: number
  fillColor?: string
  fillOpacity?: number
}

const BASE_WIDTH = 200
const SHADOW_BLUR = 1
const SHADOW_OFFSET_X = 0.5
const SHADOW_OFFSET_Y = 0.5

function PosterRendered({
  lines = [],
  size = 'full',
  align = 'center',
  imageUrl,
  aspectRatio = 4 / 3,
  fillColor = 'transparent',
  fillOpacity = 0
}: RenderedProps) {
  const aspectHeight = BASE_WIDTH / aspectRatio

  return (
    <StyledSvg
      viewBox={`0 0 ${BASE_WIDTH} ${aspectHeight}`}
      // @ts-ignore
      css={getContainerStyles(size, align)}
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
      <text {...common} filter="url(#shadow)" fill="black">
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
