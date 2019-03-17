import React from 'react'
import styled from 'styled-components'
import Content from '~/layout/Content'

export default () => (
  <Container>
    <HeaderContent>
      <div>menu</div>
      <div style={{ textAlign: 'right' }}>menu</div>
    </HeaderContent>
  </Container>
)

const Container = styled.header`
  background-color: orange;
`

const HeaderContent = styled(Content)`
  background-color: pink;
`
