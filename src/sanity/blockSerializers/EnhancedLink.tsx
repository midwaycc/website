import React from 'react'
import { Link } from 'gatsby'
import { CSSObject } from 'styled-components'

type Props = {
  mark?: {
    href?: string
  }
  children?: React.ReactNode
  className?: string
  style?: CSSObject
}

export const EnhancedLink = ({ mark, children, className, style }: Props) => {
  if (!mark || !mark.href) {
    return <>{children}</>
  }

  if (mark.href.startsWith('/')) {
    return (
      <Link to={mark.href} className={className} style={style}>
        {children}
      </Link>
    )
  }

  return (
    <a
      href={mark.href}
      className={className}
      style={style}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
}
