import React from 'react';
import styled from 'styled-components';

export const Title = ({ children }) => (
  <TitleWrapper>{children}</TitleWrapper>
);

export const TitleCenter = ({ children }) => (
  <TitleCenterWrapper>{children}</TitleCenterWrapper>
);

export const PageTitle = ({ children }) => (
  <PageTitleWrapper>{children}</PageTitleWrapper>
);

const TitleWrapper = styled.h2`
  font-size: 1.1rem;
  font-weight: 600;
  text-transform: uppercase;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const TitleCenterWrapper = styled(TitleWrapper)`
  font-weight: 300;
  text-align: center;
  margin-bottom: .6em;
  border-bottom: 1px solid #000;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

const PageTitleWrapper = styled(TitleCenterWrapper)`
  border: none;
  margin-bottom: 1em;
`;