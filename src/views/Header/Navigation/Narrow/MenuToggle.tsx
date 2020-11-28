import styled from 'styled-components'
import { BaseToggle } from './BaseToggle'

export const NarrowMenuToggle = styled(BaseToggle).attrs({
  id: 'narrow-menu-toggle'
})`
  right: 0;
  top: 0;
  width: ${props => props.theme.header.height}px;
  height: ${props => props.theme.header.height}px;
  z-index: 3;
`
