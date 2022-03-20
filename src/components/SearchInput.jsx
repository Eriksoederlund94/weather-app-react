import { useState } from 'react';
import styled from 'styled-components';

function SearchInput({ setSearchString }) {
  const [inputValue, setInputValue] = useState('');

  const searchWeatherHandler = (event) => {
    if (event.key === 'Enter') {
      setSearchString(event.target.value);
      setInputValue('');
    }
  };

  return (
    <SearchInputWrapper>
      <input
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        onKeyDown={searchWeatherHandler}
        type='text'
        placeholder='Search Weather'
      />
    </SearchInputWrapper>
  );
}

const SearchInputWrapper = styled.div`
  height: 150px;
  text-align: center;

  input {
    all: unset;
    margin: 1rem;
    background-color: #fff;
    padding: 0.5rem 1.5rem;
    border-radius: 8px;
  }
`;

export default SearchInput;
