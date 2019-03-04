import React from 'react';
import { graphql, Link } from 'gatsby';

import SEO from "../components/seo";
import Post from '../components/Post';
import Pagination from "../components/Pagination";
import { Button } from '../utils/Button';
import { PageTitle } from '../utils/Title';

const postList = ({ data, pageContext: { currentPage, numberOfPages } }) => {
  const posts = data.allContentfulPost.edges;

  return (
    <>
      <SEO
        title={`All posts page ${currentPage}`}
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      <PageTitle>Page {currentPage}</PageTitle>
      {posts.map(({ node }) => (
        <Post key={node.id} postContent={node}>
          <p className="info">{node.description}</p>
          <Link to={node.slug}>
            <Button>Read more</Button>
          </Link>
        </Post>
      ))}
      <Pagination currentPage={1} numberOfPages={numberOfPages} />
    </>
  )
}

export const postQuery = graphql`
  query postListQuery ($skip: Int!, $limit: Int!) {
    allContentfulPost (
      sort: {fields: [date], order: DESC}
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          title
          date (formatString: "MMMM Do YYYY")
          description
          slug
          categories
          tags
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`;

export default postList;