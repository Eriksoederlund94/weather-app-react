import React from 'react';
import styled from 'styled-components';

function WeatherTabel({ datetime, temp, tempmax, tempmin, icon, conditions }) {
  return (
    <WeatherTabelWrapper>
      <h1>{conditions}</h1>
      <h1>{datetime}</h1>
      <h1>{temp}°c</h1>
      <p>{tempmin}°c</p>
      <p>{tempmax}°c</p>
      <img src={`/weather-icons/${icon}.png`} alt='' />
    </WeatherTabelWrapper>
  );
}

const WeatherTabelWrapper = styled.div``;

export default WeatherTabel;
