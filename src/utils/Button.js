import React from 'react';
import styled from 'styled-components';

export const Button = ({ children }) => (
  <ButtonWrapper>{children}</ButtonWrapper>
);

const ButtonWrapper = styled.button`
  width: 120px;
  height: 30px;
  border: none;
  background: #000;
  color: #fff;
  text-transform: uppercase;
  margin-top: .6em;
  cursor: pointer;
`;