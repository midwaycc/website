import React from 'react'
import styled from 'styled-components'
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

const ColoredText = styled.p`
  color: ${props => props.theme.color};
`
