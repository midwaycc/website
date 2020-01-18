import React from 'react'
import styled from 'styled-components'
import { transparentize } from 'polished'

type Props = {
  children: React.ReactNode
  className?: string
  point?: 'left' | 'right'
  dark?: boolean
  thick?: boolean
}

export const SquareButton = ({
  point,
  dark = false,
  thick = false,
  children,
  className
}: Props) => {
  const left = point === 'left' ? <Arrow>&lsaquo;&nbsp;&nbsp;</Arrow> : null
  const right = point === 'right' ? <Arrow>&nbsp;&nbsp;&rsaquo;</Arrow> : null

  return (
    <Button className={className} dark={dark} thick={thick}>
      {left}
      {children}
      {right}
    </Button>
  )
}

const DARK_COLOR = 'rgb(35, 74, 77)'

const Button = styled.button<{ dark: boolean; thick: boolean }>`
  display: inline-block;
  background-color: rgba(255, 255, 255, 0);
  color: ${props => (props.dark ? DARK_COLOR : 'white')};
  border: ${props => (props.thick ? 3 : 2)}px solid
    ${props => (props.dark ? DARK_COLOR : 'white')};
  font-size: 1.25em;
  padding: 0.25em 2em;
  padding-bottom: 0.4em;
  text-transform: lowercase;
  font-variant: small-caps;
  user-select: none;
  ${props => (props.thick ? 'font-weight: bold' : '')};

  :hover {
    background-color: ${props =>
      props.dark
        ? DARK_COLOR.replace('rgb', 'rgba').replace(')', ',0.25)')
        : 'rgba(255,255,255,0.15)'};
  }
`

const Arrow = styled.span`
  display: inline-block;
  transform: scale(1.5) translateY(-0.05em);
`
