import React from 'react'
import styled, { css, CSSObject } from 'styled-components'
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
  -webkit-tap-highlight-color: ${props => props.theme.colors.black.rgba(0)};
`

export const FullText = styled.span`
  ${styles};
`

export const FullLink = styled(
  (props: {
    className?: string
    style?: CSSObject
    to: string
    children: React.ReactNode
    sameWindow?: boolean
  }) => {
    const { sameWindow, ...otherProps } = props
    if (!props.to) {
      console.error('Invalid link!', props)
    }
    if (props.to && props.to.indexOf('http') === 0) {
      return (
        <a
          className={props.className}
          style={props.style}
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
