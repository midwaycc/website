import React from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'
import media from '~/utils/media'
import Content from '~/layout/Content'
import { Title } from '~/components/Title'
import { SquareButton } from '~/components/SquareButton'
import mapPin from '~/../static/images/map_pin.png'
import leaves from '~/../static/images/leaves.png'
import { darken } from 'polished'

export default () => (
  <Container>
    <Columns>
      <Leaves />
      <Column>
        <Title color="#9fb94b">Welcome</Title>
        <Subtitle>You're invited! Sunday mornings.</Subtitle>
        <a href="http://midwaycc.sermon.net/" target="_blank">
          <Button>Stream Live</Button>
        </a>
        <Link to="/sermons">
          <Button>Past Sermons</Button>
        </Link>
      </Column>
      <Column>
        <MapPin />
        <AddressLine>3365 Francis Road</AddressLine>
        <AddressLine>Alpharetta, GA 30004</AddressLine>
      </Column>
    </Columns>
  </Container>
)

export const raggedEdgeGradient = (
  [r0, g0, b0]: number[],
  [r, g, b]: number[],
  nextColor: string = 'rgb(255,255,255)'
) => css`
  background-color: rgba(${r}, ${g}, ${b}, 1);
  background-image: linear-gradient(
      to bottom,
      rgb(${r0}, ${g0}, ${b0}) 0%,
      rgb(${r}, ${g}, ${b}) 100%
    ),
    linear-gradient(
      160deg,
      rgba(${r}, ${g}, ${b}, 1) 0%,
      rgba(${r}, ${g}, ${b}, 1) 50%,
      rgba(${r}, ${g}, ${b}, 0) 50%,
      rgba(${r}, ${g}, ${b}, 0) 100%
    ),
    linear-gradient(
      -160deg,
      rgba(${r}, ${g}, ${b}, 1) 0%,
      rgba(${r}, ${g}, ${b}, 1) 50%,
      rgba(${r}, ${g}, ${b}, 0) 50%,
      rgba(${r}, ${g}, ${b}, 0) 100%
    ),
    linear-gradient(
      to bottom,
      ${darken(0.1, nextColor)} 0%,
      ${darken(0.04, nextColor)} 75%,
      ${nextColor} 100%
    );
  background-position: top center, bottom center, bottom center, bottom center;
  background-size: 100% calc(100% - 2rem), 2rem 2rem, 2rem 2rem, 100% 2rem;
  background-repeat: repeat-x;
`

const Container = styled.div`
  width: 100%;
  background-color: rgb(43, 102, 103);
  padding-top: 3em;
  padding-bottom: 5em;
  color: white;

  ${raggedEdgeGradient([43, 102, 103], [35, 74, 77])};
`

const Columns = styled(Content)`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 0;

  ${media.md} {
    flex-direction: row;
  }
`

const Column = styled.div`
  flex: 1;
  width: 100%;
  text-align: center;
`

const Subtitle = styled.h2`
  margin: 0;
  font-weight: normal;
  font-size: 1.5rem;

  ${media.xs} {
    font-size: 1.65rem;
  }
`

const Button = styled(SquareButton)`
  padding-left: 0.5em;
  padding-right: 0.5em;
  margin: 1.5em 0.5em;
`

const MapPin = styled.img.attrs({ src: mapPin })`
  display: inline-block;
  height: 5rem;
  width: auto;
  margin-top: 1.75rem;
  margin-bottom: 1.5rem;
`

const AddressLine = styled.div`
  font-size: 1.5em;
  letter-spacing: 1px;

  & + & {
    margin-top: 0.5em;
  }
`

const Leaves = styled.img.attrs({ src: leaves })`
  position: absolute;
  height: 75px;
  width: auto;
  top: -105px;
  left: 1rem;
`
