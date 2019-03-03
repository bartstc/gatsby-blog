import React from 'react';
import { StaticQuery, graphql, Link } from "gatsby";
import styled from 'styled-components';
import Img from 'gatsby-image';

import { TitleCenter } from '../../utils/Title';

const LatestPosts = () => (
  <StaticQuery
    query={latestsPostsQuery}
    render={data => {
      const posts = data.allContentfulPost.edges;

      return (
        <section className="sidebar-article">
          <TitleCenter>Latest posts</TitleCenter>
          <ul>
            {posts.map(post => {
              const { node } = post;

              return (
                <LatestPost className="post" key={node.id}>
                  <Link to={node.slug}>
                    <Img fluid={node.image.fluid} alt="" />
                  </Link>
                  <h2 className="title">{node.title}</h2>
                  <p className="date">{node.date}</p>
                </LatestPost>
              )
            })}
          </ul>
        </section>
      )
    }}
  />
);

const LatestPost = styled.article`
  margin-bottom: 1em;

  .title {
    text-transform: capitalize;
    font-size: 1rem;
    font-weight: 600;
    margin-top: .3em;
  }

  .date {
    font-size: .8rem;
    font-style: italic;
  }
`;

export default LatestPosts;

const latestsPostsQuery = graphql`
  query {
    allContentfulPost (
      sort: {fields: [date], order: DESC}
      limit: 3
    ) {
      edges {
        node {
          id
          title
          date (formatString: "MMMM Do YYYY")
          slug
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