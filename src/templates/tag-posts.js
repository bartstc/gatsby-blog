import React from 'react';
import { graphql } from "gatsby";

import SEO from "../components/seo";
import Post from '../components/Post';
import { PageTitle } from '../utils/Title';

const TagPosts = ({ data, pageContext }) => {
  const { tag } = pageContext;
  const posts = data.allContentfulPost.edges;
  const pageTitle = `${posts.length} post${(posts.length === 1) ? '' : 's'} tagged with ${tag}`;

  return (
    <>
      <SEO
        title={`${tag[0].toUpperCase() + tag.substring(1)} tag`}
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      <PageTitle>{pageTitle}</PageTitle>
      {posts.map(({ node }) => (
        <Post key={node.id} postContent={node}>
          <p className="info">{node.description}</p>
        </Post>
      ))}
    </>
  )
};

export default TagPosts;

export const tagQuery = graphql`
  query BlogPostsByTag($tag: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    allContentfulPost (
      filter: {tags: {in: [$tag]}}
      sort: {fields: [date], order: DESC}
    ) {
      edges {
        node {
          id
          title
          date (formatString: "MMMM Do YYYY")
          slug
          description
          tags
          categories
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