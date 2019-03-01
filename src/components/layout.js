import React from "react";
import styled from 'styled-components';
import Header from './Header';

class Layout extends React.Component {
  render() {
    const { title, subtitle, children } = this.props;

    return (
      <>
        <Header title={title} subtitle={subtitle} />
        <Main>{children}</Main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </>
    )
  }
}

const Main = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

export default Layout
