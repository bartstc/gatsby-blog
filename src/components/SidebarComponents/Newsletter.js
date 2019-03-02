import React from 'react';
import styled from 'styled-components';

import { TitleCenter } from '../../utils/Title';
import { Button } from '../../utils/Button';

const FakeForm = () => (
  <article className="sidebar-article">
    <TitleCenter>Newsletter</TitleCenter>
    <Form>
      <input type="text" placeholder="Email ..." />
      <Button>Send</Button>
    </Form>
  </article>
);

const Form = styled.form`
  display: flex;
  flex-direction: column;

  input {
    background: none;
    border: none;
    border-bottom: 1px solid #000;
    line-height: 1.3rem;
    margin-top: 1em;

    &::placeholder {
      color: #000;
    }
  }
`;

export default FakeForm;