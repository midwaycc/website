import React from 'react'

export const blockIcon = (text, align) => () => (
  <div
    style={{
      width: 24,
      height: 24,
      lineHeight: '24px',
      textAlign: align || 'center'
    }}
  >
    {text}
  </div>
)