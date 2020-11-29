import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'gatsby'

const styles = css`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: default;
  text-decoration: none;
  color: ${props => props.theme.header.color};
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`

export const FullText = styled.span`
  ${styles};
`

export const FullLink = styled(
  (props: {
    className?: string
    to: string
    children: React.ReactNode
    sameWindow?: boolean
  }) => {
    const { sameWindow, ...otherProps } = props
    if (props.to.indexOf('http') === 0) {
      return (
        <a
          className={props.className}
          href={props.to}
          target={sameWindow ? undefined : '_blank'}
          rel={sameWindow ? undefined : 'noopener noreferrer'}
        >
          {props.children}
        </a>
      )
    }
    return <Link {...otherProps} />
  }
).attrs({ className: 'navigation-link' })`
  ${styles};
`
