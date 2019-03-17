import React from 'react'
import styled from 'styled-components'
import Layout from '~/components/Layout'

export default () => (
  <Layout>
    <Header>Hello Gatsby!</Header>
    <p>Content</p>
  </Layout>
)

const Header = styled.div`
  font-size: 65px;
`
