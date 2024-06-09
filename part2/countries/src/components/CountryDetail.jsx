import Weather from "./Weather"

/* eslint-disable react/prop-types */
const CountryDetail = ({ country }) => {
    if (!country) {
        return
    }

    const languages = Object.entries(country.languages)
    return <div>
        <h1>{country.name.common}</h1>
        <p>capital {country.capital}</p>
        <p>area {country.area}</p>
        <h3>languages:</h3>
        <ul>
            {languages.map(([code, language]) =>
                <li key={code}>
                    {language}
                </li>
            )}
        </ul>
        <img width="300px" src={country.flags.svg} alt={country.flags.alt} />
        <Weather country={country} />
    </div>
}

export default CountryDetail