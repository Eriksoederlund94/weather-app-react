import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function Header() {
  let navigate = useNavigate();
  return <HeaderWrapper onClick={() => navigate('/')}>The Weather App</HeaderWrapper>;
}

const HeaderWrapper = styled.h1`
  font-family: 'Bangers', cursive;
  color: #dfce82;
  text-align: center;
  margin-top: 1rem;
  font-size: 3rem;
  cursor: pointer;
`;

export default Header;
