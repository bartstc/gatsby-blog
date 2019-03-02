import React from 'react';
import styled from 'styled-components';

export const Button = ({ content }) => (
  <ButtonWrapper>{content}</ButtonWrapper>
);

export const LinkButton = ({ content }) => (
  <LinkButtonWrapper>{content}</LinkButtonWrapper>
)

const ButtonWrapper = styled.button`
  width: 120px;
  height: 30px;
  border: none;
  background: #000;
  color: #fff;
  text-transform: uppercase;
`;

const LinkButtonWrapper = styled(ButtonWrapper)`

`;