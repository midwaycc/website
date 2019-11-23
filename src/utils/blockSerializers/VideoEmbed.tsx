import React, { useRef } from 'react'
import loadable from '@loadable/component'
import 'plyr/dist/plyr.css'

const Plyr = loadable(() => import('react-plyr'))

type Props = {
  node?: {
    videoId?: string
  }
}

export const VideoEmbed = ({ node }: Props) => {
  if (!node || !node.videoId || typeof document === 'undefined') {
    return null
  }

  return <PlyrEmbed videoId={node.videoId} type="vimeo" />
}

const PlyrEmbed = ({
  videoId,
  type
}: {
  videoId: string
  type: 'youtube' | 'vimeo'
}) => {
  const plyr = useRef<typeof Plyr & { player: { stop: () => void } }>(null)

  return (
    <Plyr
      ref={plyr}
      type={type}
      videoId={videoId}
      clickToPlay
      loop={{ active: true }}
      onSeeked={pos => {
        if (pos === 0 && plyr.current) {
          plyr.current.player.stop()
        }
      }}
      onEnd={() => alert('end')}
    />
  )
}
