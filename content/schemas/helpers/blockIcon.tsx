import React from 'react'
import { Align } from './alignment'

export const blockIcon = (text: string, align?: Align) => () => (
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

