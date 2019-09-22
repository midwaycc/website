import React from 'react'
import Image, { FluidObject } from 'gatsby-image'
import media from '~/utils/media'

type Props = {
  node: {
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

const MAX_WIDTH = media.xl.width

export const CenteredGatsbyImage = (props: Props) => {
  const { url, metadata } = props.node.asset
  const { dimensions, lqip } = metadata
  const { aspectRatio, width } = dimensions

  let srcSet = ''
  for (let w = 100; w <= width && w <= MAX_WIDTH; w += 100) {
    srcSet += `${url}?w=${w}&h=${Math.round(w / aspectRatio)}&fit=crop ${w}w,\n`
  }
  srcSet += `${url}?w=${width}&h=${Math.round(
    width / aspectRatio
  )}&fit=crop ${width}w`

  return (
    <Image
      style={{ margin: '0 auto', maxWidth: width }}
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
  )
}
