import React, { useState } from "react";
import styled from 'styled-components';
import Transition from '../utils/transition';

import Header from './Header';
import Sidebar from './Sidebar';
import Footer from "./Footer";
import Backdrop from './Backdrop';
import SideDrawer from './SideDrawer';

const Layout = ({ children, location }) => {
  const [showSideDrawer, setSideDrawer] = useState(false);

  const sideDrawerToggleHandler = () => {
    setSideDrawer(!showSideDrawer)
  };

  const sideDrawerClose = () => {
    setSideDrawer(false);
  };

  return (
    <>
      <SideDrawer open={showSideDrawer} closeMenu={sideDrawerClose} />
      <Backdrop show={showSideDrawer} closeMenu={sideDrawerClose} />
      <Header toggleMenu={sideDrawerToggleHandler} />
      <Transition location={location}>
        <Main>
          <section>{children}</section>
          <Sidebar path={location.pathname} />
        </Main>
      </Transition>
      <Footer />
    </>
  )
}

const Main = styled.main`
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