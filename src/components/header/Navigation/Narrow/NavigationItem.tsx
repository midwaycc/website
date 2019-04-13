import React from 'react'
import styled from 'styled-components'
import { NavItem } from '../types'
import FullLink from '../../FullLink'

export default ({ text, link, items }: NavItem) => {
  return (
    <Container>
      <FullLink to={link || '#'}>{text}</FullLink>
    </Container>
  )
}

const Container = styled.li`
  list-style: none;
  height: 2.5em;

  display: flex;
  flex-direction: column;
  justify-content: center;

  &:first-of-type {
    margin-top: 1px;
  }

  ${FullLink} {
    padding-right: 1em;
    justify-content: flex-end;
  }
`
