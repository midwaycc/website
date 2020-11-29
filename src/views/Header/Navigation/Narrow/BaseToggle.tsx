import styled from 'styled-components'

export const BaseToggle = styled.input.attrs(props => ({
  type: props.type || 'checkbox',
  name: props.name
}))`
  display: block;
  position: absolute;

  cursor: default;

  opacity: 0;

  -webkit-tap-highlight-color: ${props => props.theme.colors.black.rgba(0)};
  -webkit-touch-callout: none;
`
