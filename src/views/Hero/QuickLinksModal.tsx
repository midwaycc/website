import React, { useState } from 'react'
import Modal from 'react-modal'
import styled from 'styled-components'
import { RichContent } from '~/sanity/RichContent'
import { SquareButton } from '~/components/SquareButton'
import { HeroSectionQuery } from '~/types/graphqlTypes'
import X from '~/../static/images/x.svg'

if (typeof document !== 'undefined') {
  Modal.setAppElement(document.body)
}

type Props = {
  quickLinks?: HeroSectionQuery['allSanityShortcuts']['nodes'][number] | null
}

export function QuickLinksModal({ quickLinks }: Props) {
  const [open, setOpen] = useState(false)

  if (!quickLinks) return null

  return (
    <>
      <div css="padding-top: 2em">
        <SquareButton
          thick
          backgroundColor="rgba(9, 151, 153, 0.5)"
          hoverBackgroundColor="rgba(9, 151, 153, 1)"
          borderColor="rgb(35,74,77)"
          secondaryBorderColor="white"
          onClick={() => setOpen(true)}
        >
          Quick Links
        </SquareButton>
      </div>
      <Modal
        isOpen={open}
        onRequestClose={() => setOpen(false)}
        closeTimeoutMS={300}
        style={modalStyle}
      >
        <Scroller>
          <RichContent
            css="padding-bottom: 2rem"
            blocks={quickLinks._rawContent || []}
          />
        </Scroller>
        <CloseButton onClick={() => setOpen(false)}>
          <img src={X} />
        </CloseButton>
      </Modal>
    </>
  )
}

const modalStyle = {
  overlay: {
    zIndex: 4,
    backgroundColor: 'rgba(0,0,0,0.45)',
    pointerEvents: 'auto'
  },
  content: {
    width: 800,
    maxWidth: 'calc(100vw - 2rem)',
    maxHeight: 'calc(70vh)',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    overflow: 'hidden',
    border: '5px solid #9fb94b',
    borderRadius: 0,
    backgroundColor: '#2b6667',
    color: 'white',
    position: 'relative',
    padding: 0
  }
} as const

const Scroller = styled.div`
  max-height: inherit;
  overflow: auto;
  padding: 1rem;
  padding-bottom: 0;
  text-align: center;
`

const CloseButton = styled.button`
  position: fixed;
  top: 0.75rem;
  left: 0.75rem;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
`
