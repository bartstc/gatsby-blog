import React from 'react';
import styled from 'styled-components';

export const Title = ({ title }) => (
  <TitleWrapper>{title}</TitleWrapper>
);

export const TitleCenter = ({ title }) => (
  <TitleCenterWrapper>{title}</TitleCenterWrapper>
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
  text-align: center;
  margin-bottom: .6em;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;