import React from 'react';
import styled from 'styled-components';
import Social from '../utils/Social';

const Footer = () => (
  <FooterWrapper>
    <Social />
  </FooterWrapper>
)

const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 3em;
  border-top: 2px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.2em 0;
`;

export default Footer;