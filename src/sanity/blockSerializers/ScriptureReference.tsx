import React from 'react'
import styled from 'styled-components'
import { SanityScriptureReference } from '~/types/graphqlTypes'

type Props = {
  node?: SanityScriptureReference
}

export function ScriptureReference({ node }: Props) {
  if (!node || !node.text || !node.verseReference) {
    return null
  }

  return (
    <>
      <VerseText>{node.text}</VerseText>
      <VerseReference>{node.verseReference}</VerseReference>
    </>
  )
}

const VerseText = styled.blockquote`
  font-size: 1.7em;
  line-height: 1.5em;
  width: 75%;
  margin: 2em auto;
  position: relative;
  quotes: '\\201C''\\201D''\\2018''\\2019';
  color: ${props => props.theme.colors.grey0.hex};

  ::before {
    content: open-quote;
    position: absolute;
    left: -0.5em;
    top: 0.1em;
    font-size: 4em;
  }

  ::after {
    content: close-quote;
    vertical-align: -0.65em;
    margin-left: 0.2em;
  }

  ::before,
  ::after {
    font-size: 4em;
    color: ${props => props.theme.colors.lightTurquoise.hex};
  }
`
const VerseReference = styled.blockquote`
  margin-top: -2.5em;
  margin-left: 7em;
  font-size: 1.5em;
  color: #ddd;
  font-style: italic;

  ::before {
    content: '- ';
  }
`
