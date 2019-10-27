import React from 'react'

type Props = {
  node?: {
    videoId?: string
  }
}

export const VideoEmbed = ({ node }: Props) => {
  if (!node || !node.videoId) {
    return null
  }

  return <YouTubeEmbed videoId={node.videoId} />
}

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
