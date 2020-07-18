import React from 'react'
import { Align } from './alignment'

export const blockIcon = (svg: string, align?: Align) => () => (
  <div
    style={{
      width: 24,
      height: 24,
      lineHeight: '24px',
      textAlign: align || 'center'
    }}
  >
    <img src={svg} />
  </div>
)
