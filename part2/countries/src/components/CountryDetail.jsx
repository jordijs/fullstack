/* eslint-disable react/prop-types */
const CountryDetail = ({ country }) => {
    if (country) {
        const languages = Object.entries(country.languages)
        return <div>
            <h1>{country.name.common}</h1>
            <p>capital {country.capital}</p>
            <p>area {country.area}</p>
            <h2>languages:</h2>
            <ul>
                {languages.map(([code, language]) =>
                    <li key={code}>
                        {language}
                    </li>
                )}
            </ul>
            <img width="100%" src={country.flags.svg} alt={country.flags.alt} />
        </div>
    }

}

export default CountryDetail