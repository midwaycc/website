import React from 'react'
import styled from 'styled-components'
import Content from './Content'

export default () => (
  <Container>
    <MenuContainer>
      <div>menu</div>
      <div style={{ textAlign: 'right' }}>menu</div>
    </MenuContainer>
  </Container>
)

const Container = styled.header`
  background-color: orange;
`

const MenuContainer = styled(Content)`
  background-color: pink;
`
