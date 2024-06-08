import Form from './components/Form'
import Results from './components/Results'
import { useState, useEffect } from "react"
import countriesService from './services/countries'

const App = () => {

  useEffect(() => {
    countriesService.getAll()
      .then(response => setCountries(response))
  }, [])
  const [search, setSearch] = useState('')
  const [countries, setCountries] = useState([])
  const [matchingCountries, setMatchingCountries] = useState([])
  const [countryDetail, setCountryDetail] = useState(null)

  const handleSearchChange = (event) => {
    const searchInput = event.target.value
    setSearch(searchInput)
    const returnedCountries = executeSearch(searchInput)
    setMatchingCountries(returnedCountries)
    setCountryDetail(null)
  }

  const executeSearch = (searchInput) => {
    const matchingCountries = countries.filter(country => {
      const nameFromDatabase = country.name.common.toLowerCase()
      const query = searchInput.toLowerCase()
      const regex = new RegExp(query)
      return regex.test(nameFromDatabase)
    })
    return matchingCountries
  }

  return (
    <div>
      <Form
        search={search}
        handleSearchChange={handleSearchChange}
      />
      <Results
        search={search}
        matchingCountries={matchingCountries}
        countryDetail={countryDetail}
        setCountryDetail={setCountryDetail}
      />
    </div>
  )
}

export default App