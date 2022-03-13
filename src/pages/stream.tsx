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
            src="https://control.resi.io/webplayer/video.html?id=8da28110-49b5-4486-90a7-c4b71457e86f"
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
          href="https://control.resi.io/webplayer/video.html?id=8da28110-49b5-4486-90a7-c4b71457e86f"
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
