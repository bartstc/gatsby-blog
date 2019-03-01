import React from 'react';
import styled from 'styled-components';

const Title = ({ title }) => (
  <TitleWrapper>{title}</TitleWrapper>
);

const TitleWrapper = styled.h2`
  font-size: 1.1rem;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: .6em;

  @media (min-width: 768px) {
    font-size: 1.3rem;
  }
`;

export default Title;