import styled from 'styled-components';
import SearchInput from '../components/SearchInput';
import WeatherTabel from '../components/WeatherTabel';
import { useWeather } from '../features/weather.api';
import { fixSearchString } from '../utils/helpers';

function WeatherPrognosPage({ searchString, setSearchString }) {
  const { data } = useWeather(searchString);

  return (
    <WeatherPrognosPageWrapper>
      <SearchInput setSearchString={setSearchString} />
      {data === undefined ? null : <h1>Weather for {fixSearchString(data.address)}</h1>}
      {data === undefined ? null : data.days.map((weatherdays, index) => <WeatherTabel key={index} {...weatherdays} />)}
    </WeatherPrognosPageWrapper>
  );
}

const WeatherPrognosPageWrapper = styled.section`
  min-height: 80vh;
  min-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  color: #3d4346;
  margin-bottom: 6rem;
`;

export default WeatherPrognosPage;
