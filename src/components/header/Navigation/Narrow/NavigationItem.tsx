import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { NavItem } from '../types'
import FullLink from '../../FullLink'
import BaseToggle from '~/components/BaseToggle'

export default ({ text, link, items }: NavItem) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Container>
        <FullLink to={link || '#'}>{text}</FullLink>
        {items && (
          <>
            <Plus open={open} />
            <Toggle
              checked={open}
              onClick={e => {
                e.stopPropagation()
                setOpen(o => !o)
              }}
            />
          </>
        )}
      </Container>
      {items && (
        <SubMenu>
          {items.map((item, i) => (
            <SubItem key={i}>
              <FullLink to={item.link}>{item.text}</FullLink>
            </SubItem>
          ))}
        </SubMenu>
      )}
    </>
  )
}

const ROW_HEIGHT = '60px'

const Container = styled.li`
  list-style: none;
  height: ${ROW_HEIGHT};

  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  &:first-of-type {
    margin-top: 1px;
  }

  ${FullLink} {
    justify-content: flex-start;
    padding: 0 1em;
  }
`

const Plus = styled.div<{ open: boolean }>`
  height: ${ROW_HEIGHT};
  width: ${ROW_HEIGHT};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5em;
  z-index: 2;

  :before {
    transform: ${props => (props.open ? 'scaleX(1.5)' : 'inherit')};
    content: ${props => (props.open ? "'-'" : "'+'")};
  }
`

const Toggle = styled(BaseToggle)`
  right: 0;
  left: unset;
  height: ${ROW_HEIGHT};
  width: ${ROW_HEIGHT};
  /* opacity: 0.5; */
  z-index: 3;
`

const SubMenu = styled.ul`
  margin: 0;

  ${FullLink} {
    justify-content: flex-start;
    padding-left: 2em;
  }
`

const SubItem = styled.li`
  list-style: none;
`
