import styled from 'styled-components'

export default styled.input.attrs({ type: 'checkbox' })`
  display: block;
  position: absolute;
  top: -3px;
  left: -2px;

  cursor: pointer;

  opacity: 0;

  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-touch-callout: none;
`
