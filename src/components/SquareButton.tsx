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
    props.$backgroundColor || props.theme.colors.black.rgba(0)};
  color: ${props =>
    props.$dark
      ? props.theme.colors.darkTeal.hex
      : props.theme.colors.white.hex};
  border: ${props => (props.$thick ? 3 : 2)}px solid
    ${props =>
      props.$borderColor ||
      (props.$dark
        ? props.theme.colors.darkTeal.hex
        : props.theme.colors.white.hex)};
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
        ? props.theme.colors.darkTeal.rgba(0.25)
        : props.theme.colors.black.rgba(0.15))};
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
