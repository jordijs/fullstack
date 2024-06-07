const Results = ({ matchingCountries }) => {
    if (matchingCountries.length === 0) {
        return 'No countries match your search'
    } else if (matchingCountries.length > 10) {
        return 'Too many matches, specify another filter'
    } else if ((matchingCountries.length > 1) && (matchingCountries.length <= 10)) {
        return <ul>
            {matchingCountries.map(country =>
                <li key={country.cca3}>
                    {country.name.common}
                </li>
            )}
        </ul>
    } else if (matchingCountries.length === 1) {
        const country = matchingCountries[0]
        const languages = Object.entries(country.languages)
        return <div>
            <h1>{matchingCountries[0].name.common}</h1>
            <p>capital {matchingCountries[0].capital}</p>
            <p>area {matchingCountries[0].area}</p>
            <h2>languages:</h2>
            <ul>
                {languages.map(([code, language]) =>
                    <li key={code}>
                        {language}
                    </li>
                )}
            </ul>
            <img width="100%" src={country.flags.svg} alt={country.flags.alt}/>
        </div>
    }

}


export default Results