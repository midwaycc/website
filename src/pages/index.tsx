import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Content from '~/layout/Content'

export default () => (
  <>
    <Content>
      <Link to="/other">Go to other</Link>
      {Array.from(new Array(100)).map((_, i) => (
        <p key={i}>content</p>
      ))}
    </Content>
  </>
)
