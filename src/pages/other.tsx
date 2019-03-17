import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

export default () => (
  <>
    <p>other content</p>
    <Link to="/">Go home</Link>
  </>
)

const ColoredText = styled.p`
  color: ${props => props.theme.color};
`
