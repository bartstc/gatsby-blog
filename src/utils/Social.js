import React from 'react';
import styled from 'styled-components';

import facebook from '../assets/icons/fb.png';
import google from '../assets/icons/g_plus.png';
import instagram from '../assets/icons/instagram.png';
import twitter from '../assets/icons/twitter.png';

const Social = () => (
  <SocialWrapper>
    <li><a href="https://www.facebook.com" alt="facebook" target="_blank" rel="noopener noreferrer"><img src={facebook} /></a></li>
    <li><a href="https://www.gplus.com" alt="google plus" target="_blank" rel="noopener noreferrer"><img src={google} /></a></li>
    <li><a href="https://www.instagram.com" alt="instagram" target="_blank" rel="noopener noreferrer"><img src={instagram} /></a></li>
    <li><a href="https://www.twitter.com" alt="twitter" target="_blank" rel="noopener noreferrer"><img src={twitter} /></a></li>
  </SocialWrapper>
);

const SocialWrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 140px;

  img {
    width: 30px;
  }
`;

export default Social;