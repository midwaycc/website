import React from 'react'
import { Link } from 'gatsby'

type Props = {
  mark?: {
    href?: string
  }
  children?: React.ReactNode
  className?: string
}

export const EnhancedLink = ({ mark, children, className }: Props) => {
  if (!mark || !mark.href) {
    return <>{children}</>
  }

  if (mark.href.startsWith('/')) {
    return (
      <Link to={mark.href} className={className}>
        {children}
      </Link>
    )
  }

  return (
    <a
      href={mark.href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
}
