import React from 'react'
import styled, { css } from 'styled-components'
import BlockContent from '@sanity/block-content-to-react'
import { Parallax } from 'react-parallax'
import Content from '~/layout/Content'
import { getSerializers } from '~/sanity/serializers'
import { SanityContentSection } from '~/types/graphqlTypes'

type Props = {
  node?: SanityContentSection
}

const serializers = getSerializers({ BlockContent, nested: true })

export function ContentSection(props: Props) {
  const { node } = props
  if (!node) return null

  const {
    content = [],
    verticalPadding,
    textColor,
    backgroundImage,
    backgroundColor,
    backgroundOpacity,
    backgroundBlurStrength,
    backgroundParallax
  } = node

  const renderedContent = (
    <Content>
      <BlockContent blocks={content} serializers={serializers} />
    </Content>
  )

  const backgroundImageUrl = backgroundImage?.asset?.url

  if (!backgroundImageUrl) {
    return (
      <Container {...{ verticalPadding, backgroundColor, textColor }}>
        {renderedContent}
      </Container>
    )
  }

  return (
    <Parallax
      bgImage={backgroundImageUrl}
      strength={backgroundParallax ? 600 : 0}
      blur={backgroundBlurStrength || 0}
      renderLayer={
        backgroundColor
          ? () => (
              <div
                css={css`
                  background-color: ${backgroundColor};
                  opacity: ${typeof backgroundOpacity === 'number'
                    ? backgroundOpacity / 100
                    : 0};
                  width: 100%;
                  height: 100%;
                  position: absolute;
                `}
              />
            )
          : undefined
      }
    >
      <Container {...{ verticalPadding, textColor }}>
        {renderedContent}
      </Container>
    </Parallax>
  )
}

const Container = styled.div<{
  backgroundColor?: string | null
  textColor?: string | null
  verticalPadding?: number | null
}>`
  color: ${props => props.textColor || 'unset'};
  background-color: ${props => props.backgroundColor || 'transparent'};
  padding: ${props => props.verticalPadding || 0}rem 0;
`
