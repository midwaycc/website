import React from 'react'
import { SanityAudioFile } from '~/types/graphqlTypes'

type Props = {
  node?: SanityAudioFile
}

export function AudioFile({ node }: Props) {
  if (
    !node ||
    !node.audioFile ||
    !node.audioFile.asset ||
    !node.audioFile.asset.url ||
    !node.audioFile.asset.originalFilename
  ) {
    return null
  }

  const { url, originalFilename } = node.audioFile.asset

  return (
    <>
      <audio
        style={{ width: '100%', marginBottom: '1rem' }}
        controls
        src={url}
      />
      <a download={originalFilename} href={url}>
        Download
      </a>
    </>
  )
}
