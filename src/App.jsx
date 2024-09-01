import { useEffect, useState } from 'react'
import './App.css'
import countryService from './services/countryService'
import Countries from './components/Countries';

function App() {
  const [filter, setFilter] = useState('')
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    console.log('fetching countries');
      countryService
        .getAll()
        .then(result => {
          setCountries(result);
      })
  }, [])

  const onSetFilter = (event) => {
    setFilter(event.target.value)
  }

  const filteredCountries = filter ? countries.filter(
    x => x.name.common
    .toLowerCase()
    .includes(filter.toLowerCase())) 
    : countries;

  return (
    <>
      <div>
        find countries
        <input type="text" value={filter} onChange={onSetFilter} />
      </div>
      <Countries countries={filteredCountries} />
    </>
  )
}

export default App
