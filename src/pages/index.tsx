import React from 'react'
import styled, { css } from 'styled-components'
import Section from '~/layout/Section'
import HorizontalSection from '~/layout/HorizontalSection'
import InfoWidget from '~/components/InfoWidget'

const data = {
  title: 'Welcome.',
  subtitle:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
}

export default () => (
  <>
    <Slideshow color="#7ba088">
      <Title>{data.title}</Title>
      <Subtitle>{data.subtitle}</Subtitle>
      <Arrow css="left: 1em">{'<'}</Arrow>
      <Arrow css="right: 1em">{'>'}</Arrow>
    </Slideshow>
    <HorizontalSection color="#524637" css="color: white; padding: 5em 0">
      <InfoWidget title="Sermons">
        <Rectangle>Listen</Rectangle>
        <Rectangle>Watch Live</Rectangle>
      </InfoWidget>
      <InfoWidget title="Worship Schedule">
        <div>Bible Study: 9:30 AM</div>
        <div>Worship Service: 11:00 AM</div>
      </InfoWidget>
      <InfoWidget title="Location">
        <div>3365 Francis Road</div>
        <div>Alpharetta, Georgia 30004</div>
      </InfoWidget>
    </HorizontalSection>
  </>
)

const Slideshow = styled(Section)`
  width: 100%;
  height: 30em;
  background-color: #7ba088;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Avenir';
  position: relative;
`

const Title = styled.h1`
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

const Arrow = styled.span`
  border: 2px solid #c2c1a4;
  color: #c2c1a4;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  position: absolute;
  top: calc(50% - 15px);
  text-align: center;
  line-height: 25px;
  font-weight: bold;
  font-size: 1.5em;
  user-select: none;
  cursor: default;
`

const Rectangle = styled.button`
  width: 12em;
  background-color: #dd9b6b;
  color: #524637;
  padding: 1em;
  font-size: 1.2em;
  border: none;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.5);
  transition: box-shadow 150ms ease, transform 150ms ease;

  :hover {
    box-shadow: 10px 10px 25px rgba(0, 0, 0, 0.5);
    transform: translate(-1px, -2px);
  }

  :active {
    box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.5);
    transform: translate(1px, 2px);
  }

  & + & {
    margin-top: 1em;
  }
`
