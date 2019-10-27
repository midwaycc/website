import React from 'react'

type Props = {
  node?: {
    height?: number
  }
}

export const VerticalSpace = ({ node }: Props) => {
  if (!node || node.height == null) return null
  return <div style={{ height: `${node.height}em`, clear: 'both' }} />
}
