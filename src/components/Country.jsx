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
    const imageUrl = weatherService.getIconUrl(weather.weather[0].icon);
    console.log(imageUrl)
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
        <p>Temperature: {weather.main.temp} Celcius</p>
        <img src={imageUrl} alt={weather.weather[0].description} />
        <p>Wind: {weather.wind.speed} m/s</p>
      </>
    )
  }
  
  return(
    null
  )
}

export default Country