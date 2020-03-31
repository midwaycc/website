import React from 'react'
import styled, { css } from 'styled-components'
import {
  NavItemWithSubitems,
  NavItemWithLink
} from '~/layout/Header/Navigation/types'
import { FullLink, FullText } from '~/layout/Header/FullLink'
import BaseToggle from '~/components/BaseToggle'
import { darken, lighten } from 'polished'

export const NavigationItem = ({ text, link, sameWindow }: NavItemWithLink) => (
  <Container>
    <FullLink css="color: white" to={link} sameWindow={sameWindow}>
      {text}
    </FullLink>
  </Container>
)

let openItem: string | null = null

export const NavigationItemWithSubmenu = ({
  text,
  items
}: NavItemWithSubitems) => {
  return (
    <Container>
      <Toggle
        onClick={e => {
          if (openItem === text) {
            ;(e.target as any).checked = false
            openItem = null
          } else {
            openItem = text
          }
        }}
      />
      <FullText css="color: white">
        <Plus /> {text}
      </FullText>
      <SubMenu numItems={items.length}>
        {items.map((item, i) => (
          <SubItem key={i}>
            <FullLink
              css="color: white"
              to={item.link}
              sameWindow={item.sameWindow}
            >
              <Minus /> {item.text}
            </FullLink>
          </SubItem>
        ))}
      </SubMenu>
    </Container>
  )
}

const Plus = () => {
  return (
    <span
      css={css`
        font-size: 1.1em;
        margin-right: 0.5em;
        transform: rotate(0deg);
        transition: transform 0.4s ease-in-out;

        input:checked ~ ${FullText} & {
          transform: rotate(90deg);
        }
      `}
    >
      +
    </span>
  )
}

const Minus = () => {
  return (
    <span
      css={css`
        font-size: 1.7em;
        margin-right: 0.5em;
        transform: translateY(-0.05em);
      `}
    >
      -
    </span>
  )
}

const ROW_HEIGHT = '60px'
const SUB_ROW_HEIGHT = '40px'
const BASE_COLOR = '#099799'

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

const SubMenu = styled.ul<{ numItems: number }>`
  margin: 0;
  padding: 0;
  width: 100%;
  overflow: hidden;

  height: auto;
  max-height: 0;
  transition: max-height 0.4s ease;

  ${Toggle}:checked ~ & {
    max-height: calc(${SUB_ROW_HEIGHT} * ${props => props.numItems});
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
