import React, { useRef, RefAttributes } from 'react'
import loadable, { LoadableComponent } from '@loadable/component'
import 'plyr/dist/plyr.css'

type WithRef<T, R> = T extends LoadableComponent<infer P>
  ? LoadableComponent<P & RefAttributes<R>>
  : never
const Plyr = loadable(() => import('react-plyr'))
const PlyrWithRef = Plyr as WithRef<
  typeof Plyr,
  typeof Plyr & { player: { stop: () => void } }
>

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
    <PlyrWithRef
      ref={plyr}
      type={type}
      videoId={videoId}
      clickToPlay
      loop={{ active: true }}
      onSeeked={pos => {
        // This detects and avoids showing the Vimeo "staff picks" after the
        // video finishes
        if (pos === 0 && plyr.current) {
          plyr.current.player.stop()
        }
      }}
      onEnd={() => alert('end')}
    />
  )
}
