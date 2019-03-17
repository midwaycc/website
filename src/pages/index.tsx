import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Content from '~/components/Content'

export default () => (
  <>
    <Content>
      <ColoredText>Home page content</ColoredText>
      <ColoredText style={{ textAlign: 'right' }}>
        Right-aligned content
      </ColoredText>
      {Array.from(new Array(100)).map((_, i) => (
        <p key={i}>content</p>
      ))}
      <Link to="/other">Go to other</Link>
    </Content>
  </>
)

const ColoredText = styled.p`
  color: ${props => props.theme.color};
`
