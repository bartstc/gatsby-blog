import React from 'react';
import { Link } from "gatsby";
import Image from 'gatsby-image';
import styled from 'styled-components';
import '../index.css';

import { Title } from "../utils/Title";

const Post = ({ children, postContent }) => {
  const post = postContent;

  return (
    <PostWrapper key={post.slug}>
      <Link className="main-link" to={post.slug}>
        <Title title={post.title} />
      </Link>
      <small className="date">{post.date}</small>
      <Link to={post.slug}>
        <Image fluid={post.image.fluid} />
      </Link>
      {children}
      <span className="bold info">Categories:</span>
      <ul className="link-group">
        {post.categories.split(', ').map(category => (
          <li key={category} className="link"><Link className="info" to={`/categories/${category}`}>{category}</Link></li>
        ))}
      </ul>
      <span className="bold info">Tags:</span>
      <ul className="link-group">
        {post.tags.split(', ').map(tag => (
          <li key={tag} className="link"><Link className="info" to={`/tags/${tag}`}>{tag}</Link></li>
        ))}
      </ul>
    </PostWrapper>
  );
};

const PostWrapper = styled.article`
  display: flex;
  flex-direction: column;
  margin-bottom: 2.2em;

  .main-link {
    align-self: flex-start;
  }

  .link {
    margin-right: .4em;
    border-bottom: 1px solid transparent;
    transition: border-bottom .2s ease-in-out;

    &:hover {
      border-bottom: 1px solid #000;
    }
  }

  .link-group {
    display: flex;
  }

  .date {
    font-style: italic;
    font-size: .8rem;
    margin-bottom: .8em;
  }

  .info {
    margin-top: .7em;
  }
`;

export default Post;