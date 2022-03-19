import { useQuery } from 'react-query';
import { get } from '../utils/fetchHelpers';

const apiKey = import.meta.env.VITE_API_KEY;
const baseURL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/`;

export function useWeather(searchString) {
  return useQuery(['weather', searchString], () =>
    get(`${baseURL}${searchString}?unitGroup=metric&key=${apiKey}&contentType=json`)
  );
}
