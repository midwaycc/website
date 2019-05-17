import React from 'react'
import WideNavigation from '~/components/header/Navigation/Wide'
import styled from 'styled-components'
import Content from '~/layout/Content'

export default class NavigationPreview extends React.Component<{ entry: any }> {
  render() {
    const items = this.props.entry.toJS().data.navigation

    return (
      <Container>
        <WideNavigation
          navigationItems={items}
          css="justify-content: flex-end !important"
        />
      </Container>
    )
  }
}

const Container = styled.header`
  background-color: ${props => props.theme.header.background};
  box-shadow: ${props => props.theme.header.shadow};
  height: ${props => props.theme.header.height}px;
  position: relative;
  z-index: 999;
  margin-right: 4em;
`
