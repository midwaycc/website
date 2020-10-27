import React from 'react'
import styled, { css } from 'styled-components'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode
  className?: string
  point?: 'left' | 'right'
  dark?: boolean | null
  thick?: boolean | null
}

export const SquareButton = ({
  point,
  dark = false,
  thick = false,
  children,
  className,
  ...buttonProps
}: Props) => {
  const left = point === 'left' ? <Arrow>&lsaquo;&nbsp;&nbsp;</Arrow> : null
  const right = point === 'right' ? <Arrow>&nbsp;&nbsp;&rsaquo;</Arrow> : null

  return (
    <Button className={className} dark={dark} thick={thick} {...buttonProps}>
      {left}
      {children}
      {right}
    </Button>
  )
}

const DARK_COLOR = 'rgb(35, 74, 77)'

const Button = styled(({ dark, thick, ...buttonProps }) => (
  <button {...buttonProps} />
))<{ dark: boolean; thick: boolean }>`
  display: inline-block;
  background-color: rgba(255, 255, 255, 0);
  color: ${props => (props.dark ? DARK_COLOR : 'white')};
  border: ${props => (props.thick ? 3 : 2)}px solid
    ${props => (props.dark ? DARK_COLOR : 'white')};
  font-size: 14px;
  padding: 8px 14px;
  padding-bottom: 0.4em;
  text-transform: uppercase;
  user-select: none;
  ${props => (props.thick ? 'font-weight: bold' : '')};

  ${props =>
    !props.hover
      ? css`
          :hover:not(:disabled) {
            background-color: ${props.dark
              ? DARK_COLOR.replace('rgb', 'rgba').replace(')', ',0.25)')
              : 'rgba(255,255,255,0.15)'};
          }
        `
      : ''}

  :disabled {
    opacity: 50%;
    cursor: not-allowed;
  }
`

const Arrow = styled.span`
  display: inline-block;
  transform: scale(1.5) translateY(-0.05em);
`
