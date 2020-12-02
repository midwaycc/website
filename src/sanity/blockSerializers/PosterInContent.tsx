import React from 'react'
import { Poster } from '~/components/Poster'
import { CaptionArea } from './Picture'
import { BoxSizeContainer, PERCENTS } from '~/utils/boxSizeHelpers'
import { SanityPosterInContent } from '~/types/graphqlTypes'
import { Align } from '~/types/align'
import { Size } from '~/types/size'

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
    <BoxSizeContainer $percentWidth={percentWidth} $align={align}>
      <Poster poster={poster} />
      {caption && <CaptionArea>{caption}</CaptionArea>}
    </BoxSizeContainer>
  )
}
