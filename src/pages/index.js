import React from "react";
import { graphql, StaticQuery, Link } from "gatsby";
import '../index.css';

import SEO from "../components/seo";
import Post from '../components/Post';
import { Button } from '../utils/Button';
import Pagination from "../components/Pagination";

const BlogIndex = () => {
  const postsPerPage = 5;
  let numberOfPages;

  return (
    <>
      <SEO
        title="All posts"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      <StaticQuery query={pageQuery} render={data => {
        numberOfPages = Math.ceil(data.allContentfulPost.totalCount / postsPerPage);
        const posts = data.allContentfulPost.edges;

        return (
          <>
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
      }}
      />
    </>
  )
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        subtitle
      }
    }
    allContentfulPost (
      sort: {fields: [date], order: DESC}
      limit: 5
    ) {
      totalCount
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

// with gatsby-plugin-layout we cant wrap page in Layout component!