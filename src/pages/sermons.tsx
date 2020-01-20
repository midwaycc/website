import React from 'react'
import { graphql, Link } from 'gatsby'
import { SermonUploadQuery } from '~/types/graphqlTypes'
import Section from '~/layout/Section'
import { SquareButton } from '~/components/SquareButton'
import { format } from 'date-fns'

type Props = {
  data: SermonUploadQuery
}

type Sermon = SermonUploadQuery['allSanitySermonUpload']['nodes'][0]

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

export default ({ data }: Props) => {
  if (!data.allSanitySermonUpload) return null
  const sermons = data.allSanitySermonUpload.nodes
  console.log(sermons)
  return (
    <Section css="padding: 2em">
      <Link to="/">
        <SquareButton point="left">Home</SquareButton>
      </Link>
      <h1>Sermons</h1>
      {sermons.map(sermon =>
        sermon._id ? <Sermon key={sermon._id} sermon={sermon} /> : null
      )}
    </Section>
  )
}

const Sermon = ({ sermon }: { sermon: Sermon }) => {
  const title = sermonTitle(sermon)
  const src = sermon.audioFile?.asset?.url

  return (
    <div>
      <h2>{title}</h2>
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
  const [y, m, d] = sermon.date.split('-').map(Number)
  const niceDate = format(
    new Date(
      Date.UTC(y, m - 1, d) + new Date().getTimezoneOffset() * 60 * 1000
    ),
    'MMMM do, yyyy'
  )
  return [`Message: ${niceDate}`, sermon.extraInfo].filter(Boolean).join(' - ')
}
