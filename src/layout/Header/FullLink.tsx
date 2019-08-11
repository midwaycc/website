import React from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'

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
  (props: { className?: string; to: string; children: string | string[] }) => {
    if (props.to.indexOf('http') === 0) {
      return (
        <a className={props.className} href={props.to} target="_blank">
          {props.children}
        </a>
      )
    }
    return <Link {...props} />
  }
).attrs({ className: 'navigation-link' })`
  ${styles};
`
