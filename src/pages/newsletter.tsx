import React from 'react'
import styled from 'styled-components'
import { graphql, Link } from 'gatsby'
import { Section } from '~/layout/Section'
import { Content } from '~/layout/Content'
import { SquareButton } from '~/components/SquareButton'
import { CardContainer } from '~/components/CardContainer'
import { niceDate } from '~/utils/niceDate'
import { NewsletterQuery } from '~/types/graphqlTypes'

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

export default function NewsletterPage({ data }: Props) {
  if (!data.allSanityNewsletter) {
    return null
  }

  const newsletters = data.allSanityNewsletter.nodes

  return (
    <Section>
      <Content>
        <Link to="/">
          <SquareButton point="left">Home</SquareButton>
        </Link>
        <h1>Newsletter</h1>
        <CardContainer $big $noHover>
          {newsletters.map(newsletter =>
            newsletter._id && newsletter.link && newsletter.date ? (
              <div key={newsletter._id}>
                <NewsletterTitle>{niceDate(newsletter.date)}</NewsletterTitle>
                <a
                  href={newsletter.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View in browser
                </a>
              </div>
            ) : null
          )}
        </CardContainer>
      </Content>
    </Section>
  )
}

const NewsletterTitle = styled.h2`
  margin: 0;
  margin-bottom: 0.5em;
  color: ${props => props.theme.colors.darkTeal.hex};
`
