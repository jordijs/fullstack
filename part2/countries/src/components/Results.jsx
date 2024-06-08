/* eslint-disable react/prop-types */
import CountryDetail from "./CountryDetail"

const Results = ({ search, matchingCountries, countryDetail, setCountryDetail }) => {

    if (!search) {
        return ''
    } else {
        if (matchingCountries.length === 0) {
            return 'No countries match your search'
        } else if (matchingCountries.length > 10) {
            return 'Too many matches, specify another filter'
        } else if ((matchingCountries.length > 1) && (matchingCountries.length <= 10)) {
            return <div>
                <ul>
                    {matchingCountries.map(country =>
                        <li key={country.cca3}>
                            {country.name.common}<button onClick={() => setCountryDetail(country)} >show</button>
                        </li>
                    )}
                </ul>
                <CountryDetail country={countryDetail} />
            </div>
        } else if (matchingCountries.length === 1) {
            return <CountryDetail country={matchingCountries[0]} />
        }
    }

}


export default Results