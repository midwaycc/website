import React from 'react'
import styled from '~/theme/styled-components'
import { Link } from 'gatsby'
import Content from '~/layout/Content'

export default () => (
  <>
    <Content>
      <Link to="/">Go home</Link>
      <p>other content</p>
    </Content>
  </>
)
