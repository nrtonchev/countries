import { useEffect, useState } from "react"
import weatherService from "../services/weatherService";

const Country = ({country}) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    console.log('fetching weather')
    if(country){
      weatherService.getWeather(country.capital[0])
      .then(result => {
        setWeather(result);
      })
    }
  }, [country])
  
  if(country && weather){
    const languages = Object.keys(country.languages).map(key => country.languages[key]);
    return(
      <>
        <h1>{country.name.common}</h1>
        <p>Capital: {country.capital[0]}</p>
        <p>Area: {country.area}</p>
        <h3>Languages</h3>
        <ul>
          {languages.map(l => 
            <li key={l}>{l}</li>
          )}
        </ul>
        <img className="flag" src={country.flags.svg} alt={country.flags.alt} />
        <h2>Weather in {country.capital[0]}</h2>
        <p>Temperature: {() => {
          return (weather.main.temp - 32) / 1.8
        }}</p>
        <img src={() => weatherService.getIconUrl(weather.weather[0].icon)} alt={weather.weather[0].description} />
        <p>Wind</p>
      </>
    )
  }
  
  return(
    null
  )
}

export default Country