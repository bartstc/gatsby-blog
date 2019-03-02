import React from "react";
import styled from 'styled-components';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from "./Footer";

class Layout extends React.Component {
  render() {
    const { title, subtitle, path } = this.props;

    return (
      <>
        <Header title={title} subtitle={subtitle} />
        <Main>
          <section>{this.props.children}</section>
          <Sidebar path={path} />
        </Main>
        <Footer />
      </>
    )
  }
}

const Main = styled.div`
  max-width: 1100px;
  margin: 0 auto;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 72% calc(28% - 1.5em);
    grid-column-gap: 1.5em;
  }
`;

export default Layout;

// this.props.location.pathname returns in layout, template or page