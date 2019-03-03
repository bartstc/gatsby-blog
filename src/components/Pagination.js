import React from 'react';
import { PaginationButton } from '../utils/Button';
import styled from 'styled-components';

const Pagination = ({ currentPage, numberOfPages }) => {
  const isFirst = currentPage === 1; // true/false
  const isLast = currentPage === numberOfPages; // also bool
  const previousPage = currentPage - 1 === 1 ? '/' : `/page/${(currentPage - 1).toString()}`;
  const nextPage = `/page/${(currentPage + 1).toString()}`;

  return (
    <PaginationLinks>
      {isFirst
        ? null
        : <PaginationButton path={previousPage}>{'<'}</PaginationButton>
      }

      {Array.from({ length: numberOfPages }, (item, i) =>
        <PaginationButton key={i + 1} path={`/${(i === 0 ? '' : 'page/' + (i + 1))}`} activeClass="active">{i + 1}</PaginationButton>
      )}

      {isLast
        ? null
        : <PaginationButton path={nextPage}>{'>'}</PaginationButton>
      }
    </PaginationLinks>
  );
};

const PaginationLinks = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1.5em;
`;

export default Pagination;