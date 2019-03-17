import React from 'react'
import styled from 'styled-components'
import Layout from '~/components/Layout'

export default () => (
  <Layout>
    <ColoredText>Home page content</ColoredText>
  </Layout>
)

const ColoredText = styled.p`
  color: ${props => props.theme.color};
`
