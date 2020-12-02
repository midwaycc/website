import React, { useState, useRef, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { PostTitle } from '~/components/PostSummary'
import { media } from '~/utils/media'

type ContainerProps = {
  $titleHeight?: number
  $big?: boolean
  $noHover?: boolean
}

type Props = ContainerProps & {
  className?: string
  children?: React.ReactNode
}

export function CardContainer({
  children,
  className,
  ...containerProps
}: Props) {
  const [titleHeight, setTitleHeight] = useState(0)
  const outer = useRef<HTMLDivElement>(null)

  useEffect(() => {
    ;(document as any).fonts.ready.then(() => {
      if (outer.current) {
        const titles = outer.current.querySelectorAll(PostTitle.toString())
        const heights = Array.prototype.map.call(
          titles,
          (title: Element) => title.clientHeight
        ) as number[]
        const maxHeight = Math.max(...heights)
        setTitleHeight(maxHeight)
      }
    })
  }, [])

  return (
    <Container
      ref={outer}
      className={className}
      $titleHeight={titleHeight}
      {...containerProps}
    >
      {children}
    </Container>
  )
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: 2em;

  ${PostTitle} {
    min-height: ${props => props.$titleHeight}px;
  }

  & > * {
    display: block;
    text-decoration: none;
    background-color: white;
    padding: 1em;
    color: black;
    box-shadow: 2px 5px 10px ${props => props.theme.colors.black.rgba(0.3)};

    ${props =>
      !props.$noHover &&
      css`
        :hover {
          background-color: ${props.theme.colors.grey0.hex};
        }
      `}

    width: 100%;
    margin-top: 1em;

    :first-of-type {
      margin-top: 0;
    }

    ${props => (props.$big ? media.md : media.sm)} {
      width: calc(50% - 0.5em);
      :nth-of-type(2) {
        margin-top: 0;
      }
      :nth-of-type(2n + 1) {
        margin-left: 0;
        margin-right: 0.5em;
      }
      :nth-of-type(2n + 2) {
        margin-left: 0.5em;
        margin-right: 0;
      }
    }

    ${props =>
      !props.$big &&
      css`
        ${media.lg} {
          width: calc(33.333% - 0.6666667em);

          :nth-of-type(3) {
            margin-top: 0;
          }
          :nth-of-type(3n + 1) {
            margin-left: 0;
            margin-right: 0.666667em;
          }
          :nth-of-type(3n + 2) {
            margin-left: 0.333333em;
            margin-right: 0.333333em;
          }
          :nth-of-type(3n + 3) {
            margin-left: 0.6666667em;
            margin-right: 0;
          }
        }

        ${media.xl} {
          width: calc(25% - 0.75em);

          :nth-of-type(4) {
            margin-top: 0;
          }
          :nth-of-type(4n + 1) {
            margin-left: 0;
            margin-right: 0.75em;
          }
          :nth-of-type(4n + 2) {
            margin-left: 0.25em;
            margin-right: 0.5em;
          }
          :nth-of-type(4n + 3) {
            margin-left: 0.5em;
            margin-right: 0.25em;
          }
          :nth-of-type(4n + 4) {
            margin-left: 0.75em;
            margin-right: 0;
          }
        }
      `}
  }
`
