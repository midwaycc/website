import React from 'react'
import styled from 'styled-components'
import { navigate } from 'gatsby'

export type Props = {
  text: string
  link?: string
  items?: Array<{ text: string; link: string }>
}

export default ({ text, link, items }: Props) => (
  <Container onClick={() => (link ? navigate(link) : undefined)}>
    {text}
    {items && (
      <SubMenu>
        {items.map((item, i) => (
          <SubItem key={i} onClick={() => navigate(item.link)}>
            {item.text}
          </SubItem>
        ))}
      </SubMenu>
    )}
  </Container>
)

const SubMenu = styled.ul`
  margin: 0;
  padding: 0;
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 100%;
  background-color: white;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  z-index: -1;
`

const Container = styled.li`
  list-style: none;
  color: #524637;
  padding: 0 1.5em;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: default;
  user-select: none;
  background-color: #fff;
  position: relative;

  :hover {
    background-color: #eee;

    ${SubMenu} {
      display: block;
    }
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
    background-color: #eee;
  }
`
