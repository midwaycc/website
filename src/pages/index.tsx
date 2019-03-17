import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

export default () => (
  <>
    <ColoredText>Home page content</ColoredText>
    <Link to="/other">Go to other</Link>
  </>
)

const ColoredText = styled.p`
  color: ${props => props.theme.color};
`
