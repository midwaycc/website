import React from 'react'
import { Section } from '~/layout/Section'
import { Content } from '~/layout/Content'

export default function StreamPage() {
  return (
    <Section>
      <Content>
        <div
          style={{
            position: 'relative',
            overflow: 'hidden',
            paddingTop: '56.25%'
          }}
        >
          <iframe
            allow="autoplay; fullscreen"
            allowFullScreen
            src="https://control.resi.io/webplayer/video.html?type=event&id=d7c6d7a1-28f9-4bb7-80fe-8a7b6b80d173"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 'none'
            }}
          ></iframe>
        </div>
        <a
          href="https://control.resi.io/webplayer/video.html?type=event&id=d7c6d7a1-28f9-4bb7-80fe-8a7b6b80d173"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'block', paddingTop: '1rem', textAlign: 'center' }}
        >
          View on external player
        </a>
      </Content>
    </Section>
  )
}
