import React from 'react';
import { Link } from "gatsby";
import Image from 'gatsby-image';
import styled from 'styled-components';
import { slugify } from '../utils/slugify';
import '../index.css';

import { Title } from "../utils/Title";

const Post = ({ children, postContent }) => {
  const post = postContent;

  return (
    <PostWrapper key={post.slug}>
      <Link className="main-link" to={post.slug}>
        <Title>{post.title}</Title>
      </Link>
      <small className="date">{post.date}</small>
      <Link to={post.slug}>
        <Image fluid={post.image.fluid} />
      </Link>
      {children}
      <p className="bold info">Categories:</p>
      <ul className="link-group">
        {post.categories.map(category => (
          <li key={category} className="link"><Link className="info" to={`/category/${category}`}>{category}</Link></li>
        ))}
      </ul>
      <p className="bold info">Tags:</p>
      <ul className="link-group">
        {post.tags.map(tag => (
          <li key={tag} className="link"><Link className="info" to={`/tag/${slugify(tag)}`}>{tag}</Link></li>
        ))}
      </ul>
    </PostWrapper>
  );
};

const PostWrapper = styled.article`
  display: flex;
  flex-direction: column;
  margin-bottom: 3em;

  .main-link {
    align-self: flex-start;
  }

  .link {
    margin-right: .4em;
    border-bottom: 1px solid transparent;
    transition: border-bottom .2s ease-in-out;
    line-height: .5em;

    &:hover {
      border-bottom: 1px solid #000;
    }
  }

  .link-group {
    display: flex;
    flex-wrap: wrap;
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