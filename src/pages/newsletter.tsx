import React from 'react'
import { graphql, Link } from 'gatsby'
import { NewsletterQuery } from '~/types/graphqlTypes'
import Section from '~/layout/Section'
import { SquareButton } from '~/components/SquareButton'
import { niceDate } from '~/utils/niceDate'

type Props = {
  data: NewsletterQuery
}

export const query = graphql`
  query Newsletter {
    allSanityNewsletter(sort: { fields: date, order: DESC }) {
      nodes {
        _id
        date
        link
      }
    }
  }
`

export default ({ data }: Props) => {
  if (!data.allSanityNewsletter) return null
  const newsletters = data.allSanityNewsletter.nodes
  return (
    <Section css="padding: 2em">
      <Link to="/">
        <SquareButton point="left">Home</SquareButton>
      </Link>
      <h1>Newsletter</h1>
      {newsletters.map(newsletter =>
        newsletter._id && newsletter.link && newsletter.date ? (
          <div key={newsletter._id}>
            <h2>{niceDate(newsletter.date)}</h2>
            <a href={newsletter.link} target="_blank" rel="noreferrer noopener">
              View in browser
            </a>
          </div>
        ) : null
      )}
    </Section>
  )
}
