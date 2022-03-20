import styled from 'styled-components';

function WeatherPrognosPage() {
  return <WeatherPrognosPageWrapper>WeatherPrognosPage</WeatherPrognosPageWrapper>;
}

const WeatherPrognosPageWrapper = styled.section`
  min-height: 80vh;
  min-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
`;

export default WeatherPrognosPage;
