import React from 'react'
import { css } from 'styled-components'
import Image from 'gatsby-image'
import media from '~/utils/media'

type PlainImage = {
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

type ImageWithWidth = {
  _type: 'centerImageWithWidth' | 'rightImageWithWidth' | 'leftImageWithWidth'
  image: PlainImage & {
    _type: 'image'
  }
  width: number
}

type Props = {
  node: PlainImage | ImageWithWidth
}

const MAX_WIDTH = parseInt(media.xl.width)

export const SanityGatsbyImage = ({ node }: Props) => {
  const [image, imageType, fixedWidth] = hasWidth(node)
    ? [node.image, node._type, node.width]
    : [node, node._type, undefined]
  if (!image) return null
  const { asset } = image
  if (!asset) return null
  const { url, metadata } = asset
  if (!metadata) return null
  const { dimensions, lqip } = metadata
  if (!dimensions) return null
  const { aspectRatio, width } = dimensions
  const widthToUse = fixedWidth || width

  let srcSet = ''

  for (let w = 100; w <= widthToUse && w <= MAX_WIDTH; w += 100) {
    srcSet += `${url}?w=${w}&h=${Math.round(w / aspectRatio)}&fit=crop ${w}w,\n`
  }

  const height = Math.round(widthToUse / aspectRatio)
  srcSet += `${url}?w=${widthToUse}&h=${height}&fit=crop ${widthToUse}w`

  return (
    <>
      <div
        css={css`
          margin: 0 auto;
          max-width: ${widthToUse}px;

          ${media.md} {
            margin: ${imageType.startsWith('centerImage') ? '0 auto' : '1em'};
            ${
              imageType.startsWith('leftImage')
                ? 'margin-left: 0; margin-top: 0.5em;'
                : imageType.startsWith('rightImage')
                ? 'margin-right: 0; margin-top: 0.5em;'
                : ''
            }
            max-width: ${
              imageType.startsWith('centerImage') ? '100%' : 'calc(50% - 1em)'
            };
            width: ${widthToUse}px;
            float: ${
              imageType.startsWith('leftImage')
                ? 'left'
                : imageType.startsWith('rightImage')
                ? 'right'
                : 'none'
            };
          }
        `}
      >
        <Image
          fluid={{
            aspectRatio,
            base64: lqip,
            sizes:
              widthToUse < MAX_WIDTH
                ? `(max-width: ${widthToUse}px) 100vw, ${widthToUse}px`
                : `(max-width: ${MAX_WIDTH}px) 100vw, 1200px`,
            src: url,
            srcSet,
            srcWebp: url + '&fm=webp',
            srcSetWebp: srcSet.replace(/fit=crop/g, 'fit=crop&fm=webp')
          }}
        />
      </div>
    </>
  )
}

function hasWidth(node: PlainImage | ImageWithWidth): node is ImageWithWidth {
  return node._type.endsWith('WithWidth')
}
