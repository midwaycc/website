import React from 'react'
import { SanityPosterInContent } from '~/types/graphqlTypes'
import { Align } from '~/types/align'
import { Size } from '~/types/size'
import { getContainerStyles, PERCENTS } from '~/utils/boxSizeHelpers'
import { Poster } from '~/components/Poster'
import { CaptionArea } from './Picture'

type Props = {
  node?: SanityPosterInContent & {
    size?: Size
    align?: Align
  }
}

export function PosterInContent({ node }: Props) {
  if (!node || !node.poster) return null

  const { poster, size, align, caption } = node
  const percentWidth = PERCENTS[size || 'full']

  return (
    <div css={getContainerStyles(percentWidth, align)}>
      <Poster poster={poster} />
      {caption && <CaptionArea>{caption}</CaptionArea>}
    </div>
  )
}
