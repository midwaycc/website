import React from 'react'
import styled from 'styled-components'
import { navigate, Link } from 'gatsby'
import { darken } from 'polished'

export type Props = {
  text: string
  link?: string
  items?: Array<{ text: string; link: string }>
}

export default ({ text, link, items }: Props) => (
  <Container>
    {link ? <FullLink to={link}>{text}</FullLink> : text}
    {items && (
      <SubMenu>
        {items.map((item, i) => (
          <SubItem key={i}>
            <FullLink to={item.link}>{item.text}</FullLink>
          </SubItem>
        ))}
      </SubMenu>
    )}
  </Container>
)

const FullLink = styled(Link)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  cursor: default;
`

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

const Container = styled.li`
  list-style: none;
  padding: 0 1.5em;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: default;
  user-select: none;
  position: relative;

  :hover {
    background-color: ${props => darken(0.07, props.theme.header.background)};

    ${SubMenu} {
      display: block;
    }
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.header.color};
  }
`

const SubItem = styled.li`
  margin: 0;
  list-style: none;
  padding: 0.5em 1em;
  user-select: none;
  cursor: default;
  min-width: 100%;

  :hover {
    background-color: ${props => darken(0.07, props.theme.header.background)};
  }
`
