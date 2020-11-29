import React from 'react'
import styled from 'styled-components'
import { darken, lighten } from 'polished'
import { FullLink, FullText } from '~/views/Header/Navigation/FullLink'
import { BaseToggle } from './BaseToggle'
import { colors } from '~/theme/colors'
import {
  NavItemWithSubitems,
  NavItemWithLink
} from '~/views/Header/Navigation/types'

// Used globally across all items to detect when to close the open item
let openItem: string | null = null

export function NavigationItem({ text, link, sameWindow }: NavItemWithLink) {
  return (
    <Container>
      <FullLink css="color: white" to={link} sameWindow={sameWindow}>
        {text}
      </FullLink>
    </Container>
  )
}

export function NavigationItemWithSubmenu({
  text,
  items
}: NavItemWithSubitems) {
  const handleClick = (e: React.MouseEvent) => {
    // Close the selected item when clicking it. Otherwise, rely on the
    // native radio behavior. If JS is not loaded yet, the only
    // degradation is that clicking the open item doesn't close it. Doing
    // it this way rather than with a controlled input and React state
    // allows the native functionality to work without JS.
    if (openItem === text) {
      ;(e.target as HTMLInputElement).checked = false
      openItem = null
    } else {
      openItem = text
    }
  }

  return (
    <Container>
      <Toggle onClick={handleClick} />
      <FullText css="color: white">
        <Plus>+</Plus> {text}
      </FullText>
      <SubMenu $numItems={items.length}>
        {items.map((item, i) => (
          <SubItem key={i}>
            <FullLink
              css="color: white"
              to={item.link}
              sameWindow={item.sameWindow}
            >
              <Minus>-</Minus> {item.text}
            </FullLink>
          </SubItem>
        ))}
      </SubMenu>
    </Container>
  )
}

const ROW_HEIGHT = '60px'
const SUB_ROW_HEIGHT = '40px'
const BASE_COLOR = colors.turquoise.hex

const Toggle = styled(BaseToggle).attrs({
  className: 'narrow-submenu-toggle',
  type: 'radio',
  name: 'submenu'
})`
  width: 100vw;
  height: ${ROW_HEIGHT};
  z-index: 3;
`

const Container = styled.li`
  list-style: none;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  color: white;

  &:first-of-type {
    margin-top: 1px;
  }

  & > ${FullLink}, & > ${FullText} {
    justify-content: flex-start;
    padding: 0 1em;
    height: ${ROW_HEIGHT};
  }

  :hover > ${FullText}, :hover > ${FullLink}, ${Toggle}:checked ~ ${FullText} {
    background-color: ${darken(0.05, BASE_COLOR)};
  }
`

const SubMenu = styled.ul<{ $numItems: number }>`
  margin: 0;
  padding: 0;
  width: 100%;
  overflow: hidden;

  height: auto;
  max-height: 0;
  transition: max-height 0.4s ease;

  ${Toggle}:checked ~ & {
    max-height: calc(${SUB_ROW_HEIGHT} * ${props => props.$numItems});
  }

  ${FullLink} {
    justify-content: flex-start;
    padding-left: 2em;
    height: ${SUB_ROW_HEIGHT};
  }
`

const SubItem = styled.li`
  list-style: none;
  width: 100%;
  background-color: ${lighten(0.05, BASE_COLOR)};

  :hover {
    background-color: ${darken(0.01, BASE_COLOR)};
  }
`

const Plus = styled.span`
  font-size: 1.1em;
  margin-right: 0.5em;
  transform: rotate(0deg);
  transition: transform 0.4s ease-in-out;

  input:checked ~ ${FullText} & {
    transform: rotate(90deg);
  }
`

const Minus = styled.span`
  font-size: 1.7em;
  margin-right: 0.5em;
  transform: translateY(-0.05em);
`
