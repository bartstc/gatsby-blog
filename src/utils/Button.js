import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

export const Button = ({ children }) => (
  <ButtonWrapper>{children}</ButtonWrapper>
);

export const PaginationButton = ({ children, path, activeClass }) => (
  <Link
    style={{
      display: 'block',
      width: '27px',
      height: '27px',
      border: '1px solid #000',
      transition: 'background .2s ease-in-out',
      textAlign: 'center',
      lineHeight: '1.6em',
      marginRight: '.3em'
    }}
    to={path}
    activeClassName={activeClass}>{children}</Link>
)

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