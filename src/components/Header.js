import React from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';
import barsIcon from '../assets/icons/hamburger.png';

import Social from '../utils/Social';

const Header = (props) => (
  <StaticQuery query={headerQuery} render={data => {
    const { title, subtitle } = data.site.siteMetadata;

    return (
      <HeaderWrapper>
        <div className="topbar">
          <button onClick={props.toggleMenu} className="toggle">
            <img src={barsIcon} alt="open menu" />
          </button>
          <Social />
        </div>
        <div className="banner">
          <h1 className="title">
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={`/`}
            >
              {title}
            </Link>
          </h1>
          <p className="subtitle">{subtitle}</p>
        </div>
      </HeaderWrapper>
    )
  }}
  />
);

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 992px) {
    margin-bottom: 1em;
  }

  .topbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 70px;

    @media (min-width: 1340px) {
      padding: 0 1em;
    }
  }

  .toggle {
    width: 34px;
  }

  .banner {
    text-align: center;
    margin-top: .8em;
    margin-bottom: 1.5em;
    padding-bottom: 1em;
    width: 100%;
    max-width: 1000px;
    border-bottom: 2px solid #000;

    .title {
      font-size: 2.4rem;
      line-height: 1em;

      @media (min-width: 992px) {
        font-size: 3rem;
      }
    }
    
    .subtitle {
      font-size: .85rem;
      font-weight: 300;

      @media (min-width: 992px) {
        font-size: 1.1rem;
      }
    }
  }
`;

export const headerQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        subtitle
      }
    }
  }
`;

export default Header;