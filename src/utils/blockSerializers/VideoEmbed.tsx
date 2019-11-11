import React from 'react'
import loadable from '@loadable/component'
import 'plyr/dist/plyr.css'
// import '@vimeo/player

const Plyr = loadable(() => import('react-plyr'))

type Props = {
  node?: {
    videoId?: string
  }
}

export const VideoEmbed = ({ node }: Props) => {
  if (!node || !node.videoId) {
    return null
  }

  if (typeof document === 'undefined') {
    return <VimeoEmbed videoId={node.videoId} />
  }

  return <PlyrEmbed videoId={node.videoId} />
}

const PlyrEmbed = ({
  videoId,
  type = 'vimeo'
}: {
  videoId: string
  type: 'youtube' | 'vimeo'
}) => <Plyr type={type} videoId={videoId} autoplay />

const VimeoEmbed = ({ videoId }: { videoId: string }) => (
  <div css="padding:56.25% 0 0 0;position:relative;">
    <iframe
      src={`https://player.vimeo.com/video/${videoId}?autoplay=1&color=2B6667&title=0&byline=0&portrait=0`}
      css="position:absolute;top:0;left:0;width:100%;height:100%;"
      frameBorder="0"
      allow="autoplay; fullscreen"
      allowFullScreen
    ></iframe>
  </div>
)

const YouTubeEmbed = ({ videoId }: { videoId: string }) => (
  <div
    className="video"
    style={{
      position: 'relative',
      paddingBottom: '56.25%' /* 16:9 */,
      paddingTop: 25,
      height: 0
    }}
  >
    <iframe
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
      }}
      src={`https://www.youtube.com/embed/${videoId}?color=white&autoplay=1`}
      frameBorder="0"
    />
  </div>
)
