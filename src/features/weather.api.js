import { useQuery } from 'react-query';
import { get } from '../utils/fetchHelpers';

const apiKey = '9YTGM3Y29FFRG69E7SZEQ4GDJ';
const baseURL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/`;

export function useWeather(searchString) {
  return useQuery(['weather', searchString], () =>
    get(`${baseURL}${searchString}?unitGroup=metric&key=${apiKey}&contentType=json`)
  );
}
