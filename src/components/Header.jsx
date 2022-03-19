import React from 'react';
import styled from 'styled-components';

function Header() {
  return <HeaderWrapper>The Weather App</HeaderWrapper>;
}

const HeaderWrapper = styled.h1`
  font-family: 'Bangers', cursive;
  color: #dfce82;
  text-align: center;
  margin-top: 1rem;
  font-size: 3rem;
`;

export default Header;
