import React, { useState } from 'react'
import styled from 'styled-components'
import { darken } from 'polished'
import FullLink from '../../FullLink'
import { NavItem } from '../types'

export default ({ text, link, items }: NavItem) => {
  const [containerKey, setContainerKey] = useState(0)

  const resetContainer = (e: React.MouseEvent) => {
    setContainerKey(k => k + 1)
  }

  const swallowClick = (e: React.MouseEvent) => {
    if (!link) {
      e.preventDefault()
      e.stopPropagation()
    }
  }

  return (
    <Container key={containerKey}>
      <FullLink to={link || '#'} onClick={swallowClick}>
        {text}
      </FullLink>
      {items && (
        <SubMenu>
          {items.map((item, i) => (
            <SubItem key={i} onClick={resetContainer}>
              <FullLink to={item.link}>{item.text}</FullLink>
            </SubItem>
          ))}
        </SubMenu>
      )}
    </Container>
  )
}

const SubMenu = styled.ul`
  margin: 0;
  padding: 0;
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 100%;
  background-color: ${props => props.theme.header.background};
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  z-index: -1;
`

const Container = styled.li<{ link?: string }>`
  list-style: none;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  cursor: default;
  user-select: none;
  position: relative;

  ${FullLink} {
    padding: 0 1.5em;
  }

  :hover {
    background-color: ${props => darken(0.07, props.theme.header.background)};

    ${SubMenu} {
      display: block;
    }
  }
`

const SubItem = styled.li`
  margin: 0;
  list-style: none;
  user-select: none;
  cursor: default;
  min-width: 100%;

  ${FullLink} {
    padding: 0.5em 1em;
    justify-content: flex-start;
  }

  :hover {
    background-color: ${props => darken(0.07, props.theme.header.background)};
  }
`
