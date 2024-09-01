import Country from "./Country"
import { useEffect, useState } from "react"

const Countries = ({countries}) => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  
  useEffect(() => {
    setSelectedCountry(null)
  }, [countries])

  if (countries.length === 0){
    return(
      <div>
        No matching countries found
      </div>
    )
  }
  else if (countries.length > 10){
    return(
      <div>
        Too many matches, specify another filter
      </div>
    )
  }
  else if (countries.length === 1 && !selectedCountry){
    setSelectedCountry(countries[0])
  }

  if(selectedCountry){
    return(
      <Country country={selectedCountry}/>
    )
  }

  return(
    <>
      {
        countries.map(c => 
          <li key={c.cca2}>
            {c.name.common}
            <button onClick={() => setSelectedCountry(c)}>show</button>
          </li>
        )
      }
    </>
  )
}

export default Countries