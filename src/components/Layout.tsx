import React from 'react'
import Head from './Head'

export default ({ children }) => (
  <>
    <Head />
    <div style={{ color: 'rebeccapurple' }}>{children}</div>
  </>
)
