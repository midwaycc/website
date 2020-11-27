import React from 'react'
import styled from 'styled-components'
import { FooterBlock } from './FooterBlocks'
import footerLogo from '~/../static/logos/rgb/icon/mcc_icon_rgb.png'

export function FloatingLogo() {
  return (
    <Container>
      <LogoIcon>
        <LogoImg src={footerLogo} />
      </LogoIcon>
    </Container>
  )
}

const Container = styled(FooterBlock)`
  position: relative;
`

const LogoIcon = styled.div`
  position: absolute;
  bottom: -1em;
  left: calc(50% - 100px);
  overflow: hidden;
  width: 200px;
  height: 181px;
`

const LogoImg = styled.img`
  width: 100%;
`
