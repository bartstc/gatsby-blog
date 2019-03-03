import React from 'react';
import { graphql } from "gatsby";

import SEO from "../components/seo";
import Post from '../components/Post';
import { PageTitle } from '../utils/Title';

const TagPosts = ({ data, pageContext }) => {
  const { category } = pageContext;
  const posts = data.allContentfulPost.edges;
  const pageTitle = `${posts.length} post${(posts.length === 1) ? '' : 's'} in the ${category} category`;

  return (
    <>
      <SEO
        title={`${category[0].toUpperCase() + category.substring(1)} category`}
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

export const categoryQuery = graphql`
  query BlogPostsByCategory($category: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    allContentfulPost (
      filter: {categories: {in: [$category]}}
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