import React from 'react'
import styled, { css } from 'styled-components'
import {
  NavItemWithSubitems,
  NavItemWithLink
} from '~/layout/Header/Navigation/types'
import { FullLink, FullText } from '~/layout/Header/FullLink'
import BaseToggle from '~/components/BaseToggle'
import { darken } from 'polished'

export const NavigationItemWithSubmenu = ({
  text,
  items
}: NavItemWithSubitems) => {
  return (
    <Container>
      <Toggle />
      <FullText>{text}</FullText>
      <SubMenu numItems={items.length}>
        {items.map((item, i) => (
          <SubItem key={i}>
            <FullLink to={item.link}>{item.text}</FullLink>
          </SubItem>
        ))}
      </SubMenu>
    </Container>
  )
}

export const NavigationItem = ({ text, link }: NavItemWithLink) => (
  <Container>
    <FullLink to={link}>{text}</FullLink>
  </Container>
)

const ROW_HEIGHT = '60px'
const SUB_ROW_HEIGHT = '40px'
const HOVER_COLOR = (background: string) => darken(0.07, background)
const HOVER_STYLES = css`
  background-color: ${props => HOVER_COLOR(props.theme.header.background)};
`

const Toggle = styled(BaseToggle).attrs({ className: 'narrow-submenu-toggle' })`
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

  &:first-of-type {
    margin-top: 1px;
  }

  & > ${FullLink}, & > ${FullText} {
    justify-content: flex-start;
    padding: 0 1em;
    height: ${ROW_HEIGHT};
  }

  :hover > ${FullText}, :hover > ${FullLink}, ${Toggle}:checked ~ ${FullText} {
    ${HOVER_STYLES};
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

  :hover {
    ${HOVER_STYLES};
  }
`
