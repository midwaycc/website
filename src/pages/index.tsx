import React from 'react'
import styled from 'styled-components'
import Section from '~/layout/Section'

const data = {
  title: 'Welcome.',
  subtitle:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
}

export default () => (
  <>
    <Slideshow color="#7ba088">
      <Welcome>{data.title}</Welcome>
      <Subtitle>{data.subtitle}</Subtitle>
      <Arrow left>{'<'}</Arrow>
      <Arrow>{'>'}</Arrow>
    </Slideshow>
  </>
)

const Slideshow = styled(Section)`
  width: 100%;
  height: 500px;
  background-color: #7ba088;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Avenir';
  position: relative;
`

const Welcome = styled.h1.attrs({ children: 'Welcome.' })`
  margin: 0;
  color: white;
  font-size: 5em;
`

const Subtitle = styled.p`
  margin: 2em 0;
  color: white;
  font-size: 1.5em;
  max-width: 30em;
  text-align: center;
`

const Arrow = styled.span<{ left?: boolean }>`
  border: 2px solid #c2c1a4;
  color: #c2c1a4;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  position: absolute;
  top: calc(50% - 15px);
  ${props => (props.left ? 'left' : 'right')}: 1em};
  text-align: center;
  line-height: 25px;
  font-weight: bold;
  font-size: 1.5em;
  user-select: none;
  cursor: default;
`
