import React from 'react'
import { Link } from 'gatsby'

type Props = {
  mark?: {
    href?: string
  }
  children?: React.ReactNode
}

export const EnhancedLink = ({ mark, children }: Props) => {
  if (!mark || !mark.href) {
    return <>{children}</>
  }

  if (mark.href.startsWith('/')) {
    return <Link to={mark.href}>{children}</Link>
  }

  return (
    <a href={mark.href} target="_blank">
      {children}
    </a>
  )
}
