import React from 'react';
import styled from 'styled-components';

const Backdrop = (props) => (
  props.show ? <BackdropWrapper onClick={props.closeMenu}></BackdropWrapper> : null
);

const BackdropWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 50;
  left: 0;
  top: 0;
  background-color: rgba(255, 255, 255, .25);
`;

export default Backdrop;