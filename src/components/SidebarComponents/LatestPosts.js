import React from 'react';
import { StaticQuery, graphql, Link } from "gatsby";
import styled from 'styled-components';
import { slugify } from '../../utils/slugify';

import { TitleCenter } from '../../utils/Title';

const LatestPosts = () => (
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

export default LatestPosts;

// const latestsPostsQuery = graphql`
//   query {
//     allContentfulPost
//   }
// `;