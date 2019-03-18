import styled from 'styled-components'

export default styled.li`
  list-style: none;

  & + & {
    margin-left: 2em;
  }
`
