import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Content from '~/layout/Content'
import Logo from './Logo'
import media from '~/utils/media'

type Props = {
  children?: React.ReactNode
  className?: string
  onClick?: (e: React.MouseEvent) => void
}

export default ({ children, className, onClick }: Props) => (
  <Container className={className} onClick={onClick}>
    <HeaderContent>
      <Link to="/">
        <Logo />
      </Link>
      {children}
    </HeaderContent>
  </Container>
)

export const HEADER_SHADOW = '0 0 15px rgba(0, 0, 0, 0.5)'

const Container = styled.header`
  background-color: ${props => props.theme.header.background};
  box-shadow: ${HEADER_SHADOW};
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

const TemporaryChurchName = styled.div`
  color: ${props => props.theme.header.color};
  flex-grow: 1;
  padding-left: 0.5em;
  display: flex;
  align-items: center;
  font-family: 'Short Stack';
  font-size: 1.3em;
  letter-spacing: -0.08em;

  :after {
    content: 'Midway';

    ${media.sm} {
      content: 'Midway Community Church';
    }
  }
`
