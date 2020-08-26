import React, { HTMLAttributes } from 'react'
import styled from 'styled-components'

type Props = HTMLAttributes<HTMLDivElement> & {
  direction: 'up' | 'down' | 'left' | 'right'
  visible?: boolean
  color?: string
  background?: string
  size?: number
}

type ChevronProps = {
  size: number
  color: string
}

export function Arrow({
  direction,
  visible = true,
  color = 'white',
  background = 'black',
  size = 25,
  ...otherProps
}: Props) {
  const Chevron = arrows[direction]

  return (
    <Background
      $size={size}
      $background={background}
      $visible={visible}
      $direction={direction}
      {...otherProps}
    >
      <Chevron size={size} color={color} />
    </Background>
  )
}

const Background = styled.div<{
  $size: number
  $background: string
  $visible: boolean
  $direction: Props['direction']
}>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  visibility: ${props => (props.$visible ? 'visible' : 'hidden')};
  width: ${props => props.$size}px;
  height: ${props => props.$size}px;
  border-radius: 50%;
  background-color: ${props => props.$background};
  margin: 0 1em;
  cursor: pointer;
  user-select: none;
  transform: translateY(0.25em);

  & > * {
    margin-${props => props.$direction}: ${props => props.$size / -10}px;
  }
`

const Up = ({ color, size }: ChevronProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-chevron-up"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke={color}
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <polyline points="6 15 12 9 18 15" />
  </svg>
)

const Down = ({ color, size }: ChevronProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-chevron-down"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke={color}
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <polyline points="6 9 12 15 18 9" />
  </svg>
)

const Left = ({ color, size }: ChevronProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-chevron-left"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke={color}
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <polyline points="15 6 9 12 15 18" />
  </svg>
)

const Right = ({ color, size }: ChevronProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-chevron-right"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke={color}
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <polyline points="9 6 15 12 9 18" />
  </svg>
)

const arrows: Record<
  Props['direction'],
  (props: ChevronProps) => JSX.Element
> = {
  up: Up,
  down: Down,
  left: Left,
  right: Right
}
