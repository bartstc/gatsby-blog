import React from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';

const SideDrawer = (props) => {
  let attachedClasses = ["Close"];
  if (props.open) {
    attachedClasses = ["Open"];
  };

  return (
    <StaticQuery query={pathQuery} render={data => {
      const posts = data.allContentfulPost.edges;

      let categories = [];
      posts.forEach(post => {
        categories = categories.concat(post.node.categories); // create array of all categories
      });

      categories = categories.filter((v, i, a) => a.indexOf(v) === i); // categories does not be duplicated

      return (
        <Nav className={attachedClasses}>
          <ul>
            <li><Link className="nav-link" to="/">Home</Link></li>
            <li><Link className="nav-link" to="/about">About Me</Link></li>
            <span className="space" />
            {categories.map(category => (
              <li key={category}>
                <Link className="nav-link" to={`/category/${category}`}>{category}</Link>
              </li>
            ))}
          </ul>
        </Nav>
      )
    }}
    />
  )
};

const Nav = styled.nav`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 25%;
  height: 100vh;
  min-width: 240px;
  background: #fff;
  padding: 3em 2em 0 2em;
  box-shadow: 2px 3px 10px -2px rgba(0, 0, 0, .6);
  transition: transform .3s ease-in-out;

  &.Open {
    transform: translateX(0);
  }

  &.Close {
    transform: translateX(-100%);
  }

  .nav-link {
    text-transform: uppercase;
    line-height: 1.9em;
  }

  .space {
    display: block;
    border-bottom: 1px solid #000;
    margin: .6em 0 2em 0;
  }
`;

export default SideDrawer;

const pathQuery = graphql`
  query {
    allContentfulPost {
      edges {
        node {
          id
          categories
        }
      }
    }
  }
`;