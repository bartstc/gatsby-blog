import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { TitleCenter } from '../utils/Title';

const RelatedPosts = ({ relatedPosts }) => (
  <RelatedPostsWrapper>
    <TitleCenter>Related posts</TitleCenter>
    <div className="related-posts-wrapper">
      {relatedPosts
        ?
        relatedPosts.map(({ node }) => (
          <article className="related-post" key={node.id}>
            <Link to={node.slug}>
              <Img fluid={node.image.fluid} />
            </Link>
            <h2 className="title">{node.title}</h2>
            <p className="date">{node.date}</p>
          </article>
        ))
        :
        <p>There is no any related posts.</p>
      }
    </div>
  </RelatedPostsWrapper>
);

const RelatedPostsWrapper = styled.section`
  margin-top: 1.6em;

  .related-posts-wrapper {
    display: flex;
    flex-wrap: wrap;
  }

  .related-post {
    flex: 45%;
    max-width: 45%;
    
    &:first-child {
      margin-right: .8em;

      @media (min-width: 992px) {
        margin-right: 2em;
      }
    }

    .title {
      text-transform: capitalize;
      font-size: 1rem;
      font-weight: 600;
      margin-top: .3em;
    }
  }
`;

export default RelatedPosts;