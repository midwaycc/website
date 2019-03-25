import React from 'react'
import styled from '~/theme/styled-components'
import Content from '~/layout/Content'

export default () => null

// export default () => (
//   <Container>
//     <FooterContent>footer</FooterContent>
//   </Container>
// )

const Container = styled.footer`
  background-color: #4a5a6a;
`

const FooterContent = styled(Content)`
  background-color: #2a3a4a;
  color: #ccc;
`
