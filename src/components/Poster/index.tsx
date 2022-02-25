import React from 'react'
import { CSSObject } from 'styled-components'
import { PosterSvg } from './PosterSvg'
import { SanityPoster } from '~/types/graphqlTypes'
import { DeepPartial } from '~/types/DeepPartial'

type Props = {
  poster: DeepPartial<SanityPoster>
  aspectRatio?: number
  className?: string
  style?: CSSObject
}

export function Poster({ poster, aspectRatio, className, style }: Props) {
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
    <PosterSvg
      key={poster._id}
      className={className}
      style={style}
      lines={linesToUse}
      imageUrl={url}
      aspectRatio={aspectRatio ?? width / height}
      size="full"
      align="left"
      fillColor={overlayColor ?? undefined}
      fillOpacity={overlayOpacity ?? undefined}
    />
  )
}
