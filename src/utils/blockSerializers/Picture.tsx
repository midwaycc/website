import React from 'react'
import styled, { css } from 'styled-components'
import Image from 'gatsby-image'
import media from '~/utils/media'
import { SanityPicture } from '~/types/graphqlTypes'

type Props = {
  node?: SanityPicture & {
    size?: Size
    align?: Align
  }
}

type Size = 'full' | 'large' | 'medium' | 'small' | 'tiny' | 'mini'
type Align = 'center' | 'left' | 'right'

const MAX_WIDTH = parseInt(media.xl.width)
const PERCENT_ARRAY = [15, 25, 100.0 / 3, 50, 200.0 / 3, 100]
const PERCENTS: Record<Size, number> = {
  full: 100,
  large: 200.0 / 3,
  medium: 50,
  small: 100.0 / 3,
  tiny: 25,
  mini: 15
}

export function Picture({ node }: Props) {
  if (!node || !node.image) return null

  const { image, size, align, caption } = node

  const { asset } = image
  if (!asset) return null

  const { url: src, metadata } = asset
  if (!src || !metadata) return null

  const { dimensions, lqip: base64 } = metadata
  if (!dimensions || !base64) return null

  const { aspectRatio, width: originalWidth } = dimensions
  if (!aspectRatio || !originalWidth) return null

  const percentWidth = PERCENTS[size || 'full']
  const width = MAX_WIDTH * (percentWidth / 100.0)
  const webp = '&fm=webp'
  const srcWebp = src + webp
  const srcSet = getSrcSet(src, width, originalWidth, aspectRatio)
  const srcSetWebp = getSrcSet(src, width, originalWidth, aspectRatio, webp)
  const sizes = `(max-width: ${width}px) 100vw, ${width}px`
  const fluid = { aspectRatio, base64, src, srcSet, srcWebp, srcSetWebp, sizes }

  return (
    <div css={getContainerStyles(percentWidth, align)}>
      <Image fluid={fluid} />
      {caption && <CaptionArea>{caption}</CaptionArea>}
    </div>
  )
}

const CaptionArea = styled.div`
  padding: 1em;
  color: white;
  text-align: center;
  font-style: italic;
  opacity: 0.8;
`

function getContainerStyles(percent: number, align?: Align) {
  const index = PERCENT_ARRAY.indexOf(percent)
  const maxIndex = PERCENT_ARRAY.length - 1

  return css`
    ${getCss(100, align)};

    ${media.sm} {
      ${getCss(PERCENT_ARRAY[Math.min(maxIndex, index + 2)], align)};
    }

    ${media.md} {
      ${getCss(PERCENT_ARRAY[Math.min(maxIndex, index + 1)], align)};
    }

    ${media.lg} {
      ${getCss(percent, align)};
    }
  `
}

function getCss(percent: number, align?: Align) {
  const common = css`
    width: ${percent}%;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
  `

  if (percent === 100) {
    return css`
      ${common};
      float: none;
      padding-left: 0;
      padding-right: 0;
    `
  }

  switch (align) {
    case 'left':
      return css`
        ${common};
        float: left;
        padding-right: 1em;
      `
    case 'right':
      return css`
        ${common};
        float: right;
        padding-left: 1em;
      `
    case 'center':
    default:
      return css`
        ${common};
        margin-left: auto;
        margin-right: auto;
      `
  }
}

function getSrcSet(
  src: string,
  width: number,
  originalWidth: number,
  aspectRatio: number,
  extra: string = ''
) {
  const height = Math.round(width / aspectRatio)
  const originalHeight = Math.round(originalWidth / aspectRatio)

  let srcSet = ''

  for (let w = 100; w <= width && w <= MAX_WIDTH; w += 100) {
    const h = Math.round(w / aspectRatio)
    srcSet += srcSetLine(src, w, h, extra)
  }

  srcSet += srcSetLine(
    src,
    Math.min(width, originalWidth),
    Math.min(height, originalHeight),
    extra
  )
  srcSet += srcSetLine(
    src,
    Math.max(width, originalWidth),
    Math.max(height, originalHeight),
    extra
  )

  return srcSet
}

function srcSetLine(src: string, width: number, height: number, extra: string) {
  return `${src}?w=${width}&h=${height}&fit=crop${extra} ${width}w,\n`
}
