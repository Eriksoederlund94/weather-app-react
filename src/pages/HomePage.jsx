import { useState } from 'react';
import styled from 'styled-components';
import WeatherCard from '../components/WeatherCard';

function HomePage() {
  const [searchString, setSearchString] = useState('');
  const [inputValue, setInputValue] = useState('');

  const searchWeatherHandler = (event) => {
    if (event.key === 'Enter') {
      setSearchString(event.target.value);
      setInputValue('');
    }
  };

  return (
    <HomePageWrapper>
      <div className='input-container'>
        <input
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          onKeyDown={searchWeatherHandler}
          type='text'
          placeholder='Search Weather'
        />
      </div>
      <WeatherCard searchString={searchString} />
    </HomePageWrapper>
  );
}

const HomePageWrapper = styled.section`
  min-height: 80vh;
  min-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;

  .input-container {
    height: 150px;
    text-align: center;

    input {
      all: unset;
      margin: 1rem;
      background-color: #fff;
      padding: 0.5rem 1.5rem;
      border-radius: 8px;
    }
  }
`;

export default HomePage;
