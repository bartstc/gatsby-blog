import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import barsIcon from '../assets/icons/hamburger.png';
import * as styles from '../utils/styles';

import Social from '../utils/Social';

const Header = ({ title, subtitle }) => (
  <HeaderWrapper>
    <div className="topbar">
      <button className="toggle">
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
);

const HeaderWrapper = styled.header`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

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
    margin-bottom: 2.5em;

    .title {
      font-size: 2.4rem;
      line-height: 1em;

      @media (min-width: 992px) {
        font-size: 3rem;
      }
    }
    
    .subtitle {
      font-size: .85rem;
      font-weight: ${styles.fontWeight.light};

      @media (min-width: 992px) {
        font-size: 1.1rem;
      }
    }
  }
`;

const Nav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
`;

export default Header;