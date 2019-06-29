import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Content from '~/layout/Content'
import Navigation from './Navigation'
import Logo from './Logo'

type Props = {
  children?: React.ReactNode
  className?: string
  onClick?: (e: React.MouseEvent) => void
}

export default ({ children, className, onClick }: Props) => (
  <>
    <Navigation.NarrowMenuContentsTarget />
    <Container className={className} onClick={onClick}>
      <HeaderContent>
        <Link to="/">
          <Logo />
        </Link>
        <Navigation />
      </HeaderContent>
    </Container>
  </>
)

const Container = styled.header`
  background-color: ${props => props.theme.header.background};
  box-shadow: ${props => props.theme.header.shadow};
  height: ${props => props.theme.header.height}px;
  position: relative;
  z-index: 999;
`

const HeaderContent = styled(Content)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  height: 100%;
`
