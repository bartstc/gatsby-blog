import React, { useState } from "react";
import styled from 'styled-components';
import PageTransition from 'gatsby-plugin-page-transitions';

import Header from './Header';
import Sidebar from './Sidebar';
import Footer from "./Footer";
import Backdrop from './Backdrop';
import SideDrawer from './SideDrawer';

const Layout = (props) => {
  const [showSideDrawer, setSideDrawer] = useState(false);

  const sideDrawerToggleHandler = () => {
    setSideDrawer(!showSideDrawer)
  };

  const sideDrawerClose = () => {
    setSideDrawer(false);
  };

  const { title, subtitle, path, children } = props;

  return (
    <PageTransition>
      <SideDrawer open={showSideDrawer} />
      <Backdrop show={showSideDrawer} closeMenu={sideDrawerClose} />
      <Header title={title} subtitle={subtitle} toggleMenu={sideDrawerToggleHandler} />
      <Main>
        <section>{children}</section>
        <Sidebar path={path} />
      </Main>
      <Footer />
    </PageTransition>
  )
}

const Main = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  transition: .3s ease-in-out;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: calc(72% - 1em) calc(28% - 1.5em);
    grid-column-gap: 2.5em;
  }
`;

export default Layout;

// this.props.location.pathname returns in layout, template or page