import React from 'react'
import styled from 'styled-components'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Section from '~/layout/Section'
import { RecentPostsQuery } from '~/types/graphqlTypes'
import RecentPost from './RecentPost'
import { ActionButton } from '~/components/Pills'

type Props = {
  posts?: RecentPostsQuery['allSanityPost']['nodes']
}

export default ({ posts }: Props) => {
  const data: RecentPostsQuery = useStaticQuery(query)
  if (!data.allSanityPost || !data.allSanityPost.nodes) return null
  const postsToUse = posts || data.allSanityPost.nodes

  return (
    <Container color="#5aa7a9">
      <h1 css="color: white; text-align: center">Recent Updates</h1>
      <Posts>
        {postsToUse.map((post, i) => (
          <RecentPost key={post._id || `post-${i}`} post={post} />
        ))}
        <SeeMoreRow>
          <Link to="/posts">
            <ActionButton css="padding-top: 0.8em">
              &nbsp;&nbsp;See all &#8594;
            </ActionButton>
          </Link>
        </SeeMoreRow>
      </Posts>
    </Container>
  )
}

const query = graphql`
  query RecentPosts {
    allSanityPost(
      limit: 6
      sort: { fields: date, order: DESC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        _id
        _rawSummary(resolveReferences: { maxDepth: 10 })
        thumbnail {
          asset {
            fixed(width: 75, height: 75) {
              ...GatsbySanityImageFixed
            }
          }
        }
        date
        slug {
          current
        }
        title
      }
    }
  }
`

const Container = styled(Section)`
  padding-top: 2em;
  padding-bottom: 3em;
`

const Posts = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
`

const SeeMoreRow = styled.div`
  margin-top: 2.5em;
  text-align: center;
  width: 100%;
  display: flex;
  justify-content: center;
`
