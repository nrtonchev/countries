import axios from "axios";

const weatherUrl = 'https://api.openweathermap.org';

const getWeather = (capitalName) => {
  const api_key = import.meta.env.VITE_SOME_KEY
  const request = axios.get(`${weatherUrl}/data/2.5/weather?q=${capitalName}&appid=${api_key}`);
  return request.then(response => response.data);
}

const getIconUrl = (icon) => {
  return `${weatherUrl}img/wn/${icon}@2x.png`;
}

export default { getWeather, getIconUrl }