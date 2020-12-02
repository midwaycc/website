import React from 'react'
import styled from 'styled-components'
import { graphql, Link } from 'gatsby'
import { Section } from '~/layout/Section'
import { Content } from '~/layout/Content'
import { SquareButton } from '~/components/SquareButton'
import { CardContainer } from '~/components/CardContainer'
import { PodcastIcons } from '~/components/PodcastIcons'
import { niceDate } from '~/utils/niceDate'
import { SermonUploadQuery } from '~/types/graphqlTypes'

type Props = {
  data: SermonUploadQuery
}

type Sermon = SermonUploadQuery['allSanitySermonUpload']['nodes'][0]

export default function SermonsPage({ data }: Props) {
  if (!data.allSanitySermonUpload) {
    return null
  }

  const sermons = data.allSanitySermonUpload.nodes

  return (
    <Section>
      <Content>
        <Link to="/">
          <SquareButton point="left">Home</SquareButton>
        </Link>
        <h1>Sermons</h1>
        <p>Listen here, or subscribe in your favorite podcast app!</p>
        <PodcastIcons />
        <CardContainer $big $noHover>
          {sermons.map(sermon =>
            sermon._id ? <Sermon key={sermon._id} sermon={sermon} /> : null
          )}
        </CardContainer>
      </Content>
    </Section>
  )
}

export const query = graphql`
  query SermonUpload {
    allSanitySermonUpload(sort: { fields: date, order: DESC }) {
      nodes {
        _id
        date
        extraInfo
        audioFile {
          asset {
            url
          }
        }
      }
    }
  }
`

const Sermon = ({ sermon }: { sermon: Sermon }) => {
  const title = sermonTitle(sermon)
  const src = sermon.audioFile?.asset?.url

  return (
    <div>
      <SermonTitle>{title}</SermonTitle>
      {src ? (
        <>
          <audio css="width: 100%; margin-bottom: 1rem" controls src={src} />
          <a download={`${sermon.date}.mp3`} href={src}>
            Download
          </a>
        </>
      ) : (
        <p>(no file)</p>
      )}
    </div>
  )
}

function sermonTitle(sermon: Sermon) {
  return [`Message: ${niceDate(sermon.date)}`, sermon.extraInfo]
    .filter(Boolean)
    .join(' - ')
}

const SermonTitle = styled.h3`
  margin: 0;
  margin-bottom: 0.5em;
  color: ${props => props.theme.colors.darkTeal.hex};
`
