import React from 'react';
import styled from 'styled-components';
import { useWeather } from '../features/weather.api';
import { getTheCurrentDate, fixSearchString } from '../utils/helpers';
import { useNavigate } from 'react-router-dom';

function WeatherCard({ searchString }) {
  const { data } = useWeather(searchString);
  let navigate = useNavigate();

  return (
    <>
      {data === undefined ? null : (
        <WeatherCardWrapper>
          <div className='current-weather-info-container'>
            <h4>{fixSearchString(data.address)}</h4>
            <h6>{data.currentConditions.conditions}</h6>
            <img src={`/weather-icons/${data.currentConditions.icon}.png`} alt='' />
            <h1>{data.currentConditions.temp}°c</h1>
            <h6>{getTheCurrentDate()}</h6>
            <p>{data.description}</p>
            <button onClick={() => navigate('/weather-prognos')}>See more details</button>
          </div>
        </WeatherCardWrapper>
      )}
    </>
  );
}

const WeatherCardWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  width: 350px;
  height: 450px;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 8px;
  color: #3d4346;
  margin-bottom: 2rem;
  text-align: center;

  .current-weather-info-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    img {
      width: 75px;
    }

    h1,
    h4,
    h6,
    p,
    img {
      margin-top: 0.5rem;
    }

    p {
      font-size: 1rem;
    }

    button {
      all: unset;
      margin-top: 1rem;
      font-size: 1rem;
      padding: 0.5rem 1.5rem;
      border: 3px solid rgba(255, 255, 255, 0.18);
      border-radius: 6px;
      cursor: pointer;

      &:hover {
        background: rgba(255, 255, 255, 0.05);
      }
    }
  }
`;

export default WeatherCard;
