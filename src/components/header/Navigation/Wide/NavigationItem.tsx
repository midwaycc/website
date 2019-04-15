import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { darken } from 'polished'
import { FullLink, FullText } from '../../FullLink'
import { NavItemWithLink, NavItemWithSubitems } from '../types'

export const NavigationItem = ({ text, link }: NavItemWithLink) => (
  <Container>
    <FullLink to={link}>{text}</FullLink>
  </Container>
)

export const NavigationItemWithSubmenu = ({
  text,
  items
}: NavItemWithSubitems) => {
  const [containerKey, setContainerKey] = useState(0)

  return (
    <Container key={containerKey}>
      <FullText>{text}</FullText>
      <SubMenu>
        {items.map((item, i) => (
          <SubItem key={i} onClick={() => setContainerKey(k => k + 1)}>
            <FullLink to={item.link}>{item.text}</FullLink>
          </SubItem>
        ))}
      </SubMenu>
    </Container>
  )
}

const SubMenu = styled.ul`
  margin: 0;
  padding: 0;
  display: none;
  position: absolute;
  top: 100%;
  right: 0;
  white-space: nowrap;
  min-width: 100%;
  background-color: ${props => props.theme.header.background};
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  z-index: -1;
`

const HOVER_STYLES = css`
  background-color: ${props => darken(0.07, props.theme.header.background)};
`

const Container = styled.li`
  list-style: none;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  cursor: default;
  user-select: none;
  position: relative;

  ${FullLink}, ${FullText} {
    padding: 0 1.5em;
  }

  :hover {
    ${HOVER_STYLES};

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
    ${HOVER_STYLES};
  }
`
