import React from "react";
import styled from 'styled-components';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from "./Footer";

class Layout extends React.Component {
  render() {
    const { title, subtitle } = this.props;
    console.log(this.props);

    return (
      <>
        <Header title={title} subtitle={subtitle} />
        <Main>
          <section>{this.props.children}</section>
          <Sidebar />
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
    grid-template-columns: 72% 28%;
    grid-column-gap: 1em;
  }

  @media (min-width: 992px) {
    grid-column-gap: 2em;
  }
`;

export default Layout;
