import React from 'react';
import styled from 'styled-components';

function WeatherTabel({ datetime, temp, tempmax, tempmin, icon, conditions }) {
  return (
    <WeatherTabelWrapper>
      <p>{datetime}</p>
      <div className='condtions-container'>
        <p>{conditions}</p>
        <img src={`/weather-icons/${icon}.png`} alt='weather-icon' />
      </div>
      <div className='temp-container'>
        <p>Avarage: {temp}°c</p>
        <p>Min: {tempmin}°c</p>
        <p>Max: {tempmax}°c</p>
      </div>
    </WeatherTabelWrapper>
  );
}

const WeatherTabelWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  min-width: 750px;
  height: 80px;
  margin-top: 1rem;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 8px;

  p {
    font-size: 1rem;
  }

  img {
    width: 45px;
  }

  .condtions-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 260px;
  }
`;

export default WeatherTabel;
