import React from 'react';
import { StaticQuery, graphql, Link } from "gatsby";
import styled from 'styled-components';
import { slugify } from '../../utils/slugify';

import { TitleCenter } from '../../utils/Title';

const Tags = () => (
  <StaticQuery
    query={tagsQuery}
    render={data => {
      const posts = data.allContentfulPost.edges;
      let tags = [];

      posts.forEach(post => {
        tags = tags.concat(post.node.tags);
      });

      // tags = ['design', 'architecture', '...'] // all tags we have ...
      // {design: 5, architecture: 6, ...} // should convert into object like this
      let tagPostCounts = {};
      tags.forEach(tag => {
        tagPostCounts[tag] = (tagPostCounts[tag] || 0) + 1; // return tag or 0(when tag does not exist) or increment tag by one if it arleady exist
      });

      tags = tags.filter((v, i, a) => a.indexOf(v) === i); // tags does not be duplicated

      return (
        <article className="sidebar-article">
          <TitleCenter title="Tags" />
          <TagList>
            {tags.map(tag => (
              <li className="tag" key={tag}>
                <Link color="primary" to={`/tag/${slugify(tag)}`}>
                  <p className="info">{tag}({tagPostCounts[tag]})</p>
                </Link>
              </li>
            ))}
          </TagList>
        </article>
      )
    }}
  />
);

const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;

  .tag {
    margin-right: .6em;
    border-bottom: 1px solid transparent;
    transition: border-bottom .2s ease-in-out;

    &:hover {
      border-bottom: 1px solid #000;
    }
  }
`;

export default Tags;

const tagsQuery = graphql`
  query {
    allContentfulPost {
      edges {
        node {
          tags
        }
      }
    }
  }
`;