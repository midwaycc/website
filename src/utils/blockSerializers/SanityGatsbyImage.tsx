import React from 'react'
import { css } from 'styled-components'
import Image from 'gatsby-image'
import media from '~/utils/media'

type Props = {
  node: {
    _type: 'centerImage' | 'rightImage' | 'leftImage'
    asset: {
      url: string
      metadata: {
        lqip: string
        dimensions: {
          aspectRatio: number
          width: number
          height: number
        }
      }
    }
  }
}

const MAX_WIDTH = parseInt(media.xl.width)

export const SanityGatsbyImage = ({ node }: Props) => {
  const { asset, _type: imageType } = node
  const { url, metadata } = asset
  const { dimensions, lqip } = metadata
  const { aspectRatio, width } = dimensions

  let srcSet = ''

  for (let w = 100; w <= width && w <= MAX_WIDTH; w += 100) {
    srcSet += `${url}?w=${w}&h=${Math.round(w / aspectRatio)}&fit=crop ${w}w,\n`
  }

  const height = Math.round(width / aspectRatio)
  srcSet += `${url}?w=${width}&h=${height}&fit=crop ${width}w`

  return (
    <div
      css={css`
        margin: 0 auto;
        max-width: ${width};

        ${media.md} {
          margin: ${imageType === 'centerImage' ? '0 auto' : '1em'};
          max-width: ${imageType === 'centerImage' ? width : '50%'};
          width: ${imageType === 'centerImage' ? width : '50%'};
          float: ${imageType === 'leftImage'
            ? 'left'
            : imageType === 'rightImage'
            ? 'right'
            : 'none'};
        }
      `}
    >
      <Image
        fluid={{
          aspectRatio,
          base64: lqip,
          sizes:
            width < MAX_WIDTH
              ? `(max-width: ${width}px) 100vw, ${width}px`
              : `(max-width: ${MAX_WIDTH}px) 100vw, 1200px`,
          src: url,
          srcSet,
          srcWebp: url + '&fm=webp',
          srcSetWebp: srcSet.replace(/fit=crop/g, 'fit=crop&fm=webp')
        }}
      />
    </div>
  )
}
