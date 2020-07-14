import React from 'react'
import './blockquotes.css'

type Props = {
  node?: {}
  children?: React.ReactNode
}

export function BlockQuote(props: Props) {
  return <blockquote>{props.children}</blockquote>
}
