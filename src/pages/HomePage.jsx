import styled from 'styled-components';
import WeatherCard from '../components/WeatherCard';
import SearchInput from '../components/SearchInput';

function HomePage({ searchString, setSearchString }) {
  return (
    <HomePageWrapper>
      <SearchInput setSearchString={setSearchString} />
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
