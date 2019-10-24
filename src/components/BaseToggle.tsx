import styled from 'styled-components'

export default styled.input.attrs(props => ({
  type: props.type || 'checkbox',
  name: props.name
}))`
  display: block;
  position: absolute;

  cursor: default;

  opacity: 0;

  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-touch-callout: none;
`
