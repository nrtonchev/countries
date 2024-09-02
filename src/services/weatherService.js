import axios from "axios";

const weatherUrl = 'https://api.openweathermap.org';
const iconUrl = 'https://openweathermap.org/img/wn'
const api_key = import.meta.env.VITE_SOME_KEY

const getWeather = (capitalName) => {
  const request = axios.get(`${weatherUrl}/data/2.5/weather?q=${capitalName}&units=metric&appid=${api_key}`);
  return request.then(response => response.data);
}

const getIconUrl = (icon) => {
  return `${iconUrl}/${icon}@2x.png`;
}

export default { getWeather, getIconUrl }