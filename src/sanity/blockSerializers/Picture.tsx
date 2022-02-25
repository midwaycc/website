import React from 'react'
import styled from 'styled-components'
import { GatsbyImage } from 'gatsby-plugin-image'
import { getGatsbyImageData } from 'gatsby-source-sanity'
import { ImageNode } from 'gatsby-source-sanity/lib/images/getGatsbyImageProps'
import { media } from '~/utils/media'
import {
  BoxSizeContainer,
  CropContainer,
  PERCENTS
} from '~/utils/boxSizeHelpers'
import { SanityPicture } from '~/types/graphqlTypes'
import { Align } from '~/types/align'
import { Size } from '~/types/size'

type Props = {
  node?: SanityPicture & {
    size?: Size
    align?: Align
  }
}

const SANITY_LOCATION = {
  projectId: 'iq9kxmf9',
  dataset: 'production'
}

const MAX_WIDTH = media.xl.pixelWidth

export function Picture({ node }: Props) {
  if (!node || !node.image || !node.image.asset) return null

  const { image, constrainAspectRatio, size, align, caption } = node
  const percentWidth = PERCENTS[size || 'full']
  const width = MAX_WIDTH * (percentWidth / 100.0)
  const gatsbyImageData = getGatsbyImageData(
    image as ImageNode,
    {
      width,
      layout: 'constrained'
    },
    SANITY_LOCATION
  )

  return !gatsbyImageData ? null : (
    <BoxSizeContainer $percentWidth={percentWidth} $align={align}>
      <CropContainer
        $constrainAspectRatio={constrainAspectRatio}
        $originalAspectRatio={gatsbyImageData.height / gatsbyImageData.width}
      >
        <div>
          <GatsbyImage
            alt={caption || 'image'}
            image={gatsbyImageData}
            style={{ display: 'block' }}
          />
        </div>
      </CropContainer>
      {caption && <CaptionArea>{caption}</CaptionArea>}
    </BoxSizeContainer>
  )
}

export const CaptionArea = styled.div`
  padding: 1em;
  color: white;
  text-align: center;
  font-style: italic;
  opacity: 0.8;
`
