import React from 'react'
import styled, { css } from 'styled-components'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode
  className?: string
  point?: 'left' | 'right'
  dark?: boolean | null
  thick?: boolean | null
  backgroundColor?: string
  hoverBackgroundColor?: string
  borderColor?: string
  secondaryBorderColor?: string
}

export const SquareButton = ({
  children,
  className,
  point,
  dark = false,
  thick = false,
  backgroundColor,
  hoverBackgroundColor,
  borderColor,
  secondaryBorderColor,
  ...buttonProps
}: Props) => {
  const left = point === 'left' ? <Arrow>&lsaquo;&nbsp;&nbsp;</Arrow> : null
  const right = point === 'right' ? <Arrow>&nbsp;&nbsp;&rsaquo;</Arrow> : null

  return (
    <Button
      className={className}
      $dark={dark}
      $thick={thick}
      $backgroundColor={backgroundColor}
      $hoverBackgroundColor={hoverBackgroundColor}
      $borderColor={borderColor}
      $secondaryBorderColor={secondaryBorderColor}
      {...buttonProps}
    >
      {left}
      {children}
      {right}
    </Button>
  )
}

const Arrow = styled.span`
  display: inline-block;
  transform: scale(1.5) translateY(-0.05em);
`

const DARK_COLOR = 'rgb(35, 74, 77)'

const Button = styled.button<{
  $dark?: boolean | null
  $thick?: boolean | null
  $backgroundColor?: string
  $hoverBackgroundColor?: string
  $borderColor?: string
  $secondaryBorderColor?: string
}>`
  display: inline-block;
  background-color: ${props =>
    props.$backgroundColor || 'rgba(255, 255, 255, 0)'};
  color: ${props => (props.$dark ? DARK_COLOR : 'white')};
  border: ${props => (props.$thick ? 3 : 2)}px solid
    ${props => props.$borderColor || (props.$dark ? DARK_COLOR : 'white')};
  font-size: 14px;
  padding: 8px 14px;
  padding-bottom: 0.4em;
  text-transform: uppercase;
  user-select: none;
  ${props => (props.$thick ? 'font-weight: bold' : '')};

  :disabled {
    opacity: 50%;
    cursor: not-allowed;
  }

  :hover:not(:disabled) {
    background-color: ${props =>
      props.$hoverBackgroundColor ||
      (props.$dark
        ? DARK_COLOR.replace('rgb', 'rgba').replace(')', ',0.25)')
        : 'rgba(255,255,255,0.15)')};
  }

  ${props =>
    props.$borderColor && props.$secondaryBorderColor
      ? css`
          position: relative;

          ::after {
            content: ' ';
            pointer-events: none;
            position: absolute;
            z-index: 1;
            top: -5px;
            left: -5px;
            bottom: -5px;
            right: -5px;
            border: 2px solid ${props.$secondaryBorderColor};
          }
        `
      : ''}
`
