import React from 'react'

export const VerticalSpace = ({ node }) => {
  if (!node || node.height == null) return null
  return <div style={{ height: `${node.height}em` }} />
}
