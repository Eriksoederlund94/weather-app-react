import React from 'react';
import styled from 'styled-components';
import { useWeather } from '../features/weather.api';
import { getTheCurrentDate, fixSearchString } from '../utils/helpers';

function WeatherCard({ searchString }) {
  const { data } = useWeather(searchString);

  return (
    <>
      {data === undefined ? null : (
        <WeatherCardWrapper>
          <div className='current-weather-info-container'>
            <h4>{fixSearchString(data.address)}</h4>
            <h6>{data.currentConditions.conditions}</h6>
            <h1>{data.currentConditions.temp}°c</h1>
            <h6>{getTheCurrentDate()}</h6>
            <p>{data.description}</p>
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
  background: #a8c0ff; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #a8c0ff, #3f2b96); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #a8c0ff, #3f2b96);
  border-radius: 8px;
  color: #fff;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  margin-bottom: 2rem;
  text-align: center;

  .current-weather-info-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    img {
      width: 50px;
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
  }
`;

export default WeatherCard;
