import React from 'react';
import styled from 'styled-components';

const Button = ({ content }) => (
  <ButtonWrapper>{content}</ButtonWrapper>
);

const ButtonWrapper = styled.button`
  width: 140px;
  height: 35px;
  border: none;
  background: #000;
  color: #fff;
  text-transform: uppercase;
`;

export default Button;