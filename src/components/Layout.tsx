import React from 'react'
import Head from './Head'

export default (props: { children: React.ReactNode }) => (
  <>
    <Head />
    <div style={{ color: 'rebeccapurple' }}>{props.children}</div>
  </>
)
